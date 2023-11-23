import re
failedPasswords = list()
with open('challenge-03/data.txt','r') as f:
    for row in f.readlines():
        info = row.split(' ')
        range = info[0].split('-')
        searchedVal = info[1][:-1]
        password = info[2]

        regexSearch = searchedVal +'{'+range[0]+','+range[1]+'}'
        if re.search(regexSearch, password):
            continue
        failedPasswords.append(password)
print(failedPasswords[41])

