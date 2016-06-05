function addLitchi(){
    itemsNum[3]++;
   // alert(itemsNum[0]);
    $(".number4").html(itemsNum[3]);
}
function decLitchi(){
    //alert(itemsNum[3]);
    if(itemsNum[3]<1){
        alert("Apple Number is already 0!");
    }else{
        itemsNum[3]--;
    }
     $(".number4").html(itemsNum[3]);
}