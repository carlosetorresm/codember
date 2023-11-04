response = ''
map = dict()
with open('challenge-01/data.txt','r') as f:
    for word in f.readline().split(' '):
        if word in map:
            map[word]+=1
            continue
        map[word]=1
for word in map:
    response+=word+str(map[word])
print (response)