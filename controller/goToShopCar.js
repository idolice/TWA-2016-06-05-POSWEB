function goShopCar(){
    var itemForResult=splitInputString();

    localStorage.setItem("items",JSON.stringify(itemForResult));

    window.location="shopcar.html?colar="+items[1]+"&spirit="+items[2]+"&apple="+items[0]+"&litch="+items[3]+"&battery="+items[4]+"&noddles="+items[5];

}
