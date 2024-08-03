async function purchasecake(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        },2000);
    });
}
async function curtaindec(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        },2000);
    });
}
async function ballons(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        },2000);
    });
}
  async function cakecutting(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

        },2000);
    });
}

//promise
//purchasecake()
//.then(()=>curtaindec())
//.then(()=>ballons())
//.then(()=>cakecutting())
//.catch((e)=>console.log(e))
//.finally(()=>console.log("happily ended"));


//async await
async function birthdaycelebration(){
    try{
        await purchasecake();
        await curtaindec();
        await ballons();
        await cakecutting();
    }catch(e){
        console.log(e);
    }
}
birthdaycelebration();