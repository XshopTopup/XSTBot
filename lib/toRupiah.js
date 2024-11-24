function toRupiah(angka) {
    var angkaStr = angka.toString();
    var angkaTanpaKoma = angkaStr.split('.')[0];
    var angkaRev = angkaTanpaKoma.toString().split('').reverse().join('');
    var rupiah = '';
  for (var i = 0; i < angkaRev.length; i++) {
  if (i % 3 == 0) rupiah += angkaRev.substr(i, 3) + '.';
  }
  return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }

  module.exports = toRupiah
