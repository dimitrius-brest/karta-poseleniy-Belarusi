# -*- coding: utf-8 -*-
with open('input.txt', 'r', encoding="utf-8") as f:
    text = f.read()

import re

ssylka = "content:.*<a href=\"(.*)\">"   # вычленяет ссылку
koord = "position:.*\((.*),\s*(.*)\)"    # вычленяет координаты
nazv = "title:.*\"(.*)\""                # вычленяет название
tippos = "icon:.*\/marker_(.*)\.png"     # вычленяет тип поселения

vse_ssylki = re.findall(ssylka, text)
vse_koord = re.findall(koord, text)
vse_nazv = re.findall(nazv, text)
vse_tipy = re.findall(tippos, text)

# словарь типов поселений
tipy = {'1': 'развитое поселение (проживает больше 10 человек)',
        '2': 'в поселении зимуют (есть проживающие постоянно жители)',
        '3': 'поселение строится (идет строительство домов)',
        '4': 'поселение оформляется (идет оформление земли)',
        '5': 'инициативная группа (в поиске земли)'}


# печатаем шапку
textout = ('{\n'+
           '  "type": "FeatureCollection",\n'+
           '  "features": [\n'
           )

# печатаем в цикле блоки для каждого поселения
for i in range(len(vse_nazv)):    
    textout = (textout +
               '    {\n' +
               '      "type": "Feature",\n' +
               '      "properties": {\n' +
               '        "название": "' + vse_nazv[i] + '",\n' +
               '        "подробнее": "http://ecoby.info' + vse_ssylki[i] + '",\n' +               
               '        "тип": "' + tipy[(vse_tipy)[i]] + '",\n' +
               '        "код типа": "' + vse_tipy[i] + '"\n' +
               '      },\n'
               '      "geometry": {\n' +
               '        "type": "Point",\n' +
               '        "coordinates": [\n' +
               '          ' + vse_koord[i][1] + ',\n' +
               '          ' + vse_koord[i][0] + '\n' +               
               '        ]\n' +
               '      }\n' +
               '    }'
               )

    if i < (len(vse_nazv)-1):  # запятая в конце каждого блока, кроме последнего
        textout = textout + ',\n'
    else:
        textout = textout + '\n'
    

# печатаем ботинки
textout = (textout +
           '  ]\n'+
           '}'
           )

# записываем в файл    
with open('output.geojson', 'w', encoding="utf-8" ) as f1:
    f1.write(textout)
