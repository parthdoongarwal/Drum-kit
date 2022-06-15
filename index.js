function sound(s ,  id){
    const snd = new Audio(s); // buffers automatically when created
    snd.play();
     const element = document.getElementById(id)
     element.classList.add("big");

     setTimeout(() => {
        element.classList.remove("big");
     } , 100)
     
}



document.addEventListener("keyup" , (e) => {
    if(e.key == "e"){
       sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav" , "fe")
    }
    if(e.key == "r"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav" , "fr")
    }
    if(e.key == "f"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav" , "ff")
    }
    if(e.key == "g"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav" , "fg")
    }
    if(e.key == "h"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav" , "fh")
    }
    if(e.key == "v"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav" , "fv")
    }
    if(e.key == "b"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav" , "fb")
    }
    if(e.key == "j"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav" , "fj")
    }
    if(e.key == "i"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav" , "fi")
    }
    if(e.key == "k"){
        sound("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav" , "fk")
    }
    
})