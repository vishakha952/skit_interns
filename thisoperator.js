function normalfunction(){
    console.log(this);
}
const Arrowfunction =()=>{
    console.log(this);
};
const obj ={
    normalfxnmethod:normalfunction,
    arrowfxnmethod:Arrowfunction,
};
obj.normalfxnmethod();
obj.arrowfxnmethod();


//features           regular function                         arrow
//1.this           depends on how the function            lexically inherited from scope
                  //is called
//2.new            new context                           doesnot create new context
//3.constructor    can be used                             cannot be used
//4.hoisting     can be hoisted                            can not
                  //note:expressional cannot hoisted