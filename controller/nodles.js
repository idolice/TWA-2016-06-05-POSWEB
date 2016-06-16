function addNodle(){
    items[5]++;
   // alert(itemsNum[0]);
    $(".number6").html("number:"+items[5]);
}
function decNodle(){
  //  alert(itemsNum[5]);
    if(items[5]<1){
        alert("Apple Number is already 0!");
    }else{
        items[5]--;
    }
     $(".number6").html("number:"+items[5]);
}