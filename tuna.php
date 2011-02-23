<?php
/**
 * Tuna Framework
 *
 * Сценарий компоновки JavaScriрt файлов.
 *
 * @param c $_GET Набор полных имен классов компоновки.
 * @param r $_GET Адрес корневой директории JavaScriрt файлов. Если не задан то
 * корневая директория - текущая.
 *
 * @author Kononenko Sergey <kononenheg@gmail.com>
 */

/**
 * Чтение файла класса.
 *
 * @param $class_name String Полное имя загружаемого класса.
 * @param $root String Путь к корневой директории.
 * @return String Содержание файла.
 */
function loadScript($class_name, $root)
{
	$result = "alert('Не удалось загрузить класс " . htmlspecialchars($class_name) . "');";

	$path = $root . "/" . str_replace('.', '/', $class_name) . ".js";

	if (is_file($path))
		$result = file_get_contents($path);

	return $result;
}

/**
 * Рекурсивный вывод файла и файлов, от которых он зависит.
 *
 * @param $class_name String Полное имя класса.
 * @param &$exist String Ссылка на набор уже загруженных классов.
 */
function writeClass($class_name, $root, &$exist)
{
	$script = loadScript($class_name, $root);

	$matches = array();
	//TODO: Поправить поиск!
	preg_match_all("/tuna\s*\.\s*include\s*\(\s*((\'[\w\.]+\')|(\"[\w\.]+\"))\s*\)\s*\;/", $script, $matches);
	$script = preg_replace("/tuna\s*\.\s*include\s*\(\s*((\'[\w\.]+\')|(\"[\w\.]+\"))\s*\)\s*\;/", '', $script);

	foreach ($matches[1] as $name)
	{
		$name = substr($name, 1, -1);

		if (!isset($exist[$name]))
			writeClass($name, $root, $exist);
	}

	echo $script.'

';

	$exist[$class_name] = true;
}


//Сохраняем данные запроса.
$root = $_GET['r'];
$classes = $_GET['c'];

//Массив уже загруженных классов
$exist = array();

//Пробегаем по всем именам классов.
foreach ($classes as $class_name)
	writeClass($class_name, $root, $exist);
?>