function addColar(){
    items[1]++;
   // alert(itemsNum[0]);
    $(".number2").html("number:"+items[1]);
}
function decColar(){
    //alert(itemsNum[1]);
    if(items[1]<1){
        alert("Colar Number is already 0!");
    }else{
        items[1]--;
    }
     $(".number2").html("number:"+items[1]);
}