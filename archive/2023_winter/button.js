async function requestTextWithGET(url) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  }
  
  const attach = document.getElementById('attach');
  const button = document.getElementById('button');
  button.addEventListener('click', getAndAttachText);
  const color = document.getElementById('color');
  color.addEventListener('input', changeTextColor);
  
  async function getAndAttachText(event) {
    const paragraph = document.createElement('p');
    paragraph.textContent = await requestTextWithGET(
      'https://uhahne.github.io/GIS/test.txt'
    );
    attach.appendChild(paragraph);
  }
  
  function changeTextColor(event) {
    attach.style.color = event.target.value;
  }