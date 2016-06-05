function addNodle(){
    itemsNum[5]++;
   // alert(itemsNum[0]);
    $(".number6").html(itemsNum[5]);
}
function decNodle(){
  //  alert(itemsNum[5]);
    if(itemsNum[5]<1){
        alert("Apple Number is already 0!");
    }else{
        itemsNum[5]--;
    }
     $(".number6").html(itemsNum[5]);
}