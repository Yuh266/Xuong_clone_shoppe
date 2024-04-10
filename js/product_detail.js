var search_url = window.location.search ;

console.log(search_url);

var parmas = new URLSearchParams(search_url);

var index = parmas.get("index");
console.log(index);

var product = product[index];

var title = document.getElementsByClassName("title")[0];
title.innerText = product['name'];
var price = document.getElementById('price');
price.innerText = product['price'];
var img = document.getElementById('img');

img.setAttribute('src', product['img']);

// + - số lượng 

var tru = document.getElementById('tru');
var cong = document.getElementById('cong');
var Solg = document.getElementById('Solg').value;

function hienThi(){
    document.getElementById('Solg').value = Solg;

}

tru.onclick = function(){
    if (Solg <= 1){

    }else{
        Solg -- ;
        hienThi();
    }
}

cong.onclick = function(){
    Solg ++ ;
    hienThi();
}












