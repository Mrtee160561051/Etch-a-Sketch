const container = document.getElementById("container");
const input = document.getElementById("gridNumInput");
const changeBtn =document.getElementById("changeText");

changeBtn.addEventListener("click",()=>{
 if(input.value<=0){
    alert("Enter number between 1 and 100");
 }else if(input.value <=100){
    updateGrid(input.value)
}else{
    alert("Enter number between 1 and 100");
}
})


const updateGrid = (n)=>{
let i=0,y=35/n;
container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n)
    const cells = document.querySelectorAll(".cell");
    
    cells.forEach(cell=>{
        cell.style.height= `${y}em`
        cell.addEventListener("mouseover",()=>{
            cell.style.background="black"
        })
    })
}   
updateGrid(16)

   

