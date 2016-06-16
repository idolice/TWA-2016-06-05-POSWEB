function addLitchi(){
    items[3]++;
   // alert(itemsNum[0]);
    $(".number4").html("number:"+items[3]);
}
function decLitchi(){
    //alert(itemsNum[3]);
    if(items[3]<1){
        alert("Apple Number is already 0!");
    }else{
        items[3]--;
    }
     $(".number4").html("number:"+items[3]);
}