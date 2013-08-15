


/**
 * @param {!Node} node Корневой контейнер.
 * @param {!*} sizzle Сиззл.
 */
window['main'] = function(node, sizzle) {
  util.dom.setSelectorEngine(sizzle);

  var root = ui.init(node, new tuna.ui.WidgetFactory());
  root.registerWidgetType(ui.Container.NAME);
  root.registerWidgetType(ui.buttons.Button.NAME);
  root.init();

  var body = root.getWidget(ui.Container.NAME, 'body');
  if (body instanceof ui.Container) {
    var head = root.getWidget(ui.Container.NAME, 'head');
    if (head instanceof ui.Container) {
      var button = body.getWidget(ui.buttons.Button.NAME, 'hello-button');
      if (button instanceof ui.buttons.Button) {
        swap(root, body, head, button);
      } else {
        console.warn('Unable to find button "hello-button". [main]');
      }
    } else {
      console.warn('Unable to find container "head". [main]');
    }
  } else {
    console.warn('Unable to find container "body". [main]');
  }
};


/**
 * @param {!ui.Container} root Контейнер.
 * @param {!ui.Container} body Контейнер.
 * @param {!ui.Container} head Контейнер.
 * @param {!ui.buttons.Button} button Кнопка.
 */
function swap(root, body, head, button) {
  button.addEventListener(ui.buttons.ButtonEvent.CLICK, function(event) {
    console.info('My parent is "' +
        ui.getParentContainer(button.getTarget()).getName() + '" container!');
  });

  if (body !== ui.getParentContainer(button.getTarget())) {
    console.error('Button parent is not a body container.');
  }

  root.getTarget().appendChild(button.getTarget());
  root.handleBroken();

  if (root !== ui.getParentContainer(button.getTarget())) {
    console.error('Button parent is not a root container.');
  } else if (button !== root.getWidget(ui.buttons.Button.NAME, 'hello-button')) {
    console.error('Button is lost.');
  }

  head.getTarget().appendChild(button.getTarget());
  root.handleBroken();

  if (head !== ui.getParentContainer(button.getTarget())) {
    console.error('Button parent is not a head container.');
  } else if (button !== head.getWidget(ui.buttons.Button.NAME, 'hello-button')) {
    console.error('Button is lost.');
  }

}