# -*- coding: utf-8 -*-

with open('input.txt', 'r', encoding="utf-8") as f:
    text = f.read()

import re

ssylka = "content:.*<a href=\"(.*)\">"  # вычленяет ссылку
koord = "position:.*\((.*),(.*)\)"      # вычленяет координаты
nazv = "title:.*\"(.*)\""               # вычленяет название
tippos = "icon:.*\/marker_(.*)\.png"    # вычленяет тип поселения

print(re.findall(ssylka, text))
print(re.findall(koord, text))
print(re.findall(nazv, text))
print(re.findall(tippos, text))
