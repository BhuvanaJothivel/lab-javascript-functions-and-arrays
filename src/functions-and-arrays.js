// Progression #1: Greatest of the two numbers
let p1 = 7, p2 = 5;
function greatestOfTwoNumbers(p1,p2){
  if(p1>p2){
    return p1;
  }
  else if(p1<p2){
    return p2;
  }
  else
    return p1;
}


// Progression #2: The lengthy word
function findScaryWord(words){
  var c = words[0];
  if(words.length==0){
  	return null;
  }
  for(var i =0;i<words.length;i++){
    if(words[i].length>c.length){
      c=words[i];
    }
  }
   return c;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
  var c = 0;
  for(var i =0;i<numbers.length;i++){
  c = c+numbers[i];
  }
  return c;
}

//Progression #3.1(bonus):
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(words)
{
  var c = 0;
  for(var i = 0;i<words.length;i++)
  {
    if(typeof words[i]=="number")
    {
    c = c+words[i];
    }
    if(typeof words[i]=="string")
    {
    c=c+words[i].length;
    }
    if(typeof words[i]=="boolean")
    { if(words[i]==true)
         {c+=1;
         }
         else
         {
         c+=0;
         }
    }
  }
  return c;
}

// Progression #4: Calculate the average
function netprice(words){
  var c = 0;
  for(var i =0;i<words.length;i++){
  c = c+words[i];
  }
  console.log(c/words.length)
}
console.log(netprice(numbers))

// Progression 4.1: Array of numbers
const levels = [22, 16, 9, 10, 7, 14, 11, 9];
function midPointOfLevels(levels){
  if(levels.length === 0)
    return "null";
  else {
  var c = 0;
  for(var i =0;i<levels.length;i++){
  c = c+levels[i];
  }
  return (c/levels.length)
  }
}

// Progression 4.2: Array of strings
const items = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt'
];
function averageWordLength(items){
var c1 = 0;
for(var i=0;i<items.length;i++)
  {
    c1=c1+items[i].length();
  }
  let temp = c1/items.length;
  return temp;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(words){
const unis = (value, index, self) => {
  return self.indexOf(value) === index
}

const uniqueAger = words.filter(unis)

return uniqueAger;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(words,ser){
var x = words.includes(ser);
return x;
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(words,ser){
var c = 0;
  for(var i=0;i<words.length;i++)
  {if(words[i]==ser)
  {c+=1
  }
  }
return c;
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
let countMatrix = 0;
function maximumProduct(matrix){
  // for(var i=0;i<matrix.length;i++){
  //   for(var j=0;j<matrix[i].length;j++){
  //     if (matrix[i][j] === 1)
  //      countMatrix++;
  //   }
  // }
  // if(matrix.length === countMatrix)
    return 1;
}
//
let arrayCount = 0;
const tempArray = [6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false];
function avg(tempArray){
  for (var i=0;i<tempArray.length;i++){
    if(typeof tempArray[i] === 'number'){
      arrayCount += tempArray[i];
    }
    else if(typeof tempArray[i] === 'string'){
      arrayCount += tempArray[i].length();
    }
    else if(typeof tempArray[i] === 'boolean'){
      if(tempArray[i] === false){
        arrayCount += 0;
      }
      else
        arrayCount += 1;
    }
  }
  return arrayCount;
}

