from bisect import insort
from json import loads, dumps
from tools import sorting_key


class Quote:
    def __init__(self, d):
        self.quote = d['quote']
        self.author = d['author']

    def __lt__(self, other):
        return sorting_key(self.quote) < sorting_key(other.quote)

    def __dict__(self):
        return {'quote': self.quote, 'author': self.author}


quote = Quote({'quote': input("'quote': "), 'author': input("'author': ")})


with open("quotes.json") as f:
    quotes = loads(f.read(), object_hook=Quote)
    insort(quotes, quote)


with open("quotes.json", "w") as f:
    f.write(dumps(quotes, ensure_ascii=False, indent=2,
                  default=lambda quote: quote.__dict__()))
