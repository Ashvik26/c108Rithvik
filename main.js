function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lSgocWJLZ/model.json",modelready);
}
function modelready() {
classifier.classify(gotresults);
}
function gotresults(error,results) {
if(error){
console.error(error);
}
else{
console.log(results);
randomnumberr=Math.floor(Math.random()* 255)+1;
randomnumberg=Math.floor(Math.random()* 255)+1;
randomnumberb=Math.floor(Math.random()* 255)+1;
document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
document.getElementById("result_confidence").innerHTML="Accuracy:"+(results[0].confidence * 100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+")";
document.getElementById("result_confidence").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+")";
img1=document.getElementById("charecter_1");
img2=document.getElementById("charecter_2");
img3=document.getElementById("charecter_3");
img4=document.getElementById("charecter_4");
if(results[0].label=="bell"){
img1.src="i1.gif";
img2.src="i2.png";
img3.src="i3.png";
img4.src="i4.png";
}
else if(results[0].label=="clap"){
img1.src="i1.png";
img2.src="i2.gif";
img3.src="i3.png";
img4.src="i4.png";
}
else if(results[0].label=="roar"){
img1.src="i1.png";
img2.src="i2.png";
img3.src="i3.gif";
img4.src="i4.png";
    }
else{
img1.src="i1.png";
        img2.src="i2.png";
        img3.src="i3.png";
        img4.src="i4.gif";
            }
}
}