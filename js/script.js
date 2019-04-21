// GET THE REFERENCES
const container = document.getElementById("main-content");
const links = document.getElementsByTagName("a");
let url = "partials/home-page.html";

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
const loadContent = function(url){
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                container.innerHTML = this.responseText;
            }
        };
    xhttp.open("GET", url, true);
    xhttp.send();
}

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
const selectContent = function(e){
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    e.preventDefault();
    
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    
   url = e.target.getAttribute("href");
    
   // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
    loadContent(url);
    
}

for (var i=0;i<links.length;i++){
    links[i].addEventListener("click", selectContent);
}
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
