$(document).ready(function(){
    var tempItems=localStorage.getItem("items");
    var items=changeStringToSet(tempItems);
    var output=getShopCarData(items);
   // alert(output);
    $(".items").html(output);
    $(".count").bind("click",goToResultPage);
    $(".edit").bind("click",goBack);
})

