const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += " #david #sns #js";

  const encodedText = encodeURIComponent(tweetText);
  // 컴퓨터가 이해할 수 있는 언어로 인코딩해줌
  console.log(encodedText);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
