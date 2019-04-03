// window.moveTo(0,0);
// window.resizeTo(900,920);
var flag = 0;
// $("#head_portrait").attr("disabled",true);

function down(event){
    // alert(event.keyCode);
        if (event.keyCode == 13)
        {
            showText();
        }
}

function showText() {
    if (flag == 1)
    {
        // alert("somt");
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
            // "margin" : "5px"
        });
        flag = 1;
        $("#chat_frame").append(text2);
        // $(divz).append(text2);
        $("#input").val("");
        $("#chat_frame").scrollTop(100000);
        // document.getElementById("input").value = "";
    }

}



