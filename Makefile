prettier:
	which prettier || brew install prettier

json: prettier
	python3 to_json.py && prettier --write quotes.json

insert: json
	python3 insert_json.py && prettier --write quotes.json
	python3 to_js.py && prettier --write quotes.js

duplicates: json
	python3 find_duplicates.py