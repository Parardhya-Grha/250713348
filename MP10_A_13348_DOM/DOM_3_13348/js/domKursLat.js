var targetNode;

function init(){
    targetNode = document.getElementById("hasil").firstChild;
    hitungKurs("idr");
}

function hitungKurs(id){
    var inputEl = document.getElementById(id);
    var hasilUsd = parseFloat(inputEl.value) / 18246;
    targetNode.data = hasilUsd.toFixed(2);

    var list = document.createElement("li");
    var textRiwayat = document.createTextNode("Rp" + inputEl.value + " = US$" + hasilUsd.toFixed(2));
    list.appendChild(textRiwayat);
    var listRiwayat = document.getElementById("riwayat");
    listRiwayat.appendChild(list);
}var targetNode;