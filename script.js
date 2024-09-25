let s1=document.getElementById('sq1');
s1.addEventListener("mouseenter",function()
{
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
   
});

s1.addEventListener("mouseleave",function()
{
    s1.innerHTML=`<h1>1</h1>`;
    
})


let s2=document.getElementById("sq2");
let clr='red';
s2.addEventListener("mouseenter",function()
{
   if(clr=='red')
   {
    s2.innerHTML=`<h1>1</h1>`;
    s2.style.background='red';
   clr='green';
   }
   else if(clr=='green')
   {
    s2.style.backgroundColor='green';
    s2.innerHTML=`<h1>2</h1>`;
    clr='blue';
   }
   else{
    s2.style.backgroundColor='blue';
    s2.innerHTML=`<h1>3</h1>`;
    clr='red';
    
   }
}
);

let s3=document.getElementById("sq3");
s3.addEventListener("mouseenter",function()
{
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1}, ${r2},  ${r3})`;
});
s3.addEventListener("mouseleave",function()
{
    s3.style.backgroundColor='white';
});


let s4=document.getElementById("sq4");

s4.addEventListener("click",function()
{
    
    let c1=Math.floor(Math.random()*256);
    let c2=Math.floor(Math.random()*256);
    let c3=Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${c1},255,255)`;
    s2.style.backgroundColor=`rgb(255,${c2},255)`;
    s3.style.backgroundColor=`rgb(255,255,${c3})`;
     
     
});

s4.addEventListener("mouseleave",function()
{
  
    s1.style.backgroundColor='white';
    s2.style.backgroundColor='white';
    s3.style.backgroundColor='white';
   
})