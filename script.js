

for (var x = 1; x <= 100; x++){
        document.getElementById("numeri").innerHTML += x + "</br>";
     if ( x % 3 == 0  &&  x % 5 == 0){
        document.getElementById("numeri").innerHTML += "FizzBuzz" + "</br>";
     }else if ( x % 3 == 0){
         document.getElementById("numeri").innerHTML += "Fizz" + "</br>";
     }else if ( x % 5 == 0){
         document.getElementById("numeri").innerHTML += "Buzz" + "</br>";
     }
}

