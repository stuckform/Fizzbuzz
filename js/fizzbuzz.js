document.getElementById("fizzButton").addEventListener("click", function () {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;

  fizzBuzz(num1, num2)

});

  function fizzBuzz(num1, num2)
  {
    let returnValue = "";
  for (let i = 1; i <= 100; i++)
  {
    if (i % num1 == 0 && i % num2 == 0)
    {
       document.getElementById("result").innerText += 'FizzBuzz ';      
        } 
    else if (i % num1 == 0)
    {
         document.getElementById("result").innerText += 'Fizz';
        }
        else if (i % num2 == 0) {
           document.getElementById("result").innerText += 'Buzz';
        }
        else {
          document.getElementById("result").innerText += i + ' ';
        }
    }
    return returnValue;
};