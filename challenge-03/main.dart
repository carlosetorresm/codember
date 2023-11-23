import 'dart:io';

void main() {
  File('challenge-03/data.txt').readAsLines().then((List<String> rows) {
    final failedPasswords = [];
    for (final row in rows) {
      final info = row.split(' ');
      final range = info[0].split('-');
      final searchVal = info[1].substring(0, info[1].length - 1); // remove :
      final password = info[2];

      final regexString = '$searchVal{${range[0]},${range[1]}}';
      final regex = RegExp(r'' + regexString + '');
      if (!regex.hasMatch(password)) {
        failedPasswords.add(password);
      }
    }
    print(failedPasswords[41] ?? '');
  }).onError((_, __) {
    print('archivo inexistente');
  });
}
