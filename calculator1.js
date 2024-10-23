var show = document.getElementById("show");
// show.value = 0
function appendValue(value) {
      show.value += value;  
}
function appendOperator(operator){
  if((show.value).slice(-1) == "+" || (show.value).slice(-1) == "-" || (show.value).slice(-1) == "*" || (show.value).slice(-1) == "/" ){
  
  }else{
    show.value += operator;
  } 
}

var resultLast = document.getElementById("result");
function calculateResult(){
  var inputValue = show.value;
  var finalResult = computation(inputValue);
  console.log(finalResult)
  resultLast.value = finalResult;
}

function computation(inputValue){
  if(inputValue.slice(-1) == "+" || inputValue.slice(-1) == "-" || inputValue.slice(-1) == "*" || inputValue.slice(-1) == "/" ){
    deleteLast();
  };

    var indexNumber = inputValue.match(/\d+|\+|\-|\*|\//g);
    var index = 0;
  function indexofNumber(){
    return indexNumber[index++];
  }

  function parseFactor(){
    var result = parseFloat(indexofNumber());
   
  while(indexNumber[index] === "*" || indexNumber[index] === "/"){
     var operator = indexofNumber();
    var nextNumber = parseFloat(indexofNumber());
    if( operator === "*"){ result *= nextNumber;}
    if(operator === "/"){result /= nextNumber;}
   }
    return result;
  }
  function parseExpression(){
    var result = parseFactor();
    while(indexNumber[index] === "+" || indexNumber[index] === "-"){
      var operator = indexofNumber();
      var nextNumber =  parseFactor();
      if(operator === "-"){result -= nextNumber};
      if(operator === "+"){result += nextNumber};
    }
    return result;
  }
  return parseExpression();

  };

function deleteLast() {
  show.value = show.value.slice(0, -1);  // Removes the last character
}

var del = document.getElementById("del");
del.addEventListener("click",()=>deleteLast());


var clear = document.getElementById("clear");
clear.addEventListener("click",()=>{
show.value = "";
result.value = "";
});
