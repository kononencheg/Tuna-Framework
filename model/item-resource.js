


/**
 * Класс хранилища единственного экземпляра модели данных приложения.
 *
 * Данный клас может быть полезен для хранения объектов состояния приложения.
 * Например информацию о пользователе.
 *
 * @constructor
 * @implements {tuna.model.IResource}
 * @extends {tuna.events.EventDispatcher}
 */
tuna.model.ItemResource = function() {
    tuna.events.EventDispatcher.call(this);

    /**
     * Хранимый экземпляр модели данных.
     *
     * @type {tuna.model.Record}
     * @private
     */
    this._item = null;
};


tuna.utils.extend(tuna.model.ItemResource, tuna.events.EventDispatcher);


/**
 * Установка экземпляра модели данных.
 *
 * @param {tuna.model.Record} item Экземпляр модели данных.
 */
tuna.model.ItemResource.prototype.set = function(item) {
    if (this._item !== item) {
        this._item = item;

        this.dispatch('update', this._item);
    }
};


/**
 * Взятие экземпляра модели данных.
 *
 * @return {tuna.model.Record} Хранимый экземпляр модели данных.
 */
tuna.model.ItemResource.prototype.get = function() {
    return this._item;
};


/**
 * @inheritDoc
 */
tuna.model.ItemResource.prototype.clear = function() {
    this.set(null);
};

