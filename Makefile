



#
#   Variables
#

BUILD_DIR ?= $(CURDIR)/bin
DEPS_DIR = $(CURDIR)/deps

UTIL_OUT = $(BUILD_DIR)/util.js
EVENTS_OUT = $(BUILD_DIR)/events.js
NET_OUT = $(BUILD_DIR)/net.js

UTIL_DIR = $(DEPS_DIR)/util/
EVENTS_DIR = $(DEPS_DIR)/events/
NET_DIR = $(DEPS_DIR)/net/


UTIL_MAKE_CMD = $(MAKE) -C $(UTIL_DIR) \
                    JS_DEFAULT_OUT=$(UTIL_OUT)

EVENTS_MAKE_CMD = $(MAKE) -C $(EVENTS_DIR) \
                      JS_DEFAULT_OUT=$(EVENTS_OUT) \
                      JS_DEPS_DIRS="$(UTIL_DIR)"

NET_MAKE_CMD = $(MAKE) -C $(NET_DIR) \
                   JS_DEFAULT_OUT=$(NET_OUT) \
                   JS_DEPS_DIRS="$(UTIL_DIR) $(EVENTS_DIR)"



#
#   Rules
#

all : test util events net


test : util-test events-test net-test


net-test :
	$(NET_MAKE_CMD) clean && $(NET_MAKE_CMD) test


net :
	$(NET_MAKE_CMD)


events-test :
	$(EVENTS_MAKE_CMD) clean && $(EVENTS_MAKE_CMD) test


events :
	$(EVENTS_MAKE_CMD)


util-test :
	$(UTIL_MAKE_CMD) clean && $(UTIL_MAKE_CMD) test


util :
	$(UTIL_MAKE_CMD)