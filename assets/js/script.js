// Öğrenci butonuna tıklandığında
document.getElementById("bilet-btn1").addEventListener("click", function () {
  document.getElementById("bilet-fiyat").style.display = "block";
  document.querySelector(".bilet-kdv").style.display = "block";
  document.querySelector(".bilet-satin-al").style.marginTop = "0";
  document.getElementById("bilet-list1").textContent = "Yemek";
  document.getElementById("bilet-list2").textContent = "Workshop";
  document.getElementById("bilet-list3").textContent =
    "Konuşmacılarla bağlantı";
  document.getElementById("bilet-fiyat").textContent = "₺500";
  document.querySelector(".bilet-kdv").textContent = "KDV Dahildir";
  document.querySelector(".bilet-satin-al a").textContent = "Satın Al";

  // Tüm butonların aktiflik stilini kaldır
  document.querySelectorAll(".bilet-menu-btn").forEach(function (btn) {
    btn.classList.remove("selected-btn");
  });

  // Öğrenci butonuna aktiflik stilini ekle
  this.classList.add("selected-btn");
});

window.addEventListener("DOMContentLoaded", function () {
  var standartButon = document.getElementById("bilet-btn2");
  if (standartButon) {
    // standartButon.style.backgroundColor = "#f1b926";
    standartButon.click();
  }
});
// Standart butonuna tıklandığında
document.getElementById("bilet-btn2").addEventListener("click", function () {
  document.getElementById("bilet-fiyat").style.display = "block";
  document.querySelector(".bilet-kdv").style.display = "block";
  document.querySelector(".bilet-satin-al").style.marginTop = "0";
  document.getElementById("bilet-list1").textContent = "Yemek";
  document.getElementById("bilet-list2").textContent = "Workshop";
  document.getElementById("bilet-list3").textContent =
    "Konuşmacılarla bağlantı";
  document.getElementById("bilet-fiyat").textContent = "₺750";
  document.querySelector("#kdv").textContent = "KDV Dahildir";

  // Tüm butonların aktiflik stilini kaldır
  document.querySelectorAll(".bilet-menu-btn").forEach(function (btn) {
    btn.classList.remove("selected-btn");
  });

  // Standart butonuna aktiflik stilini ekle
  this.classList.add("selected-btn");
});

// +5 Kişi butonuna tıklandığında
document.getElementById("bilet-btn3").addEventListener("click", function () {
  document.getElementById("bilet-list1").textContent = "Yemek";
  document.getElementById("bilet-list2").textContent = "Workshop";
  document.getElementById("bilet-list3").textContent =
    "Konuşmacılarla bağlantı";
  document.getElementById("bilet-fiyat").style.display = "none";
  document.querySelector(".bilet-kdv").style.display = "none";
  document.querySelector(".bilet-satin-al a").textContent = "İletişim geç";
  document.querySelector(".bilet-satin-al").style.marginTop = "50px";

  // Tüm butonların aktiflik stilini kaldır
  document.querySelectorAll(".bilet-menu-btn").forEach(function (btn) {
    btn.classList.remove("selected-btn");
  });

  // +5 Kişi butonuna aktiflik stilini ekle
  this.classList.add("selected-btn");
});