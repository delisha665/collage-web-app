Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 recognition=new window.webkitSpeechRecognition();
function start() {
    Webcam.attach( '#camera' );
}
function change_layout(){
    document.getElementById("picture1").style.height="300px";
    document.getElementById("picture3").style.width="1000px";
    document.getElementById("picture3").style.marginLeft="300px";
    }