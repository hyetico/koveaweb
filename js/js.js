$(function(){

 $("#bgndVideo").YTPlayer({
  videoURL:'xvRXvVNeIiY',
  containment:'self',
  autoPlay:true, //자동으로 재생 
  mute:true,
  startAt:0,
  opacity:1,
  showControls:false, 
  playOnlyIfVisible: true, //영상이 멈춰있다가 재생해줌.
});


})//fucntion end