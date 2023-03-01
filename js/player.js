import playList from './playList.js';

const playBtn = document.querySelector('.play');
const nextSong = document.querySelector('.play-next');
const prevSong = document.querySelector('.play-prev');
let playNum = 0;
let isPlay = false;
const audio = new Audio();
const playListContainer =document.querySelector('.play-list')


playList.forEach(item => {
	const li = document.createElement('li')
	li.classList.add('track');
	li.textContent = item.title;
	playListContainer.append(li);
	li.addEventListener('click', () => { playTrack(item) })
})
function playTrack(item) { 
	playNum = playList.indexOf(item);
	audio.src = playList[playNum].src;
	audio.currentTime = 0;
	playBtn.classList.remove('play');
	isPlay = true;
	audio.play();
	playBtn.classList.add('pause');
}

playBtn.addEventListener('click', playAudio);
function playAudio() {
	audio.src = playList[playNum].src;
	audio.currentTime = 0;
	if (!isPlay) {
		isPlay = true
		audio.play()
	}
	else {
		isPlay = false;
		audio.pause();
	}
	playBtn.classList.toggle('play');
	playBtn.classList.toggle('pause');
}

nextSong.addEventListener('click', playNext);
function playNext() {
	if (playNum < playList.length) {
		playNum += 1;
	}
	if (playNum == playList.length) {
		playNum = 0;
	}
	playNPtrack();
};

prevSong.addEventListener('click', playPrev);
function playPrev() {
	if (playNum <= 0) {
		playNum = playList.length - 1;
	} else {
		playNum = Math.abs(playNum - 1);
	}
	playNPtrack();


};

function playNPtrack() {
	audio.src = playList[playNum].src;
	audio.currentTime = 0;
	playBtn.classList.remove('play');
	isPlay = true;
	audio.play();
	playBtn.classList.add('pause');

}
