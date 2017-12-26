var everytime = require('@shubhodeep9/everytime')()
// simple usage
console.log(everytime.getTime(82.5644)) // prints time as a Date object eg: 2017-12-26T23:03:28.402Z

// formatting
console.log(everytime.getTime(82.5644, true)) // prints time as Date string eg: 'Wed, 27 Dec 2017 04:33:28 GMT'