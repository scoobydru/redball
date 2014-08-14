<!DOCTYPE html>
<html>
<head>
 <title>TTX</title>
     
    <link rel="stylesheet" href="css/reset.css" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
     
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-ui-1.8.16.custom.min.js"></script>
     
    <style>
    body {
        padding-top: 40px;
    }
    #main {
        margin-top: 80px;
        text-align: center;
    }
    </style>
</head>
<body>
    <div class="topbar">
        <div class="fill">
            <div class="container">
                <a class="brand" href="index.php">TTX</a>
            </div>
        </div>
    </div>
    <div id="main" class="container">
        <form class="form-stacked" method="POST" action="login.php">
            <div class="row">
                <div class="span5 offset5">
                    <label for="login_username">Username:</label>
                    <input type="text" id="login_username" name="login_username" placeholder="username" />
                 
                    <label for="login_password">Password:</label>
                    <input type="password" id="login_password" name="login_password" placeholder="password" />
                     
                </div>
            </div>
            <div class="actions">
                <button type="submit" name="login_submit" class="btn primary large">Login</button>
            </div>
        </form>
        </div>







<div style="text-align: center;">
	<div style="box-sizing: border-box; display: inline-block; width: auto; max-width: 480px; background-color: #FFFFFF; border: 2px solid #0361A8; border-radius: 5px; box-shadow: 0px 0px 8px #0361A8; margin: 50px auto auto;">
	<div style="background: #0361A8; border-radius: 5px 5px 0px 0px; padding: 15px;"><span style="font-family: verdana,arial; color: #D4D4D4; font-size: 1.00em; font-weight:bold;">Enter your login and password</span></div>
	<div style="background: ; padding: 15px">
	<style type="text/css" scoped>
	td { text-align:left; font-family: verdana,arial; color: #064073; font-size: 1.00em; }
	input { border: 1px solid #CCCCCC; border-radius: 5px; color: #666666; display: inline-block; font-size: 1.00em;  padding: 5px; width: 100%; }
	input[type="button"], input[type="reset"], input[type="submit"] { height: auto; width: auto; cursor: pointer; box-shadow: 0px 0px 5px #0361A8; float: right; margin-top: 10px; }
	table.center { margin-left:auto; margin-right:auto; }
	.error { font-family: verdana,arial; color: #D41313; font-size: 1.00em; }
	</style>
<form method="post" action="https://www.authpro.com/auth/deluxe/" name="aform" target="_top">
<input type="hidden" name="action" value="login">
<input type="hidden" name="hide" value="">
<table class='center'>
<tr><td>Nombre de usuario:</td><td><input type="text" name="login"></td></tr>
<tr><td>Contraseña:</td><td><input type="password" name="password"></td></tr>
<tr><td>&nbsp;</td><td><input type="submit" value="Enviar"></td></tr>
<tr><td colspan=2>&nbsp;</td></tr>
<tr><td colspan=2>Lost your username or password? Find it <a href="https://www.authpro.com/auth/deluxe/?action=lost">here</a>!</td></tr>
<tr><td colspan=2>Not member yet? Click <a href="netfilmes.bl.ee/registro">here</a> to register.</td></tr>
</table>
</form>
</div></div></div>

    
</body>
</html>

var mobile_timer = false,viewport = document.getElementById('viewport');
    if(navigator.userAgent.match(/iPhone/i)) {
        viewport.setAttribute('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
        WINDOW.addEventListener('gesturestart',function () {
            clearTimeout(mobile_timer);
            viewport.setAttribute('content','width=device-width,minimum-scale=1.0,maximum-scale=10.0');
        },false);
        window.addEventListener('touchend',function () {
            clearTimeout(mobile_timer);
            mobile_timer = setTimeout(function () {
                viewport.setAttribute('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
            },1000);
        },false);
    }
    var mobile_timer = false;
if(navigator.userAgent.match(/iPhone/i)) {
    $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
    $(window).bind('gesturestart',function () {
        clearTimeout(mobile_timer);
        $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=10.0');
    }).bind('touchend',function () {
        clearTimeout(mobile_timer);
        mobile_timer = setTimeout(function () {
            $('#viewport').attr('content','width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0');
        },1000);
    });
}
<meta name="viewport" id="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=10.0,initial-scale=1.0" />
 $(document).ready(function(), {
                      $("#main").fadeOut("slow")
                    });






