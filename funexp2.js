//tradition code
function findOddOrEven(a){
    if(a%2==0){
        console.log("EVEN");
    }else{
        console.log("ODD");
    }
}
//using arrow function
const oddOrEven=(a)=>{
    if(a%2==0){
        console.log("Even");
    }else{
        console.log("ODD");
    }
}
findOddOrEven(17);
oddOrEven(2);
