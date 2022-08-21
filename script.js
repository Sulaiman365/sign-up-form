const check = function()
{
    const password = document.getElementById("pwd").value;
    const confirmPassword = document.getElementById("confirm-pwd").value;
    if (password != confirmPassword)
{
    document.getElementById("message").innerHTML = "*Passwords do not match";
    document.getElementById("message").style.color = 'red';
    document.getElementById("pwd").style.borderColor = "red";
    document.getElementById("confirm-pwd").style.borderColor = "red";
}
else{
    document.getElementById("message").innerHTML = "Match";
    document.getElementById("message").style.color = 'green';
    document.getElementById("pwd").style.borderColor = "black";
    document.getElementById("confirm-pwd").style.borderColor = "black";
}
}