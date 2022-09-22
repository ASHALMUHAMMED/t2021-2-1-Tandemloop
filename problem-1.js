class operation{
    addition(num1,num2){
        let sum;
        sum = parseFloat(num1)+parseFloat(num2)
        console.log('Result is :'+sum);
    }
    subtraction(num1,num2){
        let sub;
        sub = num1-num2
        console.log('Result is :'+sub);
    }
    multiplication(num1,num2){
        let mult;
        mult = num1*num2
        console.log('Result is :'+mult);
    }
    division(num1,num2){
        let div;
        div = num1/num2
        console.log('Result is :'+div);
    }
}

var read =require('readline-sync')
console.log('1.Adddition \n2.Subtraction \n3.Multiplication \n4.Division');
let action = new operation()
option = read.question('Select the option')

switch(parseInt(option)){
    case 1 : console.log('Enter two number to add')
            let add1 = read.question()
            let add2 = read.question()
            action.addition(add1,add2);
            break;
    case 2 : console.log('Enter two number to subtract')
            let sub1 = read.question()
            let sub2 = read.question()
            action.subtraction(sub1,sub2);
            break;
    case 3 : console.log('Enter two number to multiplication')
            let mult1 = read.question()
            let mult2 = read.question()
            action.multiplication(mult1,mult2);
            break;
    case 4 : console.log('Enter two number to division')
            let div1 = read.question()
            let div2 = read.question()
            action.division(div1,div2);
            break;
    default : console.log('Syntax error');
            break;
}