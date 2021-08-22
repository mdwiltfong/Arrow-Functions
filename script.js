let arr=[1,2,3,4];

/*function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}*/



//refactored code
const double=(arr)=>arr.map((val)=>val*2)

console.log(double(arr))


function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }