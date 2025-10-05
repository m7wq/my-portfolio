const sections = document.querySelectorAll(".contact-sections img");

sections.forEach(section =>{
    section.addEventListener('click', () =>{
        document.getElementById(section.alt).scrollIntoView();
    });
});