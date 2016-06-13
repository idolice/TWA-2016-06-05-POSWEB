function addBatery(){
    itemsNum[4]++;
   // alert(itemsNum[0]);
    $(".number5").html("number:"+itemsNum[4]);
}
function decBatery(){
   // alert(itemsNum[4]);
    if(itemsNum[4]<1){
        alert("Apple Number is already 0!");
    }else{
        itemsNum[4]--;
    }
     $(".number5").html("number:"+itemsNum[4]);
}