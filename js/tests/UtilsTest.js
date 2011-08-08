/////////////////////////////////////////////////////////////////////////////////////////
//	
//	TUNA FRAMEWORK TESTS
//	
//	Файл UtilsTest.js
//	
//	Реализация класса tests.UtilsTest.
//
//	Author Kononenko Sergey <kononenheg@gmail.com>
//	
/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
//	Импорт зависимостей.
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("tuna.test.TestCase");

/////////////////////////////////////////////////////////////////////////////////////////
//	Область имен.
/////////////////////////////////////////////////////////////////////////////////////////

var pkg = tuna.namespace("tests");

/////////////////////////////////////////////////////////////////////////////////////////
//
//	Класс tests.UtilsTest
//
/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Класс проверки работы глобальных функция пакета tuna.
 *
 * @class
 * @extend tuna.test.TestCase
 *
 * @constructor
 */
pkg.UtilsTest = function()
{
	//Родительский конструктор.
	tests.UtilsTest._super.constructor.call(this, "GLOBAL UTILS TEST");
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Наследование tuna.test.TestCase
/////////////////////////////////////////////////////////////////////////////////////////

tuna.extend(pkg.UtilsTest, tuna.test.TestCase);

/**
 * Реализация подготовки к тестированию.
 *
 * @override @protected
 */
pkg.UtilsTest.prototype._setupImpl = function()
{
	this._saveMessage("Создание специальных типов");

	this.Interface = function() {};
	this.Interface.prototype.method1 = function() {};
	this.Interface.prototype.method2 = function() {};
	this.Interface.prototype.method3 = function() {};

	this.Type = function() {};
	this.Type.prototype.method = function() {};

	this.CustomType = function() {};
	this.CustomType.prototype.method = function() {};
	this.CustomType.prototype.anotherMethod = function() {};

	this.OneMoreCustomType = function() {};
	this.OneMoreCustomType.prototype.method = function() {};
	this.OneMoreCustomType.prototype.oneMoreMethod = function() {};

	this._setupComplete();
};

/**
 * Реализация проверки тестового условия.
 *
 * @override @protected
 */
pkg.UtilsTest.prototype._runImpl = function()
{
	this.__test_isInstanceOf();
	this.__test_checkArgs();
	this.__test_implement();
	this.__test_namespace();
	this.__test_load();
	this.__test_clearIncludes();

	this._runComplete();
};

/**
 * Проверка функции tuna.isInstanceOf(object:Object, typeName:Sring):Boolean.
 *
 * Необходимо проверить корректрность проверки на соответствие типу.
 *
 * @private
 */
pkg.UtilsTest.prototype.__test_isInstanceOf = function()
{
	this._saveMessage("Проверка работы tuna.isInstanceOf(object:Object, typeName:Sring):Boolean");

	//Проверяем на соответсвие элементарных типов.
	this.assertTrue(tuna.isInstanceOf(0, "Number"));
	this.assertTrue(tuna.isInstanceOf(Infinity, "Number"), "Бескоенчность - число.");
	this.assertTrue(tuna.isInstanceOf(123.2, "Number"));
	this.assertTrue(tuna.isInstanceOf(-23.25555, "Number"));
	this.assertTrue(tuna.isInstanceOf(85.699e+9, "Number"));
	this.assertTrue(tuna.isInstanceOf(Math.random(), "Number"));
	this.assertTrue(tuna.isInstanceOf(Number("-904.5"), "Number"));

	this.assertTrue(tuna.isInstanceOf("", "String"));
	this.assertTrue(tuna.isInstanceOf("Math.random()", "String"));
	this.assertTrue(tuna.isInstanceOf("2356", "String"));
	this.assertTrue(tuna.isInstanceOf(Math.random().toString() + 10, "String"));
	this.assertTrue(tuna.isInstanceOf(String(258), "String"));
	this.assertTrue(tuna.isInstanceOf(10 + "" + 50, "String"));

	this.assertTrue(tuna.isInstanceOf(true, "Boolean"));
	this.assertTrue(tuna.isInstanceOf(false, "Boolean"));
	this.assertTrue(tuna.isInstanceOf(!null, "Boolean"));
	this.assertTrue(tuna.isInstanceOf(!0, "Boolean"));

	this.assertTrue(tuna.isInstanceOf(function(){}, "Function"));
	this.assertTrue(tuna.isInstanceOf(this.assertTrue, "Function"));
	this.assertTrue(tuna.isInstanceOf(tuna.isInstanceOf, "Function"));

	this.assertTrue(tuna.isInstanceOf(function(){}, "Object"));
	this.assertTrue(tuna.isInstanceOf(this, "Object"));
	this.assertTrue(tuna.isInstanceOf(null, "Object"));
	this.assertTrue(tuna.isInstanceOf(false, "Object"));
	this.assertTrue(tuna.isInstanceOf(Math.random().toString() + 10, "Object"));
	this.assertTrue(tuna.isInstanceOf(85.699e+9, "Object"));
	this.assertTrue(tuna.isInstanceOf(tuna, "Object"));

	this.assertTrue(tuna.isInstanceOf([], "Array"));
	this.assertTrue(tuna.isInstanceOf(new Array(), "Array"));
	this.assertTrue(tuna.isInstanceOf("Array".split(''), "Array"));

	//Проверяем на соответствие пользовательским типам.
	this.assertTrue(tuna.isInstanceOf(this, "tuna.test.Assert"));
	this.assertTrue(tuna.isInstanceOf(this, "tuna.test.TestCase"));
	this.assertTrue(tuna.isInstanceOf(this, "tuna.test.ITest"));

	this.assertTrue(tuna.isInstanceOf(new this.Type(), "Type", this));
	this.assertTrue(tuna.isInstanceOf(new this.CustomType(), "Type", this));
	this.assertTrue(tuna.isInstanceOf(new this.OneMoreCustomType(), "Type", this));
	this.assertTrue(tuna.isInstanceOf(new this.CustomType(), "CustomType", this));
	this.assertTrue(tuna.isInstanceOf(new this.OneMoreCustomType(), "OneMoreCustomType", this));

	this.assertFalse(tuna.isInstanceOf("0", "Number"));
	this.assertFalse(tuna.isInstanceOf([152], "Number"));
	this.assertFalse(tuna.isInstanceOf(NaN, "Number"), "NaN не число");
	this.assertFalse(tuna.isInstanceOf(this, "Number"));

	this.assertFalse(tuna.isInstanceOf(0, "String"));
	this.assertFalse(tuna.isInstanceOf(['152'], "String"));
	this.assertFalse(tuna.isInstanceOf(NaN, "String"), "NaN не строка");
	this.assertFalse(tuna.isInstanceOf(this, "String"));

	this.assertFalse(tuna.isInstanceOf(null, "Boolean"));
	this.assertFalse(tuna.isInstanceOf(0, "Boolean"));
	this.assertFalse(tuna.isInstanceOf(1, "Boolean"));
	this.assertFalse(tuna.isInstanceOf("", "Boolean"));
	this.assertFalse(tuna.isInstanceOf([], "Boolean"));

	this.assertFalse(tuna.isInstanceOf(arguments, "Array"));
	this.assertFalse(tuna.isInstanceOf("1,'g','gh'", "Array"));
	this.assertFalse(tuna.isInstanceOf(10.21, "Array"));

	this.assertFalse(tuna.isInstanceOf([], "Function"));
	this.assertFalse(tuna.isInstanceOf(tuna, "Function"));
	this.assertFalse(tuna.isInstanceOf(0, "Function"));

    this.assertTrue(true, "True всегда true");

	this.assertFalse(tuna.isInstanceOf(this.und, "Object"));

	this.assertFalse(tuna.isInstanceOf(this, "tuna.test.TestResult"));
	this.assertFalse(tuna.isInstanceOf(this, "tuna.test.TestSuite"));
	this.assertFalse(tuna.isInstanceOf(this, "tuna.test.ITestHandler"));

	//Проверяем на возникновение ошибок
	this.assertError(tuna.isInstanceOf, tuna, "ArgumentError", "", null, null);
	this.assertError(tuna.isInstanceOf, tuna, "ArgumentError", "", null, []);
	this.assertError(tuna.isInstanceOf, tuna, "ArgumentError", "", 10, 897689);
	this.assertError(tuna.isInstanceOf, tuna, "ArgumentError", "", 55, Number);
	this.assertError(tuna.isInstanceOf, tuna, "TypeError", "", 55, "dfgdgfdg");
};

/**
 * Проверка функции tuna.checkArgs
 * (args:Array.<Object>, types:Array.<String>, requireFlags:Array.<Boolean>):void
 * 
 * Необходиом проверить корректность случаев гененрирования ошибки.
 * 
 * @private
 */
pkg.UtilsTest.prototype.__test_checkArgs = function()
{
	this._saveMessage("Проверка работы tuna.checkArgs(args:Array.<Object>, types:Array.<String>, requireFlags:Array.<Boolean>):void");

	tuna.checkArgs([1, 2, ":"], ["Number", "Number", "String"]);
	tuna.checkArgs([1, null, ":"], ["Number", "Number", "String"], [true, false, true]);
	tuna.checkArgs([], ["Number", "tuna.test.ITest", "String"], [false, false, false]);
	tuna.checkArgs([null, this, null], ["Number", "tuna.test.ITest", "String"], [false, true, false]);
	tuna.checkArgs([null, this, null], ["ffffff", "tuna.test.ITest", "String"], [false, true, false]);
	tuna.checkArgs([true, this, null], ["Boolean", "tuna.test.ITest", "String"], [false, true, false]);
	tuna.checkArgs([new TestSuite(), this, "null", ":"], ["tuna.test.ITestHandler", "tuna.test.ITest", "String"]);
	tuna.checkArgs([null, this, "null", ":"], [, "tuna.test.ITest", "String"]);

	this.assertError(tuna.checkArgs, tuna, "ArgumentError", "", [1, 2, ":"], ["Number", "Number", "Number"]);
	this.assertError(tuna.checkArgs, tuna, "ArgumentError", "", [1, null, ":"], ["Number", "Number", "String"], [true, true, true]);
	this.assertError(tuna.checkArgs, tuna, "ArgumentError", "", [], ["Number", "Number", "String"]);
	this.assertError(tuna.checkArgs, tuna, "ArgumentError", "", [null, this, null], ["ffffff", "tuna.test.ITestHandler", "String"], [false, true, false]);
	this.assertError(tuna.checkArgs, tuna, "TypeError", "", [true, this, null], ["ffffff", "tuna.test.ITestHandler", "String"], [false, true, false]);
	this.assertError(tuna.checkArgs, tuna, "ArgumentError", "", [new TestSuite(), this, null, ":"], ["tuna.test.ITestHandler", "tuna.test.ITest", "ktring"]);
	this.assertError(tuna.checkArgs, tuna, "TypeError", "", [new TestSuite(), this, 15824556, ":"], ["tuna.test.ITestHandler", "tuna.test.ITest", "ktring"]);
};

/**
 * Проверка функций tuna.implement(Class:Object, Interface:Object):void и
 * tuna.extend(Class:Object, Parent:Object):void
 *
 * Необходиом проверить совпадение типов
 *
 * @private
 */
pkg.UtilsTest.prototype.__test_implement = function()
{
	this._saveMessage("Проверка работы tuna.implement(Class:Object, Interface:Object):void и tuna.extend(Class:Object, Parent:Object):void");

	var NewType = function() {};
	tuna.extend(NewType, this.Type);
	tuna.implement(NewType, this.Interface);

	var OtherType = function() {};
	tuna.extend(OtherType, this.Type);

	var OneMoreType = function() {};
	tuna.implement(OneMoreType, this.Interface);

	this.assertTrue(tuna.isInstanceOf(new NewType(), "Interface", this));
	this.assertTrue(tuna.isInstanceOf(new NewType(), "Type", this));

	this.assertTrue(tuna.isInstanceOf(new OtherType(), "Type", this));
	this.assertFalse(tuna.isInstanceOf(new OtherType(), "Interface", this));

	this.assertTrue(tuna.isInstanceOf(new OneMoreType(), "Interface", this));
	this.assertFalse(tuna.isInstanceOf(new OneMoreType(), "Type", this));
};

/**
 * Проверка функций tuna.namespace(path:String):Object
 *
 * Необходимо проверить наличие пакета после создания.
 *
 * @private
 */
pkg.UtilsTest.prototype.__test_namespace = function()
{
	this._saveMessage("Проверка работы tuna.namespace(path:String):Object");

	var pack = tuna.namespace("gg.kk.pp");

	this.assertNotNull(pack);
	this.assertEquals(pack, gg.kk.pp);

	pack = tuna.namespace("fgjghjghj%5767884%#;*?#().547;%%:");

	this.assertNotNull(pack);
	//Жаваскрипт это мясо...
	this.assertEquals(pack, window['fgjghjghj%5767884%#;*?#()']["547;%%:"]);
};


/**
 * Проверка функций tuna.__load(url:String):String
 *
 * Необходимо проверить исполененность загруженного кода,
 *
 * @private
 */
pkg.UtilsTest.prototype.__test_load = function()
{
	this._saveMessage("Проверка работы tuna.__load(url:String):String");

	this.assertEquals(tuna.__load("stuff/data_1"), "\"Тестовое сообщение\";", 0);
	this.assertEquals(tuna.__load("stuff/data_2"), "/////////////////////////////////////////////////////////////////////////////////////////", 1);
	
	//this.assertEquals(tuna.__load("stuff/data_3.php"), "", 2);
	
	this.assertError(tuna.__load, tuna, "LoadError", 3, "stuff/data_0");

	//ИЕ всегда ловит
	/*
		if (!tuna.IS_IE)
			this.assertError(tuna.__load, tuna, "SyntaxError", 10, "stuff/incorrect.js");
	 */
};

/**
 * Проверка функций tuna.__getIncludes(url:String):Array.<String>
 *
 * Необходимо проверить извлечение и корректность массива загрузки.
 *
 * @private
 */
pkg.UtilsTest.prototype.__test_clearIncludes = function()
{
	this._saveMessage("Проверка работы tuna.__clearIncludes(code:String):Object");

	var code = "/////////////////////////////////////////////////////////////////////\n\
				//	somefile.js\n\
				/////////////////////////////////////////////////////////////////////\n\
				\n\
				tuna.include(\"1\"); //Этот вызов удаляется.\n\
				ffff;\n\
				tuna.include(\'2\'); //Этот вызов удаляется тоже.\n\
				//tuna.include(\"3\");\n\
				a+b;tuna.include(\"4\");window; //И этот\n\
				\n\
				/**\n\
				 * Комменрарий к функции, в котором есть вызов\n\
				 * tuna.include(\"5\");\n\
				 */\n\
				function someFunction()\n\
				{\n\
					\"}\";\n\
					'}';\n\
					if (tuna.IS_IE)\n\
					{\n\
						tuna.include(\"6\");		//Этот сохраняется.\n\
					}\n\
					else tuna.include(\"7\");	//Этот тоже.\n\
				};\n\
				\n\
				var includeCall = \"tuna.\include(\'8\');\" //И этот сохраняется.\n\
				'tuna.include(\"9\");' //Этот тоже\n\
				[\n\
					\" \\\" ] <-- это невидимая скобка\", \n\
					tuna.include(\"10\")\n\
				]; //И этот тоже.\n\
				'\\\' <-- а это невидимая кавычка tuna.include(\"16\") ';\n\
				\n\
				//Это способы экранировать вызов загрузки на верхнем уровне.\n\
				{ tuna.include(\"11\"); } //Этот тоже сохраняется.\n\
				( tuna.include(\"12\") ); //И этот.\n\
				\n\
				tuna.\include('13'); //А этот удаляется.\n\
				tuna.include(\"14\") //И этот.\n\
				\n\
				tuna.include(55555) //А этот нет\n\
				\n\
				tuna.include(\"\1\5\") //И этот нет;";

	var result = tuna.__clearIncludes(code);
	this.assertEqualsHash(result.includes, ['1', '2', '4', '13', '14'], 5);

	result = tuna.__clearIncludes("tuna.include\('l.l');");
	this.assertEquals(result.script, "", 6);

	result = tuna.__clearIncludes("{tuna.include\('l.l'); }");
	this.assertEquals(result.script, "{tuna.include\('l.l'); }", 7);

	result = tuna.__clearIncludes(" tuna\.include('l.l'); [tuna.include\('l.l') ]; ggg");
	this.assertEquals(result.script, "  [tuna.include\('l.l') ]; ggg", 8);

	result = tuna.__clearIncludes(" //tuna\.include('l.l'); [tuna.include\('l.l') ]; ggg");
	this.assertEquals(result.script, " //tuna\.include('l.l'); [tuna.include\('l.l') ]; ggg", 9);

	result = tuna.__clearIncludes(" tuna\.include('l.l');	");
	this.assertEquals(result.script, " 	", 10);

	result = tuna.__clearIncludes(" \"tuna\.include('l.l');\"	");
	this.assertEquals(result.script, " \"tuna\.include('l.l');\"	", 10);

	result = tuna.__clearIncludes(" \'tuna\.include(\"l.l\");\'	");
	this.assertEquals(result.script, " \'tuna\.include(\"l.l\");\'	", 10);
};

/**
 * Реализация завершения проверки.
 *
 * @override @protected
 */
pkg.UtilsTest.prototype._destroyImpl = function()
{
	this._destroyComplete();
};

/////////////////////////////////////////////////////////////////////////////////////////
//	Сокращения
/////////////////////////////////////////////////////////////////////////////////////////

tuna.typedef(pkg.UtilsTest, "UtilsTest");
