import 'dart:io';

void main() {
  File('challenge-04/data.txt').readAsLines().then((List<String> rows) {
    final realFiles = [];
    for (final row in rows) {
      final chars = {};
      final info = row.split('-');

      info[0].split('').forEach((e) => chars[e] = (chars[e] ?? 0) + 1);

      final validation = chars.entries
          .fold('', (prev, e) => e.value == 1 ? prev + e.key : prev);

      if (validation == info[1]) realFiles.add(info[1]);
    }
    print(realFiles[32] ?? '');
  }).onError((_, __) {
    print('archivo inexistente');
  });
}
