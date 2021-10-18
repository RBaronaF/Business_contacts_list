/*
File name : Scripts/app.js
Student’s Name : Ricardo Barona
StudentID : 301165198
Date : 2021-09-29
*/

// IIFE -- Immediately Invoked Function Expression
(function() {

    function Start() {
        console.log("App Started...");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons) {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?"))  {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();