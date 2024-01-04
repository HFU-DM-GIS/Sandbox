const dot = {
  x: 100,
  y: 100,
  size: 40,
  color: 'black',
};

for (let [key, value] of Object.entries(dot)) {
  console.log(`${key} is ${value}`);
}