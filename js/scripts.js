var a,
    h;

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(14, 28);
var triangle3Area = getTriangleArea(20, 45);

function getTriangleArea(a, h) {
  
  if (a <= 0 || h <= 0) {
  	return false;
  }

  else {
  	console.log('wynik' , a*h/2)
  	return a*h/2;
  }

};

getTriangleArea();

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);