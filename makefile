run: out/main
	@echo "[./out/main] -------------------->"
	@./out/main

clean: run clear

out/main:
	gcc index.c -o ./out/main

clear:
	rm -rf ./out/*