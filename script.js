function hitungLuas() {
  var panjangSisi = document.getElementById("sideLength1").value;

  if (panjangSisi <= 0 || isNaN(panjangSisi)) {
    alert("Masukkan panjang sisi yang valid.");
    return;
  }

  var luas = panjangSisi * panjangSisi;

  document.getElementById("resultLuas").innerHTML = "Luas: " + luas;
}

function hitungKeliling() {
  var panjangSisi = document.getElementById("sideLength2").value;

  if (panjangSisi <= 0 || isNaN(panjangSisi)) {
    alert("Masukkan panjang sisi yang valid.");
    return;
  }

  var keliling = 4 * panjangSisi;

  document.getElementById("resultKeliling").innerHTML = "Keliling: " + keliling;
}
