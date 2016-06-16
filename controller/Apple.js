function addApple(){
    items[0]++;
   // alert(itemsNum[0]);
   $(".number1").html("number:"+items[0]);
}
function decApple(){
   // alert(itemsNum[0]);
    if(items[0]<1){
        alert("Apple Number is already 0!");
    }else{
        items[0]--;
    }
     $(".number1").html("number:"+items[0]);
}
