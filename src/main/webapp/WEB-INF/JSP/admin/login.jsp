<%--
  Created by IntelliJ IDEA.
  User: L
  Date: 2019/4/7
  Time: 22:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@include file="../include/chatHead.jsp"%>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/h5/login.css">
<body>
<div class="helloldiv">欢迎来到聊天室</div>
<br>
<div class="helloldiv">请登录</div>
<div id="container">
    <label>用户名：</label>
    <input type="text" id="input">
    <br>
    <label>密<span class="bank15"></span>码：</label>
    <input type="password" id="passwd">
    <br>
    <button id="login">登录</button>
    <span class="bank5"></span>
    <button id="register">注册</button>
</div>

</body>
</html>
