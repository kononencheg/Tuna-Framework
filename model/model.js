

/**
 * Обобщенная сериализация экземпряров модели данных.
 *
 * В качестве объекда для сериализации может выступать экземпляр данных или
 * массив экземпляров.
 *
 * @see tuna.model.Record#serialize
 * @param {?(tuna.model.Record|Array.<tuna.model.Record>)} records Экземпляр или
 *        экземпляры данных для сериализации.
 * @param {!Object=} opt_options Аргументы преобразования.
 * @return {!*} Результат преобразования.
 */
tuna.model.serialize = function(records, opt_options) {
    if (records instanceof Array) {
        var result = [];

        var i = 0,
            l = records.length;

        while (i < l) {
            result.push(records[i].serialize(opt_options));
            i++;
        }

        return result;
    } else if (records instanceof tuna.model.Record) {
        return records.serialize(opt_options);
    }

    return null;
};


/**
 * Основная фабрика экземпляров модели данных приложения.
 *
 * @see tuna.model.RecordFactory
 * @type {!tuna.model.RecordFactory}
 */
tuna.model.recordFactory = new tuna.model.RecordFactory();
