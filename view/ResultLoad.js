$(document).ready(function(){
    var tempItems=localStorage.getItem("items");
    var items=changeStringToSet(tempItems);
    var output=getOutPutString(items);
    $(".items").html(output);
})