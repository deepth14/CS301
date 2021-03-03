
// Callback
const compute = function(add, a,b){
    return add(a,b);
  }
  function add(a,b){
    return a+b;
  }
  console.log(compute(add,2,3))