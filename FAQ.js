function main() {
    "use strict";
    
    //Get customer's name
    var customerName = document.getElementById("name").submit();
     alert ("Hello, " + customerName);
    
    //Display the customer status
    if(document.getElementById('firstYes').checked){
        alert ("Hello, " + customerName + ", Welcome To Amazeriffic!");
    }
    else if (document.getElementById('firstNo').checked){
        alert ("Hello, " + customerName + ", Thank you so much for using our service!");
    }
}
$(document).ready(main);  