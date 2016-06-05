function addColar(){
    itemsNum[1]++;
   // alert(itemsNum[0]);
    $(".number2").html(itemsNum[1]);
}
function decColar(){
    //alert(itemsNum[1]);
    if(itemsNum[1]<1){
        alert("Colar Number is already 0!");
    }else{
        itemsNum[1]--;
    }
     $(".number2").html(itemsNum[1]);
}