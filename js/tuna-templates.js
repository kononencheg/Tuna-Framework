tuna.tmpl = {};
tuna.tmpl.compilers = {};
tuna.tmpl.data = {};
tuna.tmpl.markup = {};
tuna.tmpl.settings = {};
tuna.tmpl.units = {};
tuna.tmpl.units.list = {};
tuna.tmpl.units.condition = {};
tuna.tmpl.compileFromMarkup = function(element, templateId) {
  var result = null;
  var settings = tuna.tmpl.getTemplateSettingsById(templateId);
  if(settings !== null) {
    result = tuna.tmpl.compile(element, settings)
  }
  return result
};
tuna.tmpl.compile = function(element, settings) {
  return tuna.tmpl.getCompiler().compile(settings, element)
};
tuna.tmpl.getCompiler = function() {
  if(tuna.tmpl.__compiler === null) {
    tuna.tmpl.__compiler = new tuna.tmpl.compilers.TemplateCompiler;
    tuna.tmpl.__compiler.registerCompiler(tuna.tmpl.units.Spot.NAME, new tuna.tmpl.compilers.SpotCompiler);
    tuna.tmpl.__compiler.registerCompiler(tuna.tmpl.units.Attribute.NAME, new tuna.tmpl.compilers.AttributeCompiler);
    tuna.tmpl.__compiler.registerCompiler(tuna.tmpl.units.Checkbox.NAME, new tuna.tmpl.compilers.CheckboxCompiler);
    tuna.tmpl.__compiler.registerCompiler(tuna.tmpl.units.List.NAME, new tuna.tmpl.compilers.ListCompiler(tuna.tmpl.__compiler));
    var conditionCompiler = new tuna.tmpl.compilers.ConditionCompiler;
    conditionCompiler.registerAction(tuna.tmpl.units.condition.ClassAction.NAME, new tuna.tmpl.units.condition.ClassAction);
    conditionCompiler.registerOperator(tuna.tmpl.units.condition.IsSetOperator.NAME, new tuna.tmpl.units.condition.IsSetOperator);
    conditionCompiler.registerOperator(tuna.tmpl.units.condition.NotSetOperator.NAME, new tuna.tmpl.units.condition.NotSetOperator);
    conditionCompiler.registerOperator(tuna.tmpl.units.condition.EqualsOperator.NAME, new tuna.tmpl.units.condition.EqualsOperator);
    conditionCompiler.registerOperator(tuna.tmpl.units.condition.NotEqualsOperator.NAME, new tuna.tmpl.units.condition.NotEqualsOperator);
    tuna.tmpl.__compiler.registerCompiler(tuna.tmpl.units.Condition.NAME, conditionCompiler)
  }
  return tuna.tmpl.__compiler
};
tuna.tmpl.__compiler = null;
tuna.tmpl.getMarkupBuilder = function() {
  if(tuna.tmpl.__markupBuilder === null) {
    tuna.tmpl.__markupBuilder = new tuna.tmpl.markup.MarkupTemplateBuilder;
    tuna.tmpl.__markupBuilder.addExtractor(new tuna.tmpl.markup.SpotExtractor);
    tuna.tmpl.__markupBuilder.addExtractor(new tuna.tmpl.markup.ListExtractor(tuna.tmpl.__markupBuilder));
    tuna.tmpl.__markupBuilder.addExtractor(new tuna.tmpl.markup.AttributeExtractor);
    tuna.tmpl.__markupBuilder.addExtractor(new tuna.tmpl.markup.CheckboxExtractor);
    var conditionExtractor = new tuna.tmpl.markup.ConditionExtractor;
    conditionExtractor.addActionType(tuna.tmpl.units.condition.ClassAction.NAME);
    conditionExtractor.addOperatorType(tuna.tmpl.units.condition.IsSetOperator.NAME);
    conditionExtractor.addOperatorType(tuna.tmpl.units.condition.NotSetOperator.NAME);
    conditionExtractor.addOperatorType(tuna.tmpl.units.condition.EqualsOperator.NAME);
    conditionExtractor.addOperatorType(tuna.tmpl.units.condition.NotEqualsOperator.NAME);
    tuna.tmpl.__markupBuilder.addExtractor(conditionExtractor)
  }
  return tuna.tmpl.__markupBuilder
};
tuna.tmpl.__markupBuilder = null;
tuna.tmpl.__settingsTable = {};
tuna.tmpl.getTemplateSettingsById = function(id) {
  if(tuna.tmpl.__settingsTable[id] === undefined) {
    tuna.tmpl.__settingsTable[id] = tuna.tmpl.getMarkupBuilder().buildSettings(id)
  }
  return tuna.tmpl.__settingsTable[id]
};
tuna.tmpl.data.DataNode = function(value, opt_parent, opt_key) {
  this.__value = value;
  this.__parent = opt_parent || tuna.tmpl.data.NULL_NODE;
  this.__key = opt_key || null;
  this.__keyNode = null;
  this.__children = {}
};
tuna.tmpl.data.DataNode.prototype.getParent = function() {
  return this.__parent
};
tuna.tmpl.data.DataNode.prototype.getKey = function() {
  if(this.__keyNode === null) {
    this.__keyNode = new tuna.tmpl.data.DataNode(this.__key)
  }
  return this.__keyNode
};
tuna.tmpl.data.DataNode.prototype.getRoot = function() {
  return this.__parent !== tuna.tmpl.data.NULL_NODE ? this.__parent.getRoot() : this
};
tuna.tmpl.data.DataNode.prototype.getValue = function() {
  return this.__value
};
tuna.tmpl.data.DataNode.prototype.getStringValue = function() {
  if(this.__value !== null) {
    return this.__value.toString()
  }
  return null
};
tuna.tmpl.data.DataNode.prototype.growChild = function(key) {
  if(this.__children[key] === undefined) {
    if(this.__value === null || this.__value[key] === undefined) {
      this.__children[key] = tuna.tmpl.data.NULL_NODE
    }else {
      this.__children[key] = new tuna.tmpl.data.DataNode(this.__value[key], this, key)
    }
  }
  return this.__children[key]
};
tuna.tmpl.data.NULL_NODE = new tuna.tmpl.data.DataNode(null);
tuna.tmpl.data.PathEvaluator = function() {
  this.__parsedPath = null
};
tuna.tmpl.data.PathEvaluator.prototype.setPath = function(path) {
  this.__parsedPath = path.split("/")
};
tuna.tmpl.data.PathEvaluator.prototype.evaluate = function(dataNode) {
  if(this.__parsedPath !== null) {
    return this.__applyNextToken(this.__parsedPath, dataNode, 0)
  }
  return tuna.tmpl.data.NULL_NODE
};
tuna.tmpl.data.PathEvaluator.prototype.__applyNextToken = function(path, dataNode, index) {
  var token = path[index];
  if(token !== undefined && dataNode !== tuna.tmpl.data.NULL_NODE) {
    return this.__applyNextToken(path, this.__applyToken(token, dataNode), ++index)
  }
  return dataNode
};
tuna.tmpl.data.PathEvaluator.prototype.__applyToken = function(token, dataNode) {
  if(token.length === 0) {
    return dataNode.getRoot()
  }
  if(token === ".") {
    return dataNode
  }
  if(token === "..") {
    return dataNode.getParent()
  }
  if(token === "$key") {
    return dataNode.getKey()
  }
  return dataNode.growChild(token)
};
tuna.tmpl.settings.IItemSettings = function() {
};
tuna.tmpl.settings.IItemSettings.prototype.getType = function() {
};
tuna.tmpl.settings.SpotSettings = function(targetSelector, dataPath) {
  this.targetSelector = targetSelector;
  this.dataPath = dataPath;
  this.pattern = null
};
tuna.tmpl.settings.SpotSettings.prototype.getType = function() {
  return tuna.tmpl.units.Spot.NAME
};
tuna.tmpl.settings.AttributeSettings = function(targetSelector, dataPath, attributeName) {
  tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);
  this.attributeName = attributeName;
  this.hasEvent = false
};
tuna.utils.extend(tuna.tmpl.settings.AttributeSettings, tuna.tmpl.settings.SpotSettings);
tuna.tmpl.settings.AttributeSettings.prototype.getType = function() {
  return tuna.tmpl.units.Attribute.NAME
};
tuna.tmpl.settings.ConditionSettings = function(targetSelector, dataPath, actionType, operatorType) {
  tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);
  this.actionType = actionType;
  this.operatorType = operatorType;
  this.actionData = "";
  this.operatorData = ""
};
tuna.utils.extend(tuna.tmpl.settings.ConditionSettings, tuna.tmpl.settings.SpotSettings);
tuna.tmpl.settings.ConditionSettings.prototype.getType = function() {
  return tuna.tmpl.units.Condition.NAME
};
tuna.tmpl.settings.CheckboxSettings = function(targetSelector, dataPath) {
  tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath)
};
tuna.utils.extend(tuna.tmpl.settings.CheckboxSettings, tuna.tmpl.settings.SpotSettings);
tuna.tmpl.settings.CheckboxSettings.prototype.getType = function() {
  return tuna.tmpl.units.Checkbox.NAME
};
tuna.tmpl.settings.ListSettings = function(targetSelector, dataPath, keyPath, itemRendererID, itemSettings) {
  tuna.tmpl.settings.SpotSettings.call(this, targetSelector, dataPath);
  this.keyPath = keyPath;
  this.itemRendererID = itemRendererID;
  this.itemSettings = itemSettings
};
tuna.utils.extend(tuna.tmpl.settings.ListSettings, tuna.tmpl.settings.SpotSettings);
tuna.tmpl.settings.ListSettings.prototype.getType = function() {
  return tuna.tmpl.units.List.NAME
};
tuna.tmpl.settings.TemplateSettings = function() {
  this.__items = []
};
tuna.tmpl.settings.TemplateSettings.prototype.additems = function(items) {
  this.__items = this.__items.concat(items)
};
tuna.tmpl.settings.TemplateSettings.prototype.getItemsCount = function() {
  return this.__items.length
};
tuna.tmpl.settings.TemplateSettings.prototype.getItemAt = function(index) {
  return this.__items[index]
};
tuna.tmpl.settings.TemplateSettings.prototype.getType = function() {
  return tuna.tmpl.units.Template.NAME
};
tuna.tmpl.markup.IMarkupExtractor = function() {
};
tuna.tmpl.markup.IMarkupExtractor.prototype.extract = function(element) {
};
tuna.tmpl.markup.SpotExtractor = function() {
  this._tagName = "spot";
  this._ns = "tuna:"
};
tuna.tmpl.markup.SpotExtractor.prototype.extract = function(element) {
  var result = [];
  var tagName = tuna.IS_IE ? this._tagName : this._ns + this._tagName;
  var elements = element.getElementsByTagName(tagName);
  var i = 0, l = elements.length;
  var item = null;
  while(i < l) {
    item = this._createItem(elements[i]);
    if(item !== null) {
      result.push(item)
    }
    i++
  }
  return result
};
tuna.tmpl.markup.SpotExtractor.prototype._createItem = function(element) {
  var selector = element.getAttribute(this._ns + "target");
  var dataPath = element.getAttribute(this._ns + "path");
  if(selector !== null && dataPath !== null) {
    var spot = new tuna.tmpl.settings.SpotSettings(selector, dataPath);
    spot.pattern = element.getAttribute(this._ns + "pattern");
    return spot
  }
  return null
};
tuna.tmpl.markup.ListExtractor = function(templateBuilder) {
  tuna.tmpl.markup.SpotExtractor.call(this);
  this._tagName = "list";
  this.__templateBuilder = templateBuilder
};
tuna.utils.extend(tuna.tmpl.markup.ListExtractor, tuna.tmpl.markup.SpotExtractor);
tuna.tmpl.markup.ListExtractor.prototype._createItem = function(element) {
  var selector = element.getAttribute(this._ns + "target");
  var dataPath = element.getAttribute(this._ns + "path");
  var keyPath = element.getAttribute(this._ns + "key-path");
  var itemRendererID = element.getAttribute(this._ns + "item-renderer-id");
  var itemSettings = null;
  var templateID = element.getAttribute(this._ns + "item-template-id");
  if(templateID !== null) {
    itemSettings = this.__templateBuilder.buildSettings(templateID)
  }
  if(selector !== null && dataPath !== null && keyPath !== null && itemRendererID !== null && itemSettings !== null) {
    var list = new tuna.tmpl.settings.ListSettings(selector, dataPath, keyPath, itemRendererID, itemSettings);
    list.pattern = element.getAttribute(this._ns + "pattern");
    return list
  }
  return null
};
tuna.tmpl.markup.AttributeExtractor = function() {
  tuna.tmpl.markup.SpotExtractor.call(this);
  this._tagName = "attr"
};
tuna.utils.extend(tuna.tmpl.markup.AttributeExtractor, tuna.tmpl.markup.SpotExtractor);
tuna.tmpl.markup.AttributeExtractor.prototype._createItem = function(element) {
  var selector = element.getAttribute(this._ns + "target");
  var dataPath = element.getAttribute(this._ns + "path");
  var attributeName = element.getAttribute(this._ns + "name");
  if(selector !== null && dataPath !== null && attributeName !== null) {
    var attribute = new tuna.tmpl.settings.AttributeSettings(selector, dataPath, attributeName);
    attribute.pattern = element.getAttribute(this._ns + "pattern");
    attribute.hasEvent = !!element.getAttribute(this._ns + "event");
    return attribute
  }
  return null
};
tuna.tmpl.markup.ConditionExtractor = function() {
  tuna.tmpl.markup.SpotExtractor.call(this);
  this._tagName = "if";
  this.__operators = [];
  this.__actions = []
};
tuna.utils.extend(tuna.tmpl.markup.ConditionExtractor, tuna.tmpl.markup.SpotExtractor);
tuna.tmpl.markup.ConditionExtractor.prototype.addOperatorType = function(type) {
  this.__operators.push(type)
};
tuna.tmpl.markup.ConditionExtractor.prototype.addActionType = function(type) {
  this.__actions.push(type)
};
tuna.tmpl.markup.ConditionExtractor.prototype._createItem = function(element) {
  var selector = element.getAttribute(this._ns + "target");
  var dataPath = element.getAttribute(this._ns + "path");
  var actionAttribute = this.__extractActionAttribute(element);
  var operatorAttribute = this.__extractOperatorAttribute(element);
  if(selector !== null && dataPath !== null && actionAttribute !== null && operatorAttribute !== null) {
    var actionName = actionAttribute.name.substr(this._ns.length);
    var operatorName = operatorAttribute.name.substr(this._ns.length);
    var condition = new tuna.tmpl.settings.ConditionSettings(selector, dataPath, actionName, operatorName);
    condition.pattern = element.getAttribute(this._ns + "pattern");
    condition.actionData = actionAttribute.value;
    condition.operatorData = operatorAttribute.value;
    return condition
  }
  return null
};
tuna.tmpl.markup.ConditionExtractor.prototype.__extractActionAttribute = function(element) {
  var name = null;
  for(var key in this.__actions) {
    name = this._ns + this.__actions[key];
    if(element.attributes[name]) {
      return element.attributes[name]
    }
  }
  return null
};
tuna.tmpl.markup.ConditionExtractor.prototype.__extractOperatorAttribute = function(element) {
  var name = null;
  for(var key in this.__operators) {
    name = this._ns + this.__operators[key];
    if(element.attributes[name]) {
      return element.attributes[name]
    }
  }
  return null
};
tuna.tmpl.markup.CheckboxExtractor = function() {
  tuna.tmpl.markup.SpotExtractor.call(this);
  this._tagName = "checkbox"
};
tuna.utils.extend(tuna.tmpl.markup.CheckboxExtractor, tuna.tmpl.markup.SpotExtractor);
tuna.tmpl.markup.CheckboxExtractor.prototype._createItem = function(element) {
  var selector = element.getAttribute(this._ns + "target");
  var dataPath = element.getAttribute(this._ns + "path");
  if(selector !== null && dataPath !== null) {
    var checkbox = new tuna.tmpl.settings.CheckboxSettings(selector, dataPath);
    checkbox.pattern = element.getAttribute(this._ns + "pattern");
    return checkbox
  }
  return null
};
tuna.tmpl.markup.MarkupTemplateBuilder = function() {
  this.__templatesTable = {};
  this.__extractors = []
};
tuna.tmpl.markup.MarkupTemplateBuilder.prototype.addExtractor = function(extractor) {
  this.__extractors.push(extractor)
};
tuna.tmpl.markup.MarkupTemplateBuilder.prototype.buildSettings = function(templateID) {
  if(this.__templatesTable[templateID] === undefined) {
    var element = document.getElementById(templateID);
    if(element !== null) {
      var template = new tuna.tmpl.settings.TemplateSettings;
      var i = 0, l = this.__extractors.length;
      var items = null;
      while(i < l) {
        items = this.__extractors[i].extract(element);
        if(items !== null) {
          template.additems(items)
        }
        i++
      }
      this.__templatesTable[templateID] = template
    }
  }
  return this.__templatesTable[templateID] || null
};
tuna.tmpl.units.list.IListItemRouter = function() {
};
tuna.tmpl.units.list.IListItemRouter.prototype.append = function(element) {
};
tuna.tmpl.units.list.IListItemRouter.prototype.remove = function(element) {
};
tuna.tmpl.units.list.ListContainerRouter = function(container, rootTemplate) {
  this._container = container;
  this._rootTemplate = rootTemplate
};
tuna.tmpl.units.list.ListContainerRouter.prototype.append = function(node) {
  this._container.appendChild(node);
  this._rootTemplate.registerChildCreation(node)
};
tuna.tmpl.units.list.ListContainerRouter.prototype.remove = function(node) {
  this._container.removeChild(node);
  this._rootTemplate.registerChildRemoval(node)
};
tuna.tmpl.units.condition.ConditionAction = function(opt_data) {
  this._data = opt_data || ""
};
tuna.tmpl.units.condition.ConditionAction.prototype.apply = function(element, testResult, value) {
};
tuna.tmpl.units.condition.ConditionAction.prototype.clone = function(data) {
  return new this.constructor(data)
};
tuna.tmpl.units.condition.ClassAction = function(opt_data) {
  tuna.tmpl.units.condition.ConditionAction.call(this, opt_data)
};
tuna.utils.extend(tuna.tmpl.units.condition.ClassAction, tuna.tmpl.units.condition.ConditionAction);
tuna.tmpl.units.condition.ClassAction.NAME = "class";
tuna.tmpl.units.condition.ClassAction.prototype.apply = function(element, testResult, value) {
  tuna.dom.setClassExist(element, this._data, testResult)
};
tuna.tmpl.units.condition.ConditionOperator = function(opt_data) {
  this._data = opt_data || ""
};
tuna.tmpl.units.condition.ConditionOperator.prototype.test = function(value) {
};
tuna.tmpl.units.condition.ConditionOperator.prototype.clone = function(data) {
  return new this.constructor(data)
};
tuna.tmpl.units.condition.EqualsOperator = function(opt_data) {
  tuna.tmpl.units.condition.ConditionOperator.call(this, opt_data)
};
tuna.utils.extend(tuna.tmpl.units.condition.EqualsOperator, tuna.tmpl.units.condition.ConditionOperator);
tuna.tmpl.units.condition.EqualsOperator.NAME = "eq";
tuna.tmpl.units.condition.EqualsOperator.prototype.test = function(value) {
  return value === this._data || value + "" === this._data
};
tuna.tmpl.units.condition.IsSetOperator = function() {
  tuna.tmpl.units.condition.ConditionOperator.call(this)
};
tuna.utils.extend(tuna.tmpl.units.condition.IsSetOperator, tuna.tmpl.units.condition.ConditionOperator);
tuna.tmpl.units.condition.IsSetOperator.NAME = "isset";
tuna.tmpl.units.condition.IsSetOperator.prototype.test = function(value) {
  return value != null
};
tuna.tmpl.units.condition.NotEqualsOperator = function(opt_data) {
  tuna.tmpl.units.condition.ConditionOperator.call(this, opt_data)
};
tuna.utils.extend(tuna.tmpl.units.condition.NotEqualsOperator, tuna.tmpl.units.condition.ConditionOperator);
tuna.tmpl.units.condition.NotEqualsOperator.NAME = "ne";
tuna.tmpl.units.condition.NotEqualsOperator.prototype.test = function(value) {
  return!(value == this._data || value + "" == this._data)
};
tuna.tmpl.units.condition.NotSetOperator = function() {
  tuna.tmpl.units.condition.ConditionOperator.call(this)
};
tuna.utils.extend(tuna.tmpl.units.condition.NotSetOperator, tuna.tmpl.units.condition.ConditionOperator);
tuna.tmpl.units.condition.NotSetOperator.NAME = "notset";
tuna.tmpl.units.condition.NotSetOperator.prototype.test = function(value) {
  return value == null
};
tuna.tmpl.units.IUnit = function() {
};
tuna.tmpl.units.IUnit.prototype.applyData = function(dataNode) {
};
tuna.tmpl.units.IUnit.prototype.destroy = function() {
};
tuna.tmpl.units.Unit = function(root) {
  this._rootTemplate = root
};
tuna.tmpl.units.Unit.prototype.applyData = function(dataNode) {
};
tuna.tmpl.units.Unit.prototype.destroy = function() {
};
tuna.tmpl.units.Spot = function(root) {
  tuna.tmpl.units.Unit.call(this, root);
  this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator;
  this._nodes = [];
  this._pattern = null
};
tuna.utils.extend(tuna.tmpl.units.Spot, tuna.tmpl.units.Unit);
tuna.tmpl.units.Spot.NAME = "spot";
tuna.tmpl.units.Spot.prototype.setPattern = function(pattern) {
  this._pattern = pattern
};
tuna.tmpl.units.Spot.prototype.setPath = function(path) {
  this.__pathEvaluator.setPath(path)
};
tuna.tmpl.units.Spot.prototype.addTargets = function(elements) {
  this._nodes = this._nodes.concat(elements)
};
tuna.tmpl.units.Spot.prototype.applyData = function(dataNode) {
  var value = this.__pathEvaluator.evaluate(dataNode).getValue();
  if(this._pattern !== null && value !== null) {
    value = this._pattern.join(value)
  }
  this._applyValue(value)
};
tuna.tmpl.units.Spot.prototype._applyValue = function(value) {
  var html = "";
  if(value !== null) {
    html = value.toString()
  }
  var i = this._nodes.length - 1;
  while(i >= 0) {
    if(this._nodes[i].innerHTML !== html) {
      this._nodes[i].innerHTML = html
    }
    i--
  }
};
tuna.tmpl.units.Spot.prototype.destroy = function() {
  this._nodes.length = 0
};
tuna.tmpl.units.Attribute = function(root, attributeName) {
  tuna.tmpl.units.Spot.call(this, root);
  this.__attributeName = attributeName;
  this.__hasEvent = false;
  this.__dispatchAttribute = tuna.utils.bind(this.__dispatchAttribute, this)
};
tuna.utils.extend(tuna.tmpl.units.Attribute, tuna.tmpl.units.Spot);
tuna.tmpl.units.Attribute.NAME = "attribute";
tuna.tmpl.units.Attribute.prototype.setEvent = function(hasEvent) {
  this.__hasEvent = hasEvent
};
tuna.tmpl.units.Attribute.prototype._applyValue = function(value) {
  if(value !== null) {
    this.__setAttribute(value.toString())
  }else {
    this.__removeAttribute()
  }
  if(this.__hasEvent) {
    tuna.utils.nextTick(this.__dispatchAttribute)
  }
};
tuna.tmpl.units.Attribute.prototype.__setAttribute = function(value) {
  var name = this.__attributeName;
  var i = this._nodes.length - 1;
  while(i >= 0) {
    if(this._nodes[i][name] === undefined) {
      if(this._nodes[i].getAttribute(name) !== value) {
        this._nodes[i].setAttribute(name, value)
      }
    }else {
      if(this._nodes[i][name] !== value) {
        this._nodes[i][name] = value
      }
    }
    i--
  }
};
tuna.tmpl.units.Attribute.prototype.__removeAttribute = function() {
  var name = this.__attributeName;
  var i = this._nodes.length - 1;
  while(i >= 0) {
    if(this._nodes[i][name] === undefined) {
      if(this._nodes[i].getAttribute(name) !== null) {
        this._nodes[i].removeAttribute(name)
      }
    }else {
      if(this._nodes[i][name] !== "") {
        this._nodes[i][name] = ""
      }
    }
    i--
  }
};
tuna.tmpl.units.Attribute.prototype.__dispatchAttribute = function() {
  var i = this._nodes.length - 1;
  while(i >= 0) {
    tuna.dom.dispatchEvent(this._nodes[i], this.__attributeName);
    i--
  }
};
tuna.tmpl.units.Condition = function(root, action, operator) {
  tuna.tmpl.units.Spot.call(this, root);
  this.__action = action;
  this.__operator = operator
};
tuna.utils.extend(tuna.tmpl.units.Condition, tuna.tmpl.units.Spot);
tuna.tmpl.units.Condition.NAME = "condition";
tuna.tmpl.units.Condition.prototype._applyValue = function(value) {
  var testResult = this.__operator.test(value);
  var i = this._nodes.length - 1;
  while(i >= 0) {
    this.__action.apply(this._nodes[i], testResult, value);
    i--
  }
};
tuna.tmpl.units.Checkbox = function(root) {
  tuna.tmpl.units.Spot.call(this, root);
  this.__value = null;
  this.__applyChanges = tuna.utils.bind(this.__applyChanges, this)
};
tuna.utils.extend(tuna.tmpl.units.Checkbox, tuna.tmpl.units.Spot);
tuna.tmpl.units.Checkbox.NAME = "checkbox";
tuna.tmpl.units.Checkbox.prototype._applyValue = function(value) {
  this.__value = value;
  tuna.utils.nextTick(this.__applyChanges)
};
tuna.tmpl.units.Checkbox.prototype.__applyChanges = function() {
  var value = this.__value;
  if(value !== null) {
    var i = this._nodes.length - 1;
    if(value === true || value === false) {
      while(i >= 0) {
        this._nodes[i].checked = value;
        i--
      }
    }else {
      if(value instanceof Array) {
        while(i >= 0) {
          this._nodes[i].checked = tuna.utils.indexOf(this._nodes[i].value, value) !== -1;
          i--
        }
      }else {
        value = value + "";
        while(i >= 0) {
          this._nodes[i].checked = this._nodes[i].value === value;
          i--
        }
      }
    }
  }
  this.__value = null
};
tuna.tmpl.units.List = function(root) {
  tuna.tmpl.units.Unit.call(this, root);
  this.__templateCompiler = null;
  this.__itemRenderer = null;
  this.__itemSettings = null;
  this.__itemsTable = {};
  this.__pathEvaluator = new tuna.tmpl.data.PathEvaluator;
  this.__keyPathEvaluator = new tuna.tmpl.data.PathEvaluator;
  this.__listNodeRouter = null
};
tuna.utils.extend(tuna.tmpl.units.List, tuna.tmpl.units.Unit);
tuna.tmpl.units.List.NAME = "list";
tuna.tmpl.units.List.prototype.setListNodeRouter = function(router) {
  this.__listNodeRouter = router
};
tuna.tmpl.units.List.prototype.setPath = function(path) {
  this.__pathEvaluator.setPath(path)
};
tuna.tmpl.units.List.prototype.setKeyPath = function(path) {
  this.__keyPathEvaluator.setPath(path)
};
tuna.tmpl.units.List.prototype.setCompiler = function(compiler) {
  this.__templateCompiler = compiler
};
tuna.tmpl.units.List.prototype.setItemRenderer = function(element) {
  this.__itemRenderer = element
};
tuna.tmpl.units.List.prototype.setItemSettings = function(settings) {
  this.__itemSettings = settings
};
tuna.tmpl.units.List.prototype.applyData = function(dataNode) {
  var oldItemsTable = this.__itemsTable;
  this.__itemsTable = {};
  var sampleNode = this.__pathEvaluator.evaluate(dataNode);
  var sample = sampleNode.getValue();
  var itemTemplate = null;
  var itemNode = null;
  var key = null;
  for(var index in sample) {
    itemTemplate = null;
    itemNode = sampleNode.growChild(index);
    key = this.__keyPathEvaluator.evaluate(itemNode).getStringValue();
    if(key !== null) {
      if(oldItemsTable[key] === undefined) {
        itemTemplate = this.__makeItemTemplate()
      }else {
        itemTemplate = oldItemsTable[key];
        delete oldItemsTable[key]
      }
      if(itemTemplate !== null) {
        itemTemplate.applyData(itemNode);
        this.__itemsTable[key] = itemTemplate
      }
    }
  }
  this.__removeItems(oldItemsTable)
};
tuna.tmpl.units.List.prototype.destroy = function() {
  for(var key in this.__itemsTable) {
    this.__itemsTable[key].destroy()
  }
  this.__itemsTable = {}
};
tuna.tmpl.units.List.prototype.__removeItems = function(itemsTable) {
  var template = null;
  var templateTarget = null;
  for(var key in itemsTable) {
    template = itemsTable[key];
    templateTarget = template.getTarget();
    if(templateTarget !== null) {
      this.__listNodeRouter.remove(templateTarget)
    }
    template.destroy()
  }
};
tuna.tmpl.units.List.prototype.__makeItemTemplate = function() {
  var templateTarget = this.__itemRenderer.cloneNode(true);
  if(templateTarget !== null && this.__itemSettings !== null) {
    this.__listNodeRouter.append(templateTarget);
    return this.__templateCompiler.compile(this.__itemSettings, templateTarget, this._rootTemplate)
  }
  return null
};
tuna.tmpl.units.Template = function(opt_root) {
  tuna.tmpl.units.Unit.call(this, opt_root || this);
  this.__items = [];
  this.__createdChildren = [];
  this.__removedChildren = [];
  this.__target = null
};
tuna.utils.extend(tuna.tmpl.units.Template, tuna.tmpl.units.Unit);
tuna.tmpl.units.Template.NAME = "template";
tuna.tmpl.units.Template.prototype.getRootTemplate = function() {
  return this._rootTemplate
};
tuna.tmpl.units.Template.prototype.setTarget = function(element) {
  this.__target = element
};
tuna.tmpl.units.Template.prototype.getTarget = function() {
  return this.__target
};
tuna.tmpl.units.Template.prototype.addItems = function(items) {
  this.__items = this.__items.concat(items)
};
tuna.tmpl.units.Template.prototype.registerChildCreation = function(child) {
  this.__createdChildren = this.__createdChildren.concat(child)
};
tuna.tmpl.units.Template.prototype.fetchCreatedChildren = function() {
  return this.__createdChildren.splice(0, this.__createdChildren.length)
};
tuna.tmpl.units.Template.prototype.registerChildRemoval = function(child) {
  this.__removedChildren = this.__removedChildren.concat(child)
};
tuna.tmpl.units.Template.prototype.fetchRemovedChildren = function() {
  return this.__removedChildren.splice(0, this.__removedChildren.length)
};
tuna.tmpl.units.Template.prototype.applyData = function(dataNode) {
  var i = this.__items.length - 1;
  while(i >= 0) {
    this.__items[i].applyData(dataNode);
    i--
  }
};
tuna.tmpl.units.Template.prototype.destroy = function() {
  while(this.__items.length > 0) {
    this.__items.shift().destroy()
  }
  this.__target = null
};
tuna.tmpl.units.Template.prototype.processTransform = function(data) {
  this.applyData(new tuna.tmpl.data.DataNode(data))
};
tuna.tmpl.compilers.IItemCompiler = function() {
};
tuna.tmpl.compilers.IItemCompiler.prototype.compile = function(element, settings, root) {
};
tuna.tmpl.compilers.TemplateCompiler = function() {
  this.__itemCompilers = {}
};
tuna.tmpl.compilers.TemplateCompiler.prototype.registerCompiler = function(type, compiler) {
  this.__itemCompilers[type] = compiler
};
tuna.tmpl.compilers.TemplateCompiler.prototype.compile = function(settings, element, opt_root) {
  var template = new tuna.tmpl.units.Template(opt_root);
  template.setTarget(element);
  var i = 0, l = settings.getItemsCount();
  var root = opt_root || template;
  var items = null;
  var compiler = null;
  var itemSettings = null;
  while(i < l) {
    itemSettings = settings.getItemAt(i);
    compiler = this.__itemCompilers[itemSettings.getType()];
    if(compiler !== undefined) {
      items = compiler.compile(element, itemSettings, root);
      if(items !== null) {
        template.addItems(items)
      }
    }
    i++
  }
  return template
};
tuna.tmpl.compilers.SpotCompiler = function() {
};
tuna.tmpl.compilers.SpotCompiler.prototype.compile = function(element, settings, root) {
  if(settings instanceof tuna.tmpl.settings.SpotSettings) {
    var spot = new tuna.tmpl.units.Spot(root);
    this._setupSpot(element, spot, settings);
    return spot
  }
  return null
};
tuna.tmpl.compilers.SpotCompiler.prototype._setupSpot = function(element, spot, settings) {
  spot.setPath(settings.dataPath);
  if(settings.pattern !== null) {
    spot.setPattern(settings.pattern.split("$$"))
  }
  var selector = settings.targetSelector;
  if(tuna.dom.hasClass(element, selector)) {
    spot.addTargets(element)
  }else {
    spot.addTargets(tuna.dom.getElementsByClassName(selector, element))
  }
};
tuna.tmpl.compilers.AttributeCompiler = function() {
  tuna.tmpl.compilers.SpotCompiler.call(this)
};
tuna.utils.extend(tuna.tmpl.compilers.AttributeCompiler, tuna.tmpl.compilers.SpotCompiler);
tuna.tmpl.compilers.AttributeCompiler.prototype.compile = function(element, settings, root) {
  if(settings instanceof tuna.tmpl.settings.AttributeSettings) {
    var attribute = new tuna.tmpl.units.Attribute(root, settings.attributeName);
    this._setupSpot(element, attribute, settings);
    attribute.setEvent(settings.hasEvent);
    return attribute
  }
  return null
};
tuna.tmpl.compilers.ConditionCompiler = function() {
  tuna.tmpl.compilers.SpotCompiler.call(this);
  this.__actions = {};
  this.__operators = {}
};
tuna.utils.extend(tuna.tmpl.compilers.ConditionCompiler, tuna.tmpl.compilers.SpotCompiler);
tuna.tmpl.compilers.ConditionCompiler.prototype.registerAction = function(type, action) {
  this.__actions[type] = action
};
tuna.tmpl.compilers.ConditionCompiler.prototype.registerOperator = function(type, operator) {
  this.__operators[type] = operator
};
tuna.tmpl.compilers.ConditionCompiler.prototype.compile = function(element, settings, root) {
  if(settings instanceof tuna.tmpl.settings.ConditionSettings) {
    var actionPrototype = this.__actions[settings.actionType];
    var operatorPrototype = this.__operators[settings.operatorType];
    if(actionPrototype !== undefined && operatorPrototype !== undefined) {
      var action = actionPrototype.clone(settings.actionData);
      var operator = operatorPrototype.clone(settings.operatorData);
      var condition = new tuna.tmpl.units.Condition(root, action, operator);
      this._setupSpot(element, condition, settings);
      return condition
    }
  }
  return null
};
tuna.tmpl.compilers.CheckboxCompiler = function() {
  tuna.tmpl.compilers.SpotCompiler.call(this)
};
tuna.utils.extend(tuna.tmpl.compilers.CheckboxCompiler, tuna.tmpl.compilers.SpotCompiler);
tuna.tmpl.compilers.CheckboxCompiler.prototype.compile = function(element, settings, root) {
  if(settings instanceof tuna.tmpl.settings.CheckboxSettings) {
    var checkbox = new tuna.tmpl.units.Checkbox(root);
    this._setupSpot(element, checkbox, settings);
    return checkbox
  }
  return null
};
tuna.tmpl.compilers.ListCompiler = function(compiler) {
  this.__templateCompiler = compiler
};
tuna.tmpl.compilers.ListCompiler.prototype.compile = function(element, settings, root) {
  if(settings instanceof tuna.tmpl.settings.ListSettings) {
    var renderer = document.getElementById(settings.itemRendererID);
    if(renderer !== null) {
      renderer = renderer.cloneNode(true);
      renderer.removeAttribute("id");
      var selector = settings.targetSelector;
      if(tuna.dom.hasClass(element, selector)) {
        return this.__compileList(element, renderer, settings, root)
      }else {
        var lists = [];
        var elements = tuna.dom.getElementsByClassName(selector, element);
        var i = elements.length - 1;
        while(i >= 0) {
          if(tuna.dom.getParentMatches(elements[i], selector, element) === null) {
            lists.push(this.__compileList(elements[i], renderer, settings, root))
          }
          i--
        }
        return lists
      }
    }else {
      throw'Cannot find item renderer with id: "' + settings.itemRendererID + '"';
    }
  }
  return null
};
tuna.tmpl.compilers.ListCompiler.prototype.__compileList = function(element, itemRenderer, settings, root) {
  var list = new tuna.tmpl.units.List(root);
  list.setCompiler(this.__templateCompiler);
  list.setItemRenderer(itemRenderer);
  list.setItemSettings(settings.itemSettings);
  list.setKeyPath(settings.keyPath);
  list.setPath(settings.dataPath);
  list.setListNodeRouter(this.__createRouter(element, root, ""));
  return list
};
tuna.tmpl.compilers.ListCompiler.prototype.__createRouter = function(element, root, type) {
  return new tuna.tmpl.units.list.ListContainerRouter(element, root)
};

