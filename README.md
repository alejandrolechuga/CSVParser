CSVParser
=========

CSV Parser

example csvstring
```
Year,Make,Model,Description,Price
1997,Ford,E350,"ac, abs, moon",3000.00
1999,Chevy,"Venture ""Extended Edition""","",4900.00
1999,Chevy,"Venture ""Extended Edition, Very Large""",,5000.00
1996,Jeep,Grand Cherokee,"MUST SELL!
air, moon roof, loaded",4799.00
1999,Jeep,"Wragler ""Sahara Extended"",","",5555
```

```javascript
CSV.parse(csvstring);
```
output

```
Array[6]
0: Array[6]
0: "John"
1: "Doe"
2: "120 jefferson st."
3: "Riverside"
4: " NJ"
5: " 08075"
length: 6
__proto__: Array[0]
1: Array[6]
0: "Jack"
1: "McGinnis"
2: "220 hobo Av."
3: "Phila"
4: " PA"
5: "09119"
length: 6
__proto__: Array[0]
2: Array[6]
0: "John ""Da Man"""
1: "Repici"
2: "120 Jefferson St."
3: "Riverside"
4: " NJ"
5: "08075"
length: 6
__proto__: Array[0]
3: Array[6]
0: "Stephen"
1: "Tyler"
2: "7452 Terrace ""At the Plaza"" road"
3: "SomeTown"
4: "SD"
5: " 91234"
length: 6
__proto__: Array[0]
4: Array[6]
5: Array[6]
0: "Joan ""the bone"", Anne"
1: "Jet"
2: "9th, at Terrace plc"
3: "Desert City"
4: "CO"
5: "00123"
length: 6
__proto__: Array[0]
length: 6
__proto__: Array[0]

```
