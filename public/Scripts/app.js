
//IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION

/*Assignment 1, Section 008, Nanjin Wang, 301243786, October 2nd, 2022*/

(function(){
    function Start(){
        console.log("App started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons){
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sue to delete?"))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load",Start);
})();