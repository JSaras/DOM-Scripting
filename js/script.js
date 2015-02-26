function onLoadEvent(func) {
    var onload = window.onload;
    if(typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newEl, targetEl) {
    var parent = targetEl.parentNode;
    if(parent.lastChild == targetEl) {
        parent.appendChild(newEl);
    } else {
        parent.insertBefore(newEl, targetEl.nextSibling);
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", placeholder);
    placeholder.setAttribute("src", "images/DSC_0240.jpg");
    placeholder.setAttribute("alt", "my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");

    description.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description.placeholder);
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;
    placeholder.setAttribute("src", source);
    console.log(whichpic);

    if (!document.getElementById("description")) return false;
    var text = whichpic.getAttribute("title") ?
    whichpic.getAttribute("title") : "No Description";
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
    	description.firstChild.nodeValue = text;
    }
    return false;
	
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}

// window.onload = countBodyChildren;

// function countBodyChildren() {
// 	var body_element = document.getElementsByTagName("body")[0];


// 	console.log(body_element.nodeType);
// }
