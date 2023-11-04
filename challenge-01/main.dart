import 'dart:io';

void main() {
  File('challenge-01/data.txt').readAsString().then((String data) {
    final hashMap = {};
    for (final word in data.split(' '))
      hashMap.containsKey(word) ? hashMap[word] += 1 : hashMap[word] = 1;
    final response = hashMap.entries.fold<String>(
        '', (previous, next) => '$previous${next.key}${next.value}');
    print(response);
  }).onError((_, __) {
    print('archivo inexistente');
  });
}
