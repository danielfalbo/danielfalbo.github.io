from difflib import SequenceMatcher
from json import loads

TRESHOLD = 0.6

with open('quotes.json') as f:
    quotes = loads(f.read())
    for i in range(1, len(quotes)):
        prev = quotes[i - 1]['quote']
        curr = quotes[i]['quote']
        match = SequenceMatcher(a=prev, b=curr)
        if match.ratio() > TRESHOLD:
            print(prev)
