import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTextField } from '@material/textfield';
// import { MDCTextFieldIcon } from '@material/textfield/icon';

(() => {
    // Instantiation
    const topAppBarElement = document.getElementById('top-bar');
    const topAppBar = new MDCTopAppBar(topAppBarElement);

    const twitterHandleTextField = new MDCTextField(document.querySelector('.mdc-text-field'));

    // const icon = new MDCTextFieldIcon(document.getElementById('search-twitter-handle'));
    document.getElementById('search-twitter-handle').addEventListener('click', () => {
        // clean up the tweets first
        let tweetsContainer = document.getElementById('favorite-tweets');
        while (tweetsContainer.firstChild) {
            tweetsContainer.removeChild(tweetsContainer.firstChild);
        }

        loadTweets(twitterHandleTextField.value);
    });
})();

function loadTweets(twitterHandle) {
    fetch(`/api/twitter/${twitterHandle}/favorites`)
        .then((response) => response.json())
        .then((tweets) => {
            // get the tweet container
            let tweetsContainer = document.getElementById('favorite-tweets');

            // only process 10 latest tweets
            tweets.forEach((tweet) => {
                let tweetCard = document.createElement('div');
                tweetCard.className = 'mdc-card tweet-card';

                let tweetAuthor = tweet.user.name;
                let tweetSource = tweet.source;
                let tweetBody = tweet.text;

                let content = `
                        <div class="heading__primary">
                            <h2 class="tweet-title mdc-typography mdc-typography--headline6">${tweetAuthor}</h2>
                            <h4 class="tweet-author mdc-typography mdc-typography--subtitle2">${tweetSource}</h4>
                        </div>
                        <div class="body__secondary mdc-typography mdc-typography--body2">
                            ${tweetBody}
                        </div>
                `;

                tweetCard.innerHTML = content;
                tweetsContainer.appendChild(tweetCard);
            });
        })
        .catch((error) => console.error(error));
}