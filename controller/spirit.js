function addSpirit(){
    itemsNum[2]++;
   // alert(itemsNum[0]);
    $(".number3").html("number:"+itemsNum[2]);
}
function decSpirit(){
   // alert(itemsNum[2]);
    if(itemsNum[2]<1){
        alert("Apple Number is already 0!");
    }else{
        itemsNum[2]--;
    }
     $(".number3").html("number:"+itemsNum[2]);
}