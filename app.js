let btn = document.querySelector("#new-quote");

let quote = document.querySelector(".quote");

let person = document.querySelector(".person");
console.log("hello");
const quotes = [
  {
    quote: `“Show me a family of readers, and I will show you the people who move the world.”`,
    person: `~Napoleon Bonaparte`,
  },
  {
    quote: `"Money and success don’t change people; they merely amplify what is already there."`,
    person: `~ Will Smith`,
  },
  {
    quote: `"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking." `,
    person: `~ Seneca`,
  },
  {
    quote: `"Not how long, but how well you have lived is the main thing.”`,
    person: `~ Steve Jobs`,
  },
  {
    quote: `“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.`,
    person: `~ Leo Burnett`,
  },
  {
    quote: ` “Life is not a problem to be solved, but a reality to be experienced.”`,
    person: `~ Soren Kierkegaard`,
  },
  {
    quote: `"When we do the best we can, we never know what miracle is wrought in our life or the life of another."`,
    person: `~ Helen Keller`,
  },
  {
    quote: `"The best portion of a good man's life is his little nameless, unencumbered acts of kindness and of love."`,
    person: `~ Wordsworth`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
