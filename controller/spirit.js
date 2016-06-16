function addSpirit(){
    items[2]++;
   // alert(itemsNum[0]);
    $(".number3").html("number:"+items[2]);
}
function decSpirit(){
   // alert(itemsNum[2]);
    if(items[2]<1){
        alert("Apple Number is already 0!");
    }else{
        items[2]--;
    }
     $(".number3").html("number:"+items[2]);
}