const url = new URL('https://www.google.com/search?q=url+api');
//url = new URL("https://www.beispiel.de:8000/pfad1/pfad2?param1=1&param2=2#elementId");
//url = new URL("https://localhost:3000/");
//url = new URL("https://de.wikipedia.org/wiki/Uniform_Resource_Locator#Aufbau");
console.log(url);
console.log(url.href); // https://www.google.com/search?q=url+api
console.log(url.protocol); // https:
console.log(url.hostname); // www.google.com
console.log(url.port); //
console.log(url.pathname); // /search
console.log(url.search); // ?q=url+api
console.log(url.searchParams.get('q')); // url api
url.searchParams.forEach((value, key) => {
  console.log(key + ': ' + value); // q: url api
});
console.log(url.hash); //