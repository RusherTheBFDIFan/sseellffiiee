var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie"){
        console.log("taking selfie---");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 3 seconds!"
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera); 

    setTimeout(function(){
        takesnapshot();
        savesnapshot();
    },3000);   
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function savesnapshot(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
