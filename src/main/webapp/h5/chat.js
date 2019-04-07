var flag = 0;
var num = 0;
var dataImg = ["img/background_2.jpg","img/background_3.png","img/background_4.png","img/background_1.jpg"];
function backgroude_change() {     //更换背景
    num = num % 4;
    $("#outmost").css("backgroundImage","url(" + dataImg[num] + ")");
    num++;
}
function kong(e) {     //阻止事件冒泡 即点击container时也更换背景
    e.stopPropagation();
}
function down(event){
    if (event.keyCode == 13)
    {
        showText();
    }
}
function showText() {
    if (flag == 1)
    {
        $("#chat_frame").append($("<br/>"));
        $("#chat_frame").append($("<br/>"));
    }
    var text = $("#input").val();
    if (text != ""){
        var text2 = $("<p></p>").text(text);
        $(text2).css({
            "float" : "right",
            "height" : "auto",
            "width" : "auto",
            "padding" : "2px",
            "border" : "solid 1px #00004f",
            "border-radius" : "5px",
            "font-family" : "楷体",
            "font-size" : "20px",
            "background-color" : "azure"
        });
        flag = 1;
        $("#chat_frame").append(text2);
        $("#input").val("");
        $("#chat_frame").scrollTop(100000);
    }

}



