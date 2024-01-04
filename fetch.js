function requestTextWithGET(url) {
    const promise = fetch(url);
    promise.then(fetchSucceeded).then(responseTextJSON).catch(catchedSomething);
  }
  
  function fetchSucceeded(response) {
    console.log('Response', response.statusText); // complete Response object
    if (response.status != 200) {
        console.error("URL status not ok.")
    }
    return response.text();
  }
  
  function responseTextSucceeded(text) {
    console.log(text); // Text from Response body
  }

  function responseTextJSON(text) {
    let answer = JSON.parse(text);
    console.log(answer.value);
  }

  function catchedSomething(error) {

    console.error("There was an error:", error);
  }
  
//requestTextWithGET('http://127.0.0.1:3000');
requestTextWithGET('https://api.chucknorris.io/jokes/random');