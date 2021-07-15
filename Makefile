all: sort_js clean

prettier:
	which prettier || brew install prettier

json: prettier
	python3 to_json.py
	prettier --write quotes.json

sort_json: json
	python3 sort_json.py

sort_js: sort_json
	python3 to_js.py
	prettier --write quotes.js

duplicates: sort_json
	python3 find_duplicates.py

clean:
	(test -f quotes.json && rm quotes.json) || true
