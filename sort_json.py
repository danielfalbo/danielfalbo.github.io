from json import loads, dumps

with open("quotes.json") as f:
    quotes = loads(f.read())
    quotes.sort(key=lambda obj: obj['quote'])

with open("quotes.json", "w") as f:
    f.write(dumps(quotes, indent=2, ensure_ascii=False))
