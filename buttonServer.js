async function requestTextWithGET(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  }
  
  const answer = document.getElementById('answer');
  const button = document.getElementById('button');
  button.addEventListener('click', getAndAttachText);
  const searchItem = document.getElementById('searchItem');
  
  async function getAndAttachText(event) {
    const text = document.createElement('h1');
    text.textContent = await requestTextWithGET(
      'http://localhost:3000/search?item=' + searchItem.value
    );
    answer.appendChild(text);
  }