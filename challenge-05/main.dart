import 'dart:io';

void main() {
  File('challenge-05/data.txt').readAsLines().then((List<String> rows) {
    final validUsernames = [];
    for (final row in rows) {
      final data = row.split(',');
      if (!validateCSV(data)) validUsernames.add(data[1][0]);
    }
    print(validUsernames.join());
  }).onError((_, __) {
    print('archivo inexistente');
  });
}

bool validateCSV(List<String> data) {
  if (data.length < 5) return false;
  if (!isAlphanumeric(data[0])) return false;
  if (!isAlphanumeric(data[1])) return false;
  if (!isEmail(data[2])) return false;
  if (!isInt(data[3])) return false;
  if (!isWord(data[4])) return false;
  return true;
}

bool isAlphanumeric(String data) => RegExp(r'^[^_\W]+$').hasMatch(data);

bool isEmail(String data) =>
    RegExp(r'^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(data);

bool isInt(String data) => num.tryParse(data) != null || data.isEmpty;

bool isWord(String data) =>
    RegExp(r'^[A-Z a-z]*$').hasMatch(data) || data.isEmpty;
