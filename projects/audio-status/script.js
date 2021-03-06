const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
const background=document.querySelector('body');
// Song titles
const songs = ['دعاء اليوم', 'سورة الكهف'];

function liveBackground(x){

	background.style.backgroundImage=`linear-gradient(
		${2*x}deg,
	    rgb(180, 151, 204) 23.8%,
    rgb(138, 33, 124) 92%`
		
	}


	function toggle(){
		pauseSong()
        var popvid=document.querySelector('.popup')
        var overlay=document.querySelector('.overlay')
        overlay.classList.toggle('active')
        popvid.classList.toggle('active')
    }

	function closeVideo(){
		var popvid=document.querySelector('.popup')
		var overlay=document.querySelector('.overlay')
		overlay.classList.toggle('active')
		popvid.classList.toggle('active')
		document.getElementById('myFrame').src='';

	}
// Keep track of song
let songIndex = 0;



// Update song details
loadSong=(song)=>{
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/img.jpg`;
}

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Play song
 playSong=()=> {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
}

// Pause song
pauseSong=()=> {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
prevSong=()=> {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
var change=50;
//get duration & currentTime for Time of song
function DurTime (e) {
	
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;
	

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	 
	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
				
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  isPlaying? pauseSong(): playSong()
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
// Time/song update
audio.addEventListener('timeupdate', updateProgress);
// Click on progress bar
progressContainer.addEventListener('click', setProgress);
// Song ends
audio.addEventListener('ended', nextSong);
// Time of song
audio.addEventListener('timeupdate',DurTime);
