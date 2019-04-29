const newQuote = document.querySelector('.newQuote');

const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};

const displayQuote = () => {
  let quote = getRandomQuote();
  let quoteHtml = '';
  let authorHtml = '';

  quoteHtml += `"${quote.quote}"`;
  authorHtml += `— ${quote.author}`;

  document.querySelector('.quoteText').innerHTML = quoteHtml;
  document.querySelector('.quoteAuthor').innerHTML = authorHtml;
};

displayQuote();

newQuote.addEventListener('click', () => {
  displayQuote();
});
