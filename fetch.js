function requestTextWithGET(url) {
    const promise = fetch(url);
    promise.then(fetchSucceeded).then(responseTextSucceeded).catch(catchError);
  }
  
  function fetchSucceeded(response) {
    console.log('Response', response); // complete Response object
    return response.text();
  }
  
  function responseTextSucceeded(text) {
    console.log(text); // Text from Response body
  }

  function catchError() {
    console.log("Something went wrong.");
  }
  
  requestTextWithGET('https://uhahne.gitskjdghub.io/GIS/test.txt');