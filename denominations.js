//write a programm in j/s to count total numbers of denomianations.
//2000,500,200,100,50,20,10,5,2,1

let total=1000;

if(total>=2000){
    let notes=Math.floor(total/2000);
    console.log("total no of 2000 notes",notes);
    total=total-notes*2000;
}
if(total>=500){
    let notes=Math.floor(total/500);
    console.log("total no of 500 notes",notes);
    total=total-notes*500;
}if(total>=200){
    let notes=Math.floor(total/200);
    console.log("total no of 200 notes",notes);
    total=total-notes*200;
}if(total>=100){
    let notes=Math.floor(total/100);
    console.log("total no of 100 notes",notes);
    total=total-notes*100;
}if(total>=50){
    let notes=Math.floor(total/50);
    console.log("total no of 50 notes",notes);
    total=total-notes*50;
}if(total>=20){
    let notes=Math.floor(total/20);
    console.log("total no of 20 notes",notes);
    total=total-notes*20;
}if(total>=10){
    let notes=Math.floor(total/10);
    console.log("total no of 10 notes",notes);
    total=total-notes*10;
}if(total>=5){
    let notes=Math.floor(total/5);
    console.log("total no of 5 ncoins",notes);
    total=total-notes*5;
}if(total>=2){
    let notes=Math.floor(total/2);
    console.log("total no of 20notes",notes);
    total=total-notes*2;
}
if(total>0){
    console.log("total no of 1 coin",total);
}