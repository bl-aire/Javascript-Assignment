function quadraticEquation(a, b, c){

    var q = Math.pow(b,2)-(4*a*c);  //this is the discriminant
    var xpositive = (-b + Math.sqrt(q))/(2*a);  //xpositive and xnegative are variables to show the two values of x
    var xnegative = (-b - Math.sqrt(q))/(2*a);

    if(q==0){
        xpositive = xnegative = (-b)/(2*a);
    }else if(q>0){
        xpositive = (-b + Math.sqrt(q))/(2*a);
        xnegative = (-b - Math.sqrt(q))/(2*a);
    }else{
        xpositive = (-b)/(2*a);
        xnegative = (Math.sqrt(q))/(2*a);
    } //here, conditional statements(else if statements to be precise) are used to take care of the three states of the discriminant(0, >0, <0)
    
    console.log(xpositive);
    console.log(xnegative);
}

quadraticEquation(9, 12, 4);  //different values of a, b and c can be passed as arguements into the function as it is called