
if(localStorage.getItem("item")==null){
    document.querySelector(".quantitiy-count").innerHTML=0;
}
else
{
var obj =JSON.parse(localStorage.getItem("item"));
document.querySelector(".quantitiy-count").innerHTML=obj.quantity
}

function plus(value){
    var val = document.querySelector(value).textContent;
     console.log(val);
    ++val;

    document.querySelector(value).innerHTML=val;
   
}
function subtract(){
    var val = document.getElementById("valuee").textContent;
     console.log(val);
    --val;
    if(val==0)val=1;
    document.getElementById("valuee").innerHTML=val;
   
}
function twofuction(item){
    changephoto(item.src);
    active(item)
}
function changephoto(src1) {
var im2 = document.getElementsByClassName("img-part");
console.log(im2);
var im = document.getElementById("img");
im.src = src1;
}
function active(item){
    const buttons = document.querySelectorAll('.images img');
    
    // Remove the 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add the 'active' class to the clicked button
    item.classList.add('active');
}


function addtocart(){
   var item={
    price : document.querySelector(".price").textContent,
   quantity : document.querySelector("#valuee").textContent,
   namee : document.querySelector("#name").textContent,
   }
   localStorage.setItem("item",JSON.stringify(item));
   var obj =JSON.parse(localStorage.getItem("item"));
   document.querySelector(".quantitiy-count").innerHTML=obj.quantity
    Swal.fire({
        title: "Added successfully",
        text: "your item in the cart check it !",
        icon: "success",
        confirmButtonText: "cancel",
    });
    
   
}