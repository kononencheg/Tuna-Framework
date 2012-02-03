(function() {

    var TransformContainer = function() {
        tuna.ui.modules.Module.call
            (this, 'transform-container', '.j-transform-container');

        this._useContext = false;

        this.__templateBuilder
            = new tuna.tmpl.markup.MarkupTemplateBuilder(document);

        this.__templateCompiler 
            = new tuna.tmpl.compilers.TemplateCompiler(document);

        this.__templatesTable = {};
    };

    tuna.utils.extend(TransformContainer, tuna.ui.modules.Module);

    TransformContainer.prototype._findTargets = function(context) {
        return tuna.dom.select(this._selector, context);
    };

    TransformContainer.prototype.__getTemplate = function(id) {
        if (this.__templatesTable[id] === undefined) {
            this.__templatesTable[id]
                = this.__templateBuilder.buildTemplate(id);
        }

        return this.__templatesTable[id];
    };

    TransformContainer.prototype.initInstance = function(target, parent) {
        var self = this;

        var templateID  = target.getAttribute('data-template-id');
        var initEvent   = target.getAttribute('data-init-event');

        var container = new tuna.ui.container.TransformContainer(target, parent);

        var initContainer = function() {
            var template = self.__getTemplate(templateID);
            if (template !== null) {
                var transformer
                    = self.__templateCompiler.makeTransformer(template, target);

                container.setTransformer(transformer);
            }

            container.init();
        };

        if (initEvent !== null) {
            tuna.dom.addOneEventListener(target, initEvent, initContainer);
        } else {
            initContainer();
        }

        return container;
    };

    tuna.ui.modules.register(new TransformContainer());
    tuna.ui.modules.addIsolator('j-transform-container');
    
})();
