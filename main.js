Webcam.attach("#camera");
camera=document.getElementById("camera")

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

function p(){
    Webcam.snap(function(uri){
document.getElementById("result").innerHTML='<img id="s1" src="'+uri+'"/>';
    });

}
console.log("ml5 version",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vihga4yDL/model.json',model);

function model(){
    console.log("model loaded");
}

function s(){
o=document.getElementById("s1");
x.classify(o,gotresult);
}

function gotresult(error,results){
if (error) {
  console.log(error); 
}
else{
    console.log(results);
    document.getElementById("q").innerHTML=results[0].label;
    document.getElementById("r").innerHTML=results[0].confidence.toFixed(3);
}
}

