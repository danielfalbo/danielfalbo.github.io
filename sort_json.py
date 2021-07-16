from json import loads, dumps
from tools import sorting_key

with open("quotes.json") as f:
    quotes = loads(f.read())
    quotes.sort(key=lambda obj: sorting_key(obj['quote']))

with open("quotes.json", "w") as f:
    f.write(dumps(quotes, indent=2, ensure_ascii=False))
