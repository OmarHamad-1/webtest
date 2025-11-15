// greetings.js - small reusable module
function greet(name) {
  return `Hello, ${name}!`;
}

function timeOfDayGreeting(name) {
  const hour = new Date().getHours();
  const part = hour < 12 ? 'morning' : hour < 18 ? 'afternoon' : 'evening';
  return `Good ${part}, ${name}!`;
}

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

module.exports = { greet, timeOfDayGreeting, sum };
