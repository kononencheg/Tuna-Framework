
all: index common templates mvc

index:
	  php -f utils/twig.php -- $@ > $@.html

common:
	  php -f utils/twig.php -- $@ > $@.html

templates:
	  php -f utils/twig.php -- $@ > $@.html

mvc:
	  php -f utils/twig.php -- $@ > $@.html
