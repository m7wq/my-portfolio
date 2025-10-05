
// Clipboard

const copyButtons = document.querySelectorAll("#contact div .copy");

const Style = {
    CHECK_MARK: "assests/check-circle.png",
    CLIPBOARD: "assests/copy-alt.png"
}

const Visibility = {
    VISIBLE: 1,
    UNVISIIBLE: 0
    
}

function notify() {
    const main = document.getElementById("pop-message");
    const message = main.cloneNode(true);

    message.id = '';
    message.style.opacity = "0";
    message.style.transition = "transform 0.5s ease, opacity 0.3s ease";

    document.body.appendChild(message);

    setTimeout(() => {
        message.style.transform = "translateY(-30px)";
        message.style.opacity = "1";
    }, 10); // So everything is ready up

    setTimeout(() => {
        message.style.transform = "translateY(30px)";
        message.style.opacity = "0";

       setTimeout(() => {
         document.body.removeChild(message);
       }, 600);
    }, 1500);
}

copyButtons.forEach(copyButton => {
    
    function setOpacity(visibility) {
        copyButton.style.opacity = visibility;
    }

    function setStyle(style){
        copyButton.src = style;
    }

    copyButton.style.transition = "opacity 0.2s ease";

    let clicked = false;

    copyButton.addEventListener('click', () =>{

        if(clicked)
            return;

        clicked = true;

        setOpacity(Visibility.UNVISIIBLE);

        setTimeout(() => {
            setStyle(Style.CHECK_MARK);
            setOpacity(Visibility.VISIBLE);
            notify()
        }, 350);

        navigator.clipboard.writeText(copyButton.alt);

        setTimeout(() => {
            
            setOpacity(Visibility.UNVISIIBLE);
            

            setTimeout(() => {
                setStyle(Style.CLIPBOARD);
                setOpacity(Visibility.VISIBLE);
                clicked = false;
            }, 350);

        }, 1000);
        

    });

})
