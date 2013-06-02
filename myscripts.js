/**
 * @author Pascal
 */

function getXMLHttpRequest() {
    var xhr = null;
     
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
     
    return xhr;
}


function request(callback, containerNode) {
    var xhr = getXMLHttpRequest();
     
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            callback(xhr.responseText, containerNode);
        }
    };
     
    xhr.open("GET", "main.py/get_info", true);
	xhr.setRequestHeader("Content-Type", "text/plain");  
    xhr.send("3");
}
 
MyCounter = 1;
function readData(sData, containerNode) {
    // On peut maintenant traiter les données sans encombrer l'objet XHR.
    //alert(sData);

	MyCounter *= parseInt(sData);
	containerNode.nodeValue  = MyCounter.toString();

}
 

function MyRefresh(containerNode)
{
	//alert(containerNode.nodeValue);

	request(readData, containerNode);	
	
}
