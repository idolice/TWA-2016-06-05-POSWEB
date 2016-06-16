function addBatery(){
    items[4]++;
   // alert(itemsNum[0]);
    $(".number5").html("number:"+items[4]);
}
function decBatery(){
   // alert(itemsNum[4]);
    if(items[4]<1){
        alert("Apple Number is already 0!");
    }else{
        items[4]--;
    }
     $(".number5").html("number:"+items[4]);
}