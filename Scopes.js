//scopes//
// var a=1;
// let b=30;
//  const c=49;
//  console.log(window);   
 
 //
 var a=1; 
 let b=2;
 const c=3;
 {
    var a=10;
    b=20;
    const c=30;
    console.log(a)
    console.log(b)
    console.log(c)
 }
 function greet(){
     var a=100;
      b=30;
      const c=3;
      console.log(`inside function${a}`);
      console.log(`inside function${b}`); 
      console.log(`inside function${c}`);
      
 }
 greet();
 console.log(`outside ${a}`)
 console.log(`outside ${b}`)
 console.log(`outside ${c}`)