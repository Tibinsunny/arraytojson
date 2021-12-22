# ArraytoJson
A better way to convert Array to JSON.

## Install
```
npm install arraytojson
```

## Usage
```
const arraytojson = require("arraytojson");

let testArray = [1,2,3];
arraytojson.toJson(testArray);
// => { element0: 1, element1: 2, element2: 3 }

let rules =["first","second","third"];
arraytojson.toJsonStrict(testArray,rules)

// => { first: 1, second: 2, third: 3 }
```
## API

### toJson(array)
Converts the given array to json with default keys(element1,element2,element3 etc...). 

### toJsonStrict(array,rules)
Converts the array to json based on the rules. Rules are basically keys to the json. 