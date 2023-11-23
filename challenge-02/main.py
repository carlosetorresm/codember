
response = ''
with open('challenge-02/data.txt','r') as f:
    prev = 0
    for word in list(f.readline()):
        if(word == '#'):
            prev += 1
            continue
        if(word == '@'):
            prev -= 1
            continue
        if(word == '*'):
            prev *= prev
            continue
        if(word == '&'):
            response += str(prev)
print (response)


