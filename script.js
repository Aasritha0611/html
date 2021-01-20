function validate()
{

	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;

	if(username=="1"&&password=="2") {
		return true;
	} else {

		alert("Login failed");
		return false;
}

}
