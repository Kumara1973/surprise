let typeName = () => {
    let name = document.getElementById("textbox").value;
    document.getElementById("message").innerHTML = "Hi " + name;
    
}

document.getElementById("bttn").addEventListener("click", typeName)