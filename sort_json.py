from json import loads, dumps

with open("quotes.json") as f:
    quotes = loads(f.read())
    quotes.sort(key=lambda obj: ''.join(c.lower()
                for c in obj['quote'] if c.isalpha()))

with open("quotes.json", "w") as f:
    f.write(dumps(quotes, indent=2, ensure_ascii=False))
