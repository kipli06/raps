const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("expand");
});
document.addEventListener("DOMContentLoaded", () => {
    // Tombol Sidebar
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
  
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show'); // Menambahkan/menghapus class 'show'
        menuToggle.textContent = navMenu.classList.contains('show') ? 'Close' : 'Menu';
      });
    }
  
    // Tambahkan event listener pada form login
    const formLogin = document.querySelector("form");
    if (formLogin) {
      formLogin.addEventListener("submit", (e) => {
        // Simpan status login
        localStorage.setItem("isLoggedIn", true);
        // Arahkan ke dashboard
        window.location.replace("dashboard.html");
      });
    }
  
    // Periksa apakah pengguna sudah login
    if (window.location.href.includes("dashboard.html") && !localStorage.setItem("isLoggedIn")) {
      // Jika belum login, arahkan ke halaman login
      window.location.href = "index.html";
    }
  
    // Tambahkan event listener pada tombol logout
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        // Hapus status login
        localStorage.removeItem("isLoggedIn");
        // Arahkan ke halaman login
        window.location.href = "index.html";
      });
    }
  
    // Tambahkan event listener pada form pengajuan
    const formPengajuan = document.getElementById("modalusaha");
    if (formPengajuan) {
      formPengajuan.addEventListener("submit", (e) => {
        // Simpan data pengajuan
        const nama = document.getElementById("name").value;
        const nik = document.getElementById("nik").value;
        const alamat = document.getElementById("alamat").value;
        const nominalPinjaman = document.getElementById("nominal").value;
        const tujuanPinjaman = document.getElementById("tujuan").value;
        const jaminan = document.getElementById("jaminan").value;
  
        // Buat objek data baru
        const newData = { nama, nik, alamat, nominalPinjaman, tujuanPinjaman, jaminan };
  
        // Ambil data dari localStorage atau inisialisasi array baru
        const storedData = JSON.parse(localStorage.getItem("pinjamanData")) || [];
  
        // Tambahkan data baru ke array
        storedData.push(newData);
  
        // Simpan kembali ke localStorage
        localStorage.setItem("pinjamanData", JSON.stringify(storedData));
  
        // Reset form
        formPengajuan.reset();
  
        // Tampilkan alert
        alert("Data berhasil disimpan!");
      });
    }
  
    // Tambahkan event listener pada form pengajuan pinjaman tunai
    const formPinjamanTunai = document.getElementById("pinjamantunai");
    if (formPinjamanTunai) {
      formPinjamanTunai.addEventListener("submit", (e) => {
        // Simpan data pengajuan
        const nama = document.getElementById("name").value;
        const nik = document.getElementById("nik").value;
        const alamat = document.getElementById("alamat").value;
        const nominalPinjaman = document.getElementById("nominal").value;
        const tujuanPinjaman = document.getElementById("tujuan").value;
        const jaminan = document.getElementById("jaminan").value;
  
        // Buat objek data baru
        const newData = { nama, nik, alamat, nominalPinjaman, tujuanPinjaman, jaminan };
  
        // Ambil data dari localStorage atau inisialisasi array baru
        const storedData = JSON.parse(localStorage.getItem("pinjamanData")) || [];
  
        // Tambahkan data baru ke array
        storedData.push(newData);
  
        // Simpan kembali ke localStorage
        localStorage.setItem("pinjamanData", JSON.stringify(storedData));
  
        // Reset form
        formPinjamanTunai.reset();
  
        // Tampilkan alert
        alert("Data berhasil disimpan!");
      });
    }
  
    // Tambahkan event listener pada tabel pengajuan
    const tablePengajuan = document.getElementById("table-index");
    if (tablePengajuan) {
      // Ambil data dari localStorage
      const storedData = JSON.parse(localStorage.getItem("pinjamanData")) || [];
  
      // Tampilkan data di tabel
      storedData.forEach((data, index) => {
        const row = tablePengajuan.insertRow();
        row.innerHTML = `
          <td>${data.nama}</td>
          <td>${data.nik}</td>
   <td>${data.alamat}</td>
          <td>${data.nominalPinjaman}</td>
          <td>${data.tujuanPinjaman}</td>
          <td>${data.jaminan}</td>
          <td><button class="btn btn-danger btn-sm delete-row" data-index="${index}">Hapus</button></td>
        `;
      });
  
      // Tambahkan event listener pada tombol hapus
      tablePengajuan.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-row")) {
          const index = e.target.dataset.index;
          const storedData = JSON.parse(localStorage.getItem("pinjamanData")) || [];
          storedData.splice(index, 1);
          localStorage.setItem("pinjamanData", JSON.stringify(storedData));
          e.target.closest("tr").remove();
        }
      });
    }
  
    // Tambahkan event listener pada tabel dashboard
    const tableDashboard = document.getElementById("table-dashboard");
    if (tableDashboard) {
      // Ambil data dari localStorage
      const storedData = JSON.parse(localStorage.getItem("pinjamanData")) || [];
  
      // Tampilkan data di tabel
      storedData.forEach((data, index) => {
        const row = tableDashboard.insertRow();
        row.innerHTML = `
          <td>${data.nama}</td>
          <td>${data.nik}</td>
          <td>${data.alamat}</td>
          <td>${data.nominalPinjaman}</td>
          <td>${data.tujuanPinjaman}</td>
          <td>${data.jaminan}</td>
          <td><button class="btn btn-danger btn-sm delete-row" data-index="${index}">Hapus</button></td>
        `;
      });
  
      // Tambahkan event listener pada tombol hapus
      tableDashboard.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-row")) {
          const index = e.target.dataset.index;
          const storedData = JSON.parse(localStorage.getItem("pinjamanData")) || [];
          storedData.splice(index, 1);
          localStorage.setItem("pinjamanData", JSON.stringify(storedData));
          e.target.closest("tr").remove();
        }
      });
    }
  });
