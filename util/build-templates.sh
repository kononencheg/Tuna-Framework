cd Workspace/Tuna-Framework/js;

java -jar ../util/compiler.jar \
		--define COMPILED \
		--dev_mode EVERY_PASS \
		--formatting PRETTY_PRINT \
		--compilation_level ADVANCED_OPTIMIZATIONS \
\
		--js ns.js \
		--js tuna.js \
		--js tuna/debug/Logger.js \
		--js tuna/debug/IWriter.js
\
		--js ../sandbox/templates/main.js \
\
		--js_output_file ../sandbox/templates/main-compiled.js;
		
cat ../sandbox/templates/main-compiled.js;

