
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function showContent(page) {
  const content = {
    dashboard: '<h1>Dashboard</h1><p>Ini halaman Dashboard.</p>',
    harga: '<h1>Daftar Harga</h1><p>Ini halaman Daftar Harga.</p>',
    downline: '<h1>List Downline</h1><p>Ini halaman List Downline.</p>',
    transaksi: '<h1>Transaksi</h1><p>Ini halaman Transaksi.</p>',
    deposit: '<h1>Deposit</h1><p>Ini halaman Deposit.</p>',
    mutasi: '<h1>Mutasi Saldo</h1><p>Ini halaman Mutasi Saldo.</p>',
    qris: '<h1>Mutasi QRIS</h1><p>Ini halaman Mutasi QRIS.</p>'
  };
  document.getElementById('mainContent').innerHTML = content[page] || '<h1>Selamat Datang</h1><p>Pilih menu di samping untuk mulai.</p>';
}
