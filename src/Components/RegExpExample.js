import React from 'react'

function RegExpExample() {
    let pattern = /^a.[a-z0-9]{4,}e?$/igm
 //  let emailpattern = /^\w+@\w+\.\w+$/
    let emailpattern = /\S+@\S+\.\S{2,5}/
    let inputData = "ahFFGGj"
    console.log(emailpattern.test("abc@gmail.com"))
    console.log(emailpattern.exec("hdbdh jdjs abc@gmail.com ushufhu jhdfdh 7663453"))

    let mobno = /^(\d{3})(\d{3})(\d{4})$/
    

    // ^ - start of the pattern
    // $ - end of the pattern
    // []- any one char with in that range
    // * - 0 or more 
    // + - 1 or more
    // {n} - exact n count only
    // {n,m} - range from n to m
    // {n,} - more than or equal to n
    // \w - word char(alphabets, numbers, _)
    // \W - non word char
    // \d - digits
    // \D - non digits
    // \s - space
    // \S - non space
    // ? - optional
    // . - single char
    // ^ - except that 


   console.log( pattern.test(inputData))
    
    return (
    <div>  
      
    </div>
  )
}

export default RegExpExample
