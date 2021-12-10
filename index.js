function clearScreen(){
  document.getElementById("result").value = "";
}
function sakshi(value){
  let res = document.getElementById("result");
  if(res.value=="undefined"){
    res.value = "";
  }
  res.value +=value;
}
document.addEventListener('keydown',function(event){
  playSound(event.key);
});

function playSound(character){
  var song1=new Audio('songs/crash.mp3')
  song1.play();
}
