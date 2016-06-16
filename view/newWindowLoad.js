//$(document).ready(function(){
//    var tempItems=localStorage.getItem("items");
//    var items=changeStringToSet(tempItems);
//    var output=getShopCarData(items);
   // alert(output);
   var numbers=[];
   numbers.push(getUrlParam("colar"));
   numbers.push(getUrlParam("spirit"));
   numbers.push(getUrlParam("apple"));
   numbers.push(getUrlParam("litch"));
   numbers.push(getUrlParam("battery"));
   numbers.push(getUrlParam("noddles"));
   var items=loadAllItems();
   for(var i=0;i<items.length;i++){
     items[i].num=numbers[i];
   }
//   var output=getShopCarData(items);

//    $(".items").html(output);
//    $(".count").bind("click",goToResultPage);
//    $(".edit").bind("click",goBack);
//})


var Head=React.createClass({
    render:function(){
        return (<div className="head">
                   SHOP LIST
               </div>);
    }
})

var Result=React.createClass({

    render:function(){
        return (<div>
                   {
                    items.map(function(item){
                        if(item.num!=0){
                            return (<div>
                                       <span>name:</span>
                                       <span>{item.name}   </span>
                                       <span>,number:</span>
                                       <span>{item.num}</span>
                                    </div>
                            )
                        }
                    })
                   }

               </div>);
    }
})
//
var Edit=React.createClass({
//    onClick:function(){
//          var xmlHttp=new XMLHttpRequest();
//          xmlHttp.open("POST","module/getNumber.js?colar="+numbers[0]+"&spirit="+numbers[1]+"&apple="+numbers[2]+"&litch="+numbers[3]+"&battery="+numbers[4]+"&noddles="+numbers[5],true);
//          xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//          xmlHttp.send();
//          xmlHttp.onreadystatechange=function()
//            {
//            if (xmlHttp.readyState==4 && xmlHttp.status==200)
//              {
//                alert(xmlHttp.responseText);
//              }
//            }
//        },
    onClick:function(){
        window.location="main.html?colar="+numbers[0]+"&spirit="+numbers[1]+"&apple="+numbers[2]+"&litch="+numbers[3]+"&battery="+numbers[4]+"&noddles="+numbers[5];

    },
    onCheck:function(){
         window.location="result.html";

    },
    render:function(){
        return (<div>
                   <input className="bti" type="button" value="edit" onClick={this.onClick}/>
                   <input className="bti" type="button" value="check" onClick={this.onCheck}/>
               </div>);
    }
})
//
var Container=React.createClass({
    render:function(){
        return (<div>
                  <Head/>
                  <Result/>
                  <Edit/>
               </div>);
    }
})

    ReactDOM.render(
        <Container/>
        ,
        document.getElementById('container')
    );
