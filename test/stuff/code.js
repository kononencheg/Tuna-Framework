/////////////////////////////////////////////////////////////////////////////////////////
//	somefile.js
/////////////////////////////////////////////////////////////////////////////////////////

tuna.include("1"); //Этот вызов удаляется.
ffff;
tuna.include("2"); //Этот вызов удаляется тоже.
//tuna.include("3");
a+b;tuna.include("4");window; //И этот

/**
 * Комменрарий к функции, в котором есть вызов
 * tuna.include("5");
 */
function someFunction()
{
	if (tuna.IS_IE)
	{
		tuna.include("6");		//Этот сохраняется.
	}
	else tuna.include("7");	//Этот тоже.
}

var includeCall = "tuna.include('8');"; //И этот сохраняется.
'tuna.include("9");' //Этот тоже
[tuna.include("10")]; //И этот тоже.

//Это способы экранировать вызов загрузки на верхнем уровне.
{ tuna.include("11"); } //Этот тоже сохраняется.
( tuna.include("12") ); //И этот.

tuna.include("13"); //А этот удаляется.
tuna.include("14"); //И этот.

tuna.include(55555); //А этот нет

tuna.include("\1\5"); //И этот нет