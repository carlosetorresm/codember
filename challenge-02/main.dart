import 'dart:io';

void main() {
  File('challenge-02/data.txt').readAsString().then((String data) {
    String result = '';
    data.split('').fold(0, (prev, next) {
      switch (next) {
        case '#':
          return prev + 1;
        case '@':
          return prev - 1;
        case '*':
          return prev * prev;
        case '&':
          result += prev.toString();
      }
      return prev;
    });
    print(result);
  }).onError((_, __) {
    print('archivo inexistente');
  });
}
