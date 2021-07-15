with open("quotes.js") as js_file:
    with open("quotes.json", "w") as json_file:
        json_file.write(js_file.read()[15:-2])
