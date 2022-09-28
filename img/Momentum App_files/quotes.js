const quotes = [
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    author: "Carol Burnett"
  },
  {
    quote: "You define your own life. Don't let other people write your script.",
    author: "Oprah Winfrey"
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "Malala Yousafzai"
  },
  {
    quote: "Fall 7 times, stand up 8.",
    author: "Japanese Proverb"
  },
  {
    quote: "Success is a state of mind. If you want success, start thinking of yourself as a success.",
    author: "Joyce Brothers"
  },
  {
    quote: "A year from now you may wish you had started today.",
    author: "Karen Lamb"
  },
  {
    quote: "Light tomorrow with today.",
    author: "Elizabeth Barrett Browning"
  },
  {
    quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    author: "Earl Nightingale"
  },
  {
    quote: "Believe you can and you're halfway there",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;  