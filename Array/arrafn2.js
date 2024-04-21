//WAP In JS if an aary conatins only uniq values.

let arr=[2,4,3,5,6,2,4,6]
let unarr=[]

for(let i=0;i<arr.length;i++){
    let uniq=true;
    for(let j=0;j<unarr.length;j++){
        if(arr[i]===arr[j]){
            uniq=false
            break;
        }
    }
    if(uniq){
        unarr.push(arr[i])
    }
}
console.log(unarr)
