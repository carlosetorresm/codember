import re

def isEmail(data:str) -> bool:
    return True if re.fullmatch(r'^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$',data) else False


def validateCSV(data:list[str]) -> bool:
    if len(data) < 5: 
        return False
    if not data[0].isalnum(): 
        return False
    if not data[1].isalnum():
        return False
    if not isEmail(data[2]):
        return False
    if data[3] == '' or not data[3].isnumeric():
        return False
    if data[4] == '' or not data[4].replace(' ','').isalpha(): 
        return False
    return True


validUsernames = list()
with open('challenge-05/data.txt','r') as f:
    for row in f.read().splitlines():
        data = row.split(',')
        if not validateCSV(data): 
            validUsernames.append(data[1][0])
print(''.join(validUsernames))


