let typeName = () => {
    let name = document.getElementById("textbox").value;
    document.getElementById("message").innerHTML = "Hi " + name;
    document.getElementById("image").src = "https://www.shutterstock.com/image-vector/happy-birthday-greeting-card-clipart-600nw-2557598275.jpg";
    document.getElementById("background").style.backgroundImage = "url(background.jpg)";
    document.getElementById("background").style.backgroundRepeat = "no-repeat"
    document.getElementById("background").style.backgroundSize = "100% 100%"
    
}

let wishUser = () => {
    let name = document.getElementById("textbox").value;
    document.getElementById("message").innerHTML = "Merry Christmas " + name;
    document.getElementById("image").src = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/merry-christmas%2C-christmas-card-design-template-2283f3eacbb70fbcf77273fdcb2f7fd7_screen.jpg?ts=1670642657";
    document.getElementById("background").style.backgroundImage = "url(https://thumbs.dreamstime.com/b/falling-snowflakes-winter-wonderland-sparkling-gently-fall-against-bright-blue-sky-creating-magical-scene-fresh-white-403877393.jpg)";
    document.getElementById("background").style.backgroundRepeat = "no-repeat"
    document.getElementById("background").style.backgroundSize = "100% 100%"
}



document.getElementById("bttn").addEventListener("click", typeName);
document.getElementById("greet").addEventListener("click", wishUser);