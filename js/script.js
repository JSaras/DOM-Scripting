window.onload = prepareGallery;


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
