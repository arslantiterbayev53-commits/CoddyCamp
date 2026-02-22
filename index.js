let info = document.querySelector("#myForm")
info.addEventListener("submit",(e)=>{
   e.preventDefault()


   let Telefon = document.querySelector("#Telefon").value
   let password = document.querySelector("#password").value
   let TelefonError = document.querySelector("#TelefonError")
   let passwordError = document.querySelector("#passwordError")


   if(Telefon === "" ){
    TelefonError.style.color = "red"
    TelefonError.innerHTML = "Telefon raqam kirgizing!"
    return
   }
   
   if(password === ""){
    passwordError.style.color = "red"
    passwordError.innerHTML = "Parol kirgizing!"
    return
   }

   if(Telefon === "+998938363252" && password === "8788"){
   window.location.href = "Homepage.html"
   }else{
      alert("Parol yoki Telefon raqam no'togri kiritilgan!")
   }
})


let btn = document.querySelector("#demo");

btn.addEventListener("mouseout", () => {
    alert("salom bolalar");
});
