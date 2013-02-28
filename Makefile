

#
#	Variables
#

JS_BUILD_HOME ?= /usr/lib/js-build-tools

DESTDIR = 

JS_ROOT_DIR  = ./
JS_DEPS_DIRS =
JS_DEFAULT_ENV = browser

include $(JS_BUILD_HOME)/js-variables.mk


MODULE_NAME ?= tuna
INSTALL_PREFIX ?= /usr/lib/



#
#	Rules
#

all : js-externs js-export

check : js-test-compile js-test-lint

clean : js-clean


include $(JS_BUILD_HOME)/js-rules.mk