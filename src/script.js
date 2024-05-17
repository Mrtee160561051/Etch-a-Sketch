const container = document.getElementById("container");
const input = document.getElementById("gridNumInput");
const changeBtn =document.getElementById("changeText");
const clearBtn = document.getElementById("clearBtn");
const colorBtn = document.getElementById("colorBtn");
const colorInput = document.getElementById("colorInput");
const resetBtn = document.getElementById("resetBtn");
const randomBtn = document.getElementById("randomBtn");

changeBtn.addEventListener("click",()=>{
    let val= input.value
 if(val<=0){
    alert("Enter number between 1 and 100");
 }else if(val <= 100){
    updateGrid(val)
}else{
    alert("Enter number between 1 and 100");
}
})

clearBtn.addEventListener("click",()=>{
    updateColor("whitesmoke");
})

colorBtn.addEventListener("click",()=>{
    updateColor(colorInput.value)
})


resetBtn.addEventListener("click",()=>{
    let val= input.value
    updateGrid(16)
    val=""
    colorInput.value = ""
})

randomBtn.addEventListener("click",()=>{
    
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell=>{
        cell.addEventListener("mouseover",()=>{
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            cell.style.background=`rgb(${r},${g},${b})`
        })
        
    })

})

const updateColor =(str)=>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell=>{
        cell.addEventListener("mouseover",()=>{
            cell.style.background=str
        })
        
    })
}

const updateGrid = (n)=>{
    let val= input.value
    val=""
let heightCal=35/n;
container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n)
    const cells = document.querySelectorAll(".cell");
    
    cells.forEach(cell=>{
        cell.style.height= `${heightCal}em`
        cell.addEventListener("mouseover",()=>{
            cell.style.background="black"
        })
    })
}   
updateGrid(16);

