<%--
  Created by IntelliJ IDEA.
  User: L
  Date: 2019/4/3
  Time: 19:55
  To change this template use File | Settings | File Templates.
--%>
<%@include file="../include/chatHead.jsp"%>

<body>
<div id="outmost">
    <div id="container">
        <div id="headline">          <!--导航栏-->
            <button id="head_portrait"></button>
        </div>
        <div id="content">
            <div id="list">              <!--显示聊天人列表-->
                <ul>

                </ul>
            </div>

            <div id="frame">            <!--聊天框框-->
                <div id="chat_frame">           <!--聊天记录框框-->


                </div>

                <div id="input_frame">            <!--聊天输入框-->
                    <!--<div id="expression_frame">-->

                    <!--</div>-->
                    <!--cols="63" rows="3"-->
                    <textarea id="input" onkeyup="down(event)"></textarea>

                    <div id="button_div">                     <!--显示发送按钮的框-->
                        <button id="btn" onclick="showText()">发送</button>            <!--发送按钮-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
