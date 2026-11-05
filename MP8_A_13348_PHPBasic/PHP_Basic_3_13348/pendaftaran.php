<?php
$nama = $_POST['nama'] ?? '';
$npm = $_POST['npm'] ?? '';
$paket = $_POST['paket'] ?? '';
$message = array();

echo "<h1>Pendaftaran Membership</h1>";
    echo '<form method="POST" action=""> 
            <p>Nama             : <br /> <input type="text" name="nama" /></p>
            <p>NPM              : <br /> <input type="text" name="npm" /></p>
            <p>Paket Membership :  
                <input type="radio" name="paket" id="1bulan" value="1bulan"/>
                <label for="1bulan">1 Bulan</label>
                <input type="radio" name="paket" id="3bulan" value="3bulan"/>
                <label for="3bulan">3 Bulan</label>
            </p>
            <button type="submit">Kirim</button>
        </form>';

    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $nama = $_POST['nama'];
        $npm = $_POST['npm'];
        $hobi = $_POST[''];
        echo "Hobi " . htmlspecialchars($nama) . " / " . htmlspecialchars($npm) . " adalah " . htmlspecialchars($hobi);
    }else{
        echo "Silahkan lengkapi formulir di atas.";
    }
?>