
index:
	  php -f utils/twig.php -- $@ > $@.html

common:
	  php -f utils/twig.php -- $@ > $@.html

templates:
	  php -f utils/twig.php -- $@ > $@.html
