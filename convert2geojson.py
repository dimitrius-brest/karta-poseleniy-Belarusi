# -*- coding: utf-8 -*-

with open('input.txt', 'r', encoding="utf-8") as f:
    text = f.read()

import re

ssylka = "content:.*<a href=\"(.*)\">"

print(re.findall(ssylka, text))
