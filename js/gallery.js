window.onload = addTabFocus;

function upDate(previewPic) {
    console.log("Mouse over or focus triggered");
    console.log("Image Source:", previewPic.src);
    console.log("Alt Text:", previewPic.alt);
    
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Mouse out or blur triggered");
    
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Adding tabindex attribute to images");
    let images = document.querySelectorAll(".preview");
    
    for (let img of images) {
        img.setAttribute("tabindex", "0");
        img.addEventListener("mouseover", function() { upDate(this); });
        img.addEventListener("mouseout", function() { unDo(); });
        img.addEventListener("focus", function() { upDate(this); });
        img.addEventListener("blur", function() { unDo(); });
    }
}
