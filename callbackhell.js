function purchasecake(){
setTimeout(()=>{
    console.log("cake purchased");
},2000);
}

function curtaindec() {
setTimeout(()=>{
    console.log("curtain down");
},2000);
}
 function ballons(){
setTimeout(()=>{
    console.log("ballon released");
},2000);
 }
 function cakecutting(){
setTimeout(()=>{
    console.log("cake cutting");
},2000);
 }
//callbackhell
cakecutting();
console.log("happy birthday:1");
console.log("happy birthday:2");
console.log("happy birthday:3");
purchasecake();
console.log("happy birthday:4");
console.log("happy birthday:5");
curtaindec();
purchasecake();
console.log("happy birthday:6");
curtaindec();
ballons();
console.log("happy birthday:7");
console.log("happy birthday:8");
console.log("happy birthday:9");
console.log("happy birthday:10");