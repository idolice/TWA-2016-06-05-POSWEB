//TODO: Please write code in this file.
function loadAllItems() {
    return [
        new Item('ITEM000000', '可口可乐', '瓶', 3.00,0),
        new Item('ITEM000001', '雪碧', '瓶', 3.00,0),
        new Item('ITEM000002', '苹果', '斤', 5.50,0),
        new Item('ITEM000003', '荔枝', '斤', 15.00,0),
        new Item('ITEM000004', '电池', '个', 2.00,0),
        new Item('ITEM000005', '方便面', '袋', 4.50,0)
    ];
}

function editShoppingData(){
    if(window.location.href.indexOf("?")>0){

        items[0]=parseInt(getUrlParam("apple"));
        items[1]=parseInt(getUrlParam("colar"));
        items[2]=parseInt(getUrlParam("spirit"));
        items[3]=parseInt(getUrlParam("litch"));
        items[4]=parseInt(getUrlParam("battery"));
        items[5]=parseInt(getUrlParam("noddles"));

    }
}

var newItems=loadAllItems();

function getUrlParam(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;


}

function ifArrayHasBarcodeAlready(barcode,Array){
    for(var i=0;i<Array.length;i++){
        if(barcode==Array[i].barcode){
            return i;
        }
    }
    return -1;
}


function splitInputString(){
    var tempItems=loadAllItems();
   // alert(tempItems[0].barcode);
    for(var i=0;i<tempItems.length;i++){
      if(tempItems[i].barcode=="ITEM000002") {
        tempItems[i].num=items[0];
      }
      if(tempItems[i].barcode=="ITEM000000"){
        tempItems[i].num=items[1];
      }
      if(tempItems[i].barcode=="ITEM000001"){
         tempItems[i].num=items[2];
      }
      if(tempItems[i].barcode=="ITEM000003"){
         tempItems[i].num=items[3];
      }
      if(tempItems[i].barcode=="ITEM000004"){
         tempItems[i].num=items[4];
      }
      if(tempItems[i].barcode=="ITEM000005"){
         tempItems[i].num=items[5];
      }


    }
    return tempItems;
}


function getDataString(){
    var  dateDigitToString = function (num) {
                    return num < 10 ? '0' + num : num;
                }
    var currentDate = new Date(),
                year = dateDigitToString(currentDate.getFullYear()),
                month = dateDigitToString(currentDate.getMonth() + 1),
                date = dateDigitToString(currentDate.getDate()),
                hour = dateDigitToString(currentDate.getHours()),
                minute = dateDigitToString(currentDate.getMinutes()),
                second = dateDigitToString(currentDate.getSeconds()),
                formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
                return formattedDateString;
}

function getOutPutString(allItemsAddNum){
    var outPutString="";
    var total=0;
    for(var j=0;j<allItemsAddNum.length;j++){
        //alert(allItemsAddNum[j].num);

        if(allItemsAddNum[j].num!=0){
        var singleTotal=allItemsAddNum[j].price*allItemsAddNum[j].num;
        total+=singleTotal;
        //alert(singleTotal);
        outPutString=outPutString+'名称：'+allItemsAddNum[j].name+'，数量：'+allItemsAddNum[j].num+allItemsAddNum[j].unit+'，单价：'+allItemsAddNum[j].price+'(元)，小计：'+singleTotal+'(元)</br>';
        }
    }
    outPutString+="总计："+total+"(元)";

    return outPutString;

}

function getShopCarData(allItemsAddNum){
     var outPutString="";
     for(var j=0;j<allItemsAddNum.length;j++){
        if(allItemsAddNum[j].num!=0){
            outPutString=outPutString+allItemsAddNum[j].name+":"+allItemsAddNum[j].num+"\n";
        }
     }
     return outPutString;
}
//
//function printString(outPutString){
//    console.log(outPutString);
//}
//
//function printInventory(inputs){
//    var allItemsAddNum=splitInputString(inputs);
//    var allItemsAddPromotion=getPromotionInfo(allItemsAddNum);
//    var allItemsAddNumOfFree=calculateNumOfFree(allItemsAddPromotion);
//    var totalAndSaved=calculateTotalAndSaved(allItemsAddNumOfFree);
//    var outPutString=getOutPutString(allItemsAddNumOfFree,totalAndSaved);
//    printString(outPutString);
//}

function changeStringToSet(input){

 // alert(newItems);
    input=input.substring(1,input.length-1);
  //  alert(input);
    var tempArry=input.split("},");
    tempArry[tempArry.length-1]=tempArry[tempArry.length-1].substring(0,tempArry[tempArry.length-1].length-1);
    tempArry.forEach(function(item){
        if( index=item.indexOf("ITEM000000")!=-1){
   //         alert(item);
            var index1=item.indexOf("num");
   //         alert(index1);
            item=item.substring(index1+5);
 //           alert(item);
            var num=item;
 //           alert(num);
            newItems[0].num=num;
        }
        if( index=item.indexOf("ITEM000001")!=-1){
    //       alert(item);
             var index1=item.indexOf("num");
           //alert(index1);
             item=item.substring(index1+5);
         //  alert(item);
             var num=item;
         //  alert(num);
             newItems[1].num=num;
        }
        if( index=item.indexOf("ITEM000002")!=-1){
     //      alert(item);
             var index1=item.indexOf("num");
           //alert(index1);
             item=item.substring(index1+5);
         //  alert(item);
             var num=item;
         //  alert(num);
             newItems[2].num=num;
        }
        if( index=item.indexOf("ITEM000003")!=-1){
    //       alert(item);
             var index1=item.indexOf("num");
           //alert(index1);
             item=item.substring(index1+5);
         //  alert(item);
             var num=item;
         //  alert(num);
             newItems[3].num=num;
        }
        if( index=item.indexOf("ITEM000004")!=-1){
     //     alert(item);
            var index1=item.indexOf("num");
          //alert(index1);
            item=item.substring(index1+5);
        //  alert(item);
            var num=item;
          //alert(num);
            newItems[4].num=num;
        }
        if( index=item.indexOf("ITEM000005")!=-1){
         // alert(item);
            var index1=item.indexOf("num");
          //alert(index1);
            item=item.substring(index1+5);
          //alert(item);
            var num=item;
          //alert(num.length);
        //  alert(num);
            newItems[5].num=num;
         }
    })
 // alert(newItems[0].name);
    return newItems;
}

