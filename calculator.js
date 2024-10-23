const zero = document.getElementById("zero");
const d_zero = document.getElementById("d-zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four =document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");

var show = document.getElementById("show");
show.value= 0;
function appendValue(value) {
    show.value += value;    //  return show.value;
    // console.log(show.value);
}
// number 
zero.addEventListener("click",()=>appendValue(zero.value));
d_zero.addEventListener("click",()=>{
// let splitValue = (show.value).split(/[\/*\-]/);  // Split the string by /, *, or -
// // Access the last element of the array
// let lastValue = splitValue[splitValue.length - 1];
appendValue(d_zero.value);
})
decimal.addEventListener("click",()=>{
  // if((show.value).slice(0) == "0"){
  //   show.value = ""
  // }
  appendValue(decimal.value)
});
one.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(one.value)
});
two.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(two.value)
});
three.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(three.value)
});
four.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(four.value)
});
five.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(five.value)
});
six.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(six.value)
});
seven.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(seven.value)
});
eight.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(eight.value)
});
nine.addEventListener("click",()=>{
  if((show.value).slice(0) == "0"){
    show.value = ""
  }
  appendValue(nine.value)
});

//operator
const add = document.getElementById("add"); 
add.addEventListener("click",()=>{
  if((show.value).slice(-1) !== "-" && (show.value).slice(-1) !== "+" && (show.value).slice(-1) !== "*" && (show.value).slice(-1) !== "/"){
    appendValue(add.value)
  }
});
const sub = document.getElementById("sub");
sub.addEventListener("click",()=>{
  if((show.value).slice(-1) !== "-" && (show.value).slice(-1) !== "+" && (show.value).slice(-1) !== "*" && (show.value).slice(-1) !== "/"){
    appendValue(sub.value)
  }
});
const div = document.getElementById("div");
div.addEventListener("click",()=>{
  if((show.value).slice(-1) !== "-" && (show.value).slice(-1) !== "+" && (show.value).slice(-1) !== "*" && (show.value).slice(-1) !== "/"){
    appendValue(div.value)
  }
});
const mul = document.getElementById("mul");
mul.addEventListener("click",()=>{
  if((show.value).slice(-1) !== "-" && (show.value).slice(-1) !== "+" && (show.value).slice(-1) !== "*" && (show.value).slice(-1) !== "/"){
    appendValue(mul.value)
  }
});
  // result btn
const result = document.getElementById("result");
//calculte with equal
equal.addEventListener("click",()=>{
  // console.log((show.value).split(","));
  if((show.value).slice(-1) == "+" || (show.value).slice(-1) == "-" || (show.value).slice(-1) == "*" || (show.value).slice(-1) == "/" ){
    deleteLast();
  };
  show.value =  eval(show.value);
});
  // console.log(show.value);
var del = document.getElementById("del");

//for del the value of show btn
function deleteLast() {
  show.value = show.value.slice(0, -1);  // Removes the last character
}
del.addEventListener("click",()=>deleteLast());

//clear all in the show btn 
var clear = document.getElementById("clear");
clear.addEventListener("click",()=>{
show.value = "0";
result.value = "";
});


