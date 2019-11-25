document.addEventListener("DOMContentLoaded", () => {
    const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
    const quoteBtn = document.querySelector('#quote');
    quoteBtn.addEventListener('click', getQuote);

    const quoteParagraph = document.getElementById('singleQuote');
    const tweetBtn = document.getElementById('tweet')
    let singleQuote = "";

    function getQuote() {
        fetch(url).then(res => {
                return res.json();
            })
            .then(data => {
                quoteParagraph.innerText = data.message;
                console.log(data.message);
                tweetBtn.setAttribute('href', `https://twitter.com/share?text=${data.message}`);


            })
    }

});