 
 const btn=document.querySelector("button");
 const qrimg=document.querySelector("#qrimg");
 const imgbox=document.querySelector(".imgBox");
 const dalo=document.querySelector("#dalo");
 

 btn.addEventListener("click",(ev)=>{
    
   qrimg.src="http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + dalo.value;
    

 })

