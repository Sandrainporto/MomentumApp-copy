const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');

changeQuoteBtn.addEventListener('click', () => {getQuotes()});

function getQuotes() {
	const quotes = './data.json';
	fetch(quotes)
		.then(res => res.json())
		.then(data => { 
	
	const min = 0;
	const max = data.length - 1;
	const item = getRandomNum (min, max);

	quote.textContent = `${data[item].text}`;
	author.textContent = `${data[item].author}`
      });
}
getQuotes();