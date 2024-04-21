// Generate fibonacci series upto n terms.

function fibo(num){
    let a=0,b=1,c;


    for(let i=1;i<=num;i++){
        console.log(a);
        c=a+b;
        a=b;
        b=c;
    }
}
fibo(5);