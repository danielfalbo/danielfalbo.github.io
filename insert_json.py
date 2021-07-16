from bisect import insort
from json import loads, dumps


def lower_alpha(string):
    return ''.join(c.lower() for c in string if c.isalpha())


class Quote:
    def __init__(self, d):
        self.quote = d['quote']
        self.author = d['author']

    def __lt__(self, other):
        return lower_alpha(self.quote) < lower_alpha(other.quote)

    def __dict__(self):
        return {'quote': self.quote, 'author': self.author}


quote = Quote({'quote': input("'quote': "), 'author': input("'author': ")})


with open("quotes.json") as f:
    quotes = loads(f.read(), object_hook=Quote)
    insort(quotes, quote)


with open("quotes.json", "w") as f:
    f.write(dumps(quotes, ensure_ascii=False, indent=2,
                  default=lambda quote: quote.__dict__()))
