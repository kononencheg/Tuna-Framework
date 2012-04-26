<?php

require('Twig/Autoloader.php');
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('tmpl');
$twig = new Twig_Environment($loader);

$template = $twig->loadTemplate('pages/' . $argv[1] . '.twig');

echo $template->render(array());