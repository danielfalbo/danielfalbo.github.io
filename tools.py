def sorting_key(quote):
    return ''.join(c.lower() for c in quote if c.isalpha())
