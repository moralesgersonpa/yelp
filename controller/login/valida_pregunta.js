function loadXMLDoc1()
{
var xmlhttp;

var n=document.getElementById('buscar1').value;

if(n==''){
document.getElementById("myDiv1").innerHTML="";
return;
}

if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
document.getElementById("myDiv1").innerHTML=xmlhttp.responseText;
}
}
xmlhttp.open("POST","../controller/login/valida_pregunta.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("q="+n);
}