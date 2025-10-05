const buttons = document.querySelectorAll("#links #links-buttons button");

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        window.open(button.className, '_blank');
    });
});