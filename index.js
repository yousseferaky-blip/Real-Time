
let Textarea = document.getElementById("Textarea")
let Total = document.getElementById("Total")
let Remaining = document.getElementById("Remaining")


window.addEventListener("load",()=>{
    Textarea.value = ""
})

Textarea.addEventListener("keyup",()=>{
    
    Total.innerText = Textarea.value.length
    Remaining.innerText = 100 - Total.innerText
})





