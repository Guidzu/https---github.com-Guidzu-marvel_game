const Mysterio = document.querySelector('.Mysterio')
const okButton = document.querySelector('.okButton')
const name = document.querySelector('.name')
const text = document.querySelector('.text')
const Fury = document.querySelector('.Fury')
const imgdialogue = document.querySelector('.imgdialogue')


let i = 0;
    okButton.addEventListener('click', (event)=>{
        i++;
        function dialogue(){
            switch(i){
                case 1:
                    text.innerHTML = "Many things have changed since the \'BLINK\' . Some criminals get rehabilitated, like Mysterio here.";
                break;
                case 2:
                    Fury.classList.add('imgHidden');
                    Mysterio.classList.remove('imgHidden');
                    name.innerHTML = "MYSTERIO";
                    text.innerHTML = "Hello Agent, hope you don't mind our previous encounters. Thanks to the S.H.I.E.L.D, you and Hawkeye will be the very firsts to test Mysterio's workout hologram.";
                break;
                case 3:
                    imgdialogue.classList.add('imgHidden');
                break;
            }
        }
        dialogue()
    });



