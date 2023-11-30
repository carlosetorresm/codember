realFiles = []
with open('challenge-04/data.txt','r') as f:
    for row in f.read().splitlines():
        validation = ''
        map = dict()
        info = row.split('-')
        
        for e in list(info[0]):
            map[e] = map.get(e, 0) + 1

        for key in map:
            validation+= key if map[key] == 1 else ''
        
        if validation == info[1]:
            realFiles.append(info[1])
print(realFiles[32])