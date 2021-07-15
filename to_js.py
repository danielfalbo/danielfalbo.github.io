with open("quotes.json") as json_file:
    with open("quotes.js", "w") as js_file:
        js_file.write("const quotes = " + json_file.read())
