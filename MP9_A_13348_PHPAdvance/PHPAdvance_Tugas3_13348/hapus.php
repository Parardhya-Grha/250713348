<?php
    require 'koneksi.php';
    
    $id = $_GET['id'] ?? '';
    if(ctype_digit($id) === false || $id === ''){
        echo '<p style="color: red;">!! ID tidak valid. !!</p>';
    }else{
        $delete = mysqli_prepare($conn, 'DELETE FROM mahasiswa WHERE id = ?');
        mysqli_stmt_bind_param($delete, 'i', $id);
        mysqli_stmt_execute($delete);

        if(mysqli_stmt_affected_rows($delete) === 1){
            echo '<p>Data berhasil dihapus.</p>';
        }else{
            echo '<p>Data tidak ditemukan.</p>';
        }
    }

    echo '<a href="index.php">Kembali</a>';
?>