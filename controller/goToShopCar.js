function goShopCar(){
    var items=splitInputString();
   // alert(items[0].num);
    localStorage.setItem("items",JSON.stringify(items));
    window.location="shopcar.html";

}