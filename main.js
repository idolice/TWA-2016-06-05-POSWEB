$(document).ready(function(){
    items=[0,0,0,0,0,0];
    editShoppingData();
    $(".number1").html("number:"+items[0]);
    $(".number5").html("number:"+items[4]);
    $(".number2").html("number:"+items[1]);
    $(".number4").html("number:"+items[3]);
    $(".number6").html("number:"+items[5]);
    $(".number3").html("number:"+items[2]);
    $(".add1").bind("click",addApple);
    $(".dec1").bind("click",decApple);
    $(".add2").bind("click",addColar);
    $(".dec2").bind("click",decColar);
    $(".add3").bind("click",addSpirit);
    $(".dec3").bind("click",decSpirit);
    $(".add4").bind("click",addLitchi);
    $(".dec4").bind("click",decLitchi);
    $(".add5").bind("click",addBatery);
    $(".dec5").bind("click",decBatery);
    $(".add6").bind("click",addNodle);
    $(".dec6").bind("click",decNodle);
    $(".submit").bind("click",goShopCar);

})


//var Head=React.createClass({
//
//    render:function(){
//    return (
//            <div/>
//            )
//    }
//})
//
//var Apple=React.createClass({
//    render:function(){
//    return (<div class="apple">
//                <input class="dec1" value="-" type="button">
//                <span class="item">apple</span>
//                <input class="add1" value="+" type="button">
//                <span class="number1"></span>
//            </div>);
//    }
//})
//
//var Colar=React.createClass({
//    render:function(){
//    return (
//            <div class="cococolar">
//                <input class="dec2" value="-" type="button">
//                <span class="item">cococolar</span>
//                <input class="add2" value="+" type="button">
//                <span class="number2"></span>
//            </div>
//    );
//    }
//})
//
//var Sprite=React.createClass({
//    render:function(){
//    return (
//            <div class="Sprite">
//                <input class="dec3" value="-" type="button">
//                <span class="item">Sprite</span>
//                <input class="add3" value="+" type="button">
//                <span class="number3"></span>
//            </div>
//    );
//    }
//})
//
//var Litchi=React.createClass({
//    render:function(){
//    return (
//            <div class="Litchi">
//                <input class="dec4" value="-" type="button">
//                <span class="item">Litchi</span>
//                <input class="add4" value="+" type="button">
//                <span class="number4"></span>
//            </div>
//    );
//    }
//})
//
//var Battery=React.createClass({
//    render:function(){
//    return (
//            <div class="battery">
//                <input class="dec5" value="-" type="button">
//                <span class="item">battery</span>
//                <input class="add5" value="+" type="button">
//                <span class="number5"></span>
//            </div>
//    );
//    }
//})
//
//var Instantnoodles=React.createClass({
//    render:function(){
//    return (
//            <div class="Instantnoodles">
//                <input class="dec6" value="-" type="button">
//                <span class="item">Instant noodles</span>
//                <input class="add6" value="+" type="button">
//                <span class="number6"></span>
//            </div>
//    )
//    }
//})
//
//var ItemList=React.createClass({
//    render:function(){
//    return (
//            <div>
//              <Apple/>
//              <Colar/>
//              <Sprite/>
//              <Litchi/>
//              <Battery/>
//              <Instantnoodles/>
//            </div>
//    )
//    }
//})
//
//ReactDOM.render(<ItemList/>,
//document.getElementById("container"));
