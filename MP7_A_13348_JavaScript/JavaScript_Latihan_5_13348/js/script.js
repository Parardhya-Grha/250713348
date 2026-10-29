function fn_ValForm(){
    var msg = "";
    var Iregex = "^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$";
    var sNama = document.getElementById("nama");
    var sEmail = document.getElementById("email");
    var iUmur = document.getElementById("umur");
    var sInfo = "";
    var sKategori = document.getElementById("kategori");
    var sPilihan = "";

    if(sNama == ""){
        msg += "\n* Nama tidak boleh kosong";
    }
    if(sEmail == ""){
        msg += "\n* Email tidak boleh kosong";
    }
    if(iUmur == ""){
        msg += "\n* Umur tidak boleh kosong";
    }
    if(sEmail == Iregex){
        msg += "\n* Email hanya menerima huruf kecil";
    }

    if(iUmur <= 14){
        sInfo = "Kategori Junior";
    }else{
        sInfo = "Kategori Senior";
    }
    switch(sKategori){
        case "C":
            sPilihan = "Cerdas Cermat";
            break;
        case "P":
            sPilihan = "Puisi";
            break;
        case "D":
            sPilihan = "Desain Poster";
            break;
    }

    if(msg != ""){
        alert("Peringatan: " + msg);
        return false;
    }else{
        alert("Terima kasih " + sNama + "! Anda terdaftar di lomba " + sPilihan + sInfo);
        return true;
    }
}