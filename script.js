const quotes = [
    {
        quote: `"Technology is best when it brings people together."`,
        author: "Matt Mullenweg"
    },
    {
        quote: `"It has become appallingly obvious that our technology has exceeded our humanity."`,
        author: "Albert Einstein"
    },
    {
        quote: `"It is only when they go wrong that machines remind you how powerful they are"`,
        author: "Clive James"
    },
    {
        quote: `"If it keeps up, man will atrophy all his limbs but the push-button finger."`,
        author: "Frank Lloyd Wright"
    },
    {
        quote: `"Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road"`,
        author: "Stewart Brand"
    },
]

let btn = document.querySelector('#btn')
let quote = document.querySelector('#quote')
let author = document.querySelector('#author')

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[random].quote
    author.innerHTML = quotes[random].author
})