prediction_1 = "";
prediction_2 = "";

Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function Takesnapshot()
{
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML = '<img id="captureimage" src= "' +data_uri+' "/>'
  });
  
  console.log('ml5version', ml5.version );
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lOlzLc3AL/model.json',modelloaded); 
  
  function modelloaded()
  {
    console.log('modelloaded');
  }

}

function speak() 
{
  synth = window.speechSynthesis;
  data_1 = "the first prediction is " + prediction_1;
  data_2 = "the second prediction is " + prediction_2;
var utterthis = new SpeechSynthesisUtterance(data_1 + datda_2);
synth.speak(utterthis);


}

function check()
{
  img = document.getElementById("captureimage");
  classifier.classify(img,);

}

function got_Result(error,results)
{
  if (error)
  {
     console.log(error);
  }

  else
  {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name_2").innerHTML = results[1].label;
    prediction_1 = result[0].label;
    prediction_2 = result[1].label;

    speak() 
  
    if (results[0].label == "happy")
    {
        document.getElementById("result_emoji").innerHTML = "&#128522;" ;
    }

    if (results[0].label == "sad")
    {
        document.getElementById("result_emoji").innerHTML = "&#128532;" ;
    }

    if (results[0].label == "angry")
    {
        document.getElementById("result_emoji").innerHTML = "&#128548;" ;
    }

    if (results[0].label == "surprise")
    {
        document.getElementById("result_emoji").innerHTML = "https://code.whitehatjr.com/s/joinClass#:~:text=quickdraw.withgoogle.com/-,%F0%9F%98%AE,-Teacher%20To%20You;" ;
    }

    if (results[1].label == "happy")
    {
        document.getElementById("result_emoji").innerHTML = "&#128522;" ;
    }

    if (results[1].label == "sad")
    {
        document.getElementById("result_emoji").innerHTML = "&#128532;" ;
    }

    if (results[1].label == "angry")
    {
        document.getElementById("result_emoji").innerHTML = "&#128548;" ;
    }

    if (results[1].label == "surprise")
    {
        document.getElementById("result_emoji").innerHTML = "https://code.whitehatjr.com/s/joinClass#:~:text=quickdraw.withgoogle.com/-,%F0%9F%98%AE,-Teacher%20To%20You;" ;
    }



  }

}