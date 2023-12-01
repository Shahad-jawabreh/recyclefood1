let m =JSON.parse(localStorage.getItem("item"));
let price=m.price;
let total = m.total;
let bar=document.querySelector(".progress-bar");
display()
let update=document.querySelector(".btn-success");
let tot=document.querySelector("#tot");
console.log(total)
let para =document.querySelector(".para");
check()

function check(){
    if(m.total>=100){
        para.innerHTML="";
        bar.classList.remove("bg-danger");
        bar.classList.add("bg-success");
    
        Swal.fire({
            title: 'You get free delivery !',
            width: 600,
            padding: '3em',
            color: '#008000',
            backdrop: `
              rgba(0,128,0,0.4)
              url("../img/car.png")
              left top
              no-repeat
            `
          })
        
    }
    else{
        bar.classList.remove("bg-success");
        bar.classList.add("bg-danger");
        para.innerHTML="Purchase $100 and get free shipping";
    }
}
function display(){
    var data=`
<tr>

<td>${m.namee}</td>
<td>${m.price}</td>
<td><input id="quan" type="text" value="${m.quantity}" class="w-25 text-center"></td>
<td id="tot">${m.total}</td>
<td><button type="button" class="btn btn-danger">Delete</button>
</tr>
`;
document.getElementById("tbody").innerHTML=data;
var x=`width: ${m.total}%`
bar.setAttribute("style",x);
}
    

let quan = document.getElementById("quan");

quan.addEventListener("keyup", function (e) {
  
m.quantity=quan.value;
m.total=m.quantity*price;
console.log(tot)
tot.innerHTML=m.total;
 x=`width: ${m.total}%`
 bar.setAttribute("style",x);
 localStorage.setItem("item",JSON.stringify(m));
check()
} );
var dele = document.querySelector(".btn-danger");
if(dele != null){
dele.addEventListener("click", function(){
 localStorage.removeItem("item");
 document.getElementById("tbody").innerHTML="";
 bar.style="width:0"
})
}
var numvalid =document.getElementById("inputPhone3");
var placeorder=document.getElementById("placeorder");
var orderform = document.querySelector(".order-form");
numvalid.addEventListener("keyup",function(){
 
})
placeorder.addEventListener("click",function(){

  orderform.classList.toggle("invisible");
})