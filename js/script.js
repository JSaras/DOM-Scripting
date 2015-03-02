addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(displayAbbreviations);

function addLoadEvent(func) {
    var oldonload = window.onload;
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

    var placeholder         = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/DSC_0240.jpg");
    placeholder.setAttribute("alt", "my image gallery");

    var description         = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext            = document.createTextNode("Choose an image");

    description.appendChild(desctext);

    var gallery             = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;

    var source              = whichpic.getAttribute("href");
    var placeholder         = document.getElementById("placeholder");

    if (placeholder.nodeName != "IMG") return true;

    placeholder.setAttribute("src", source);
    console.log(whichpic);

    if (!document.getElementById("description")) return false;

    var text = whichpic.getAttribute("title") ?
    whichpic.getAttribute("title") : "No Description";

    var description          = document.getElementById("description");
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
    var links   = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}

function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

    var abbreviations = document.getElementsByTagName('abbr');

    if (abbreviations.length < 1) return false;

    var defs = new Array();

    for (var i = 0; i < abbreviations.length; i++) {
        var definition      = abbreviations[i].getAttribute('title');
        var key             = abbreviations[i].lastChild.nodeValue;

        defs[key]           = definition;
    };

    var dlist               = document.createElement('dl');

    for (key in defs) {
        var definition      = defs[key];
        var dtitle          = document.createElement('dt');
        var dtitle_text     = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc           = document.createElement('dd')  ;
        var ddesc_text      = document.createTextNode(definition);

        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    var header              = document.createElement('h2');
    var header_text         = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

// window.onload = countBodyChildren;

// function countBodyChildren() {
// 	var body_element = document.getElementsByTagName("body")[0];


// 	console.log(body_element.nodeType);
// }
