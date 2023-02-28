const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const hours = new Date().getHours();
const dayParts = ['night', 'morning', 'afternoon', 'evening']
const body = document.body;
let randomNum;
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');



function showTime() {
	const currentTime = new Date().toLocaleTimeString();
	time.textContent = currentTime;
	showDate()
	getTimeOfDay()
	showGreeting()
	setTimeout(showTime, 1000);
}
showTime();

function showDate() {
	const options = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'Europe/Minsk' };
	const currentDate = new Date().toLocaleDateString('en-En', options);
	date.textContent = currentDate;
}
function getTimeOfDay(hours) {
	if (Math.floor(hours / 6) == 0) {
		return dayParts[0];
	}
	if (Math.floor(hours / 6) == 1) {
		return dayParts[1];
	}
	if (Math.floor(hours / 6) == 2) {
		return dayParts[2];
	}
	if (Math.floor(hours / 6) == 3) {
		return dayParts[3];
	}
}
function showGreeting() {
	greeting.textContent = `Good ${getTimeOfDay(hours)}, `;
}
function getRandomNum(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}
randomNum = getRandomNum(1, 20)

slideNext.addEventListener('click', getSlideNext)
function getSlideNext() {
	if (randomNum < 21) {
		randomNum += 1
	}
	if (randomNum > 20) {
		randomNum = 1
	}
	setBg()
}

slidePrev.addEventListener('click', getSlidePrev)
function getSlidePrev() {
	if (randomNum >= 1) {
		randomNum--
	}
	if (randomNum < 1) {
		randomNum = 20
	}
	setBg()
}
function setBg() {
	const timeOfDay = getTimeOfDay(hours);
	const bgNum = randomNum.toString().padStart(2, "0")
	const img = new Image();
	img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
	img.onload = () => {
		body.style.backgroundImage = `url(${img.src})`
	};
}
setBg()



