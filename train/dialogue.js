const Mysterio = document.querySelector('.Mysterio')
const okButton = document.querySelector('.okButton')
const name = document.querySelector('.name')
const text = document.querySelector('.text')
const Fury = document.querySelector('.Fury')
const imgdialogue = document.querySelector('.imgdialogue')



    okButton.addEventListener('click', (event)=>{
        text.innerHTML = "Many things have changed since the \'BLINK\' . Some criminals get rehabilitated, like Mysterio here."
        window.setTimeout(function(){
            Fury.classList.add('imgHidden')
            Mysterio.classList.remove('imgHidden')
            name.innerHTML = "MYSTERIO"
            text.innerHTML = "Hello Agent, hope you don't mind our previous encounters. Thanks to the S.H.I.E.L.D, you will be the very first to test Mysterio's workout hologram."
            },6000)
        window.setTimeout(function(){
            imgdialogue.classList.add('imgHidden')
            },15000)
    });



