function addApple(){
    itemsNum[0]++;
   // alert(itemsNum[0]);
   $(".number1").html("number:"+itemsNum[0]);
}
function decApple(){
   // alert(itemsNum[0]);
    if(itemsNum[0]<1){
        alert("Apple Number is already 0!");
    }else{
        itemsNum[0]--;
    }
     $(".number1").html("number:"+itemsNum[0]);
}
