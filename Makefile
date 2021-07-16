all: sort_js

prettier:
	which prettier || brew install prettier

json: prettier
	python3 to_json.py
	prettier --write quotes.json

insert: json
	python3 insert_json.py
	prettier --write quotes.json
	python3 to_js.py
	prettier --write quotes.js

sort_json: json
	python3 sort_json.py

sort_js: sort_json
	python3 to_js.py
	prettier --write quotes.js

duplicates: sort_json
	python3 find_duplicates.py