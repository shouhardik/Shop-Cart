let cartIcon=document.querySelector('#cart-icon');
// console.log("cartIcon is", cartIcon);
let cart=document.querySelector('.cart').classList
let closeCart=document.querySelector('#close-cart')

console.log("working",cart)

// cartIcon && cart ? cartIcon.onclick=()=>{
//     //cart.classList.add("active")
//     cart.classList.add("active")
//     console.log('if cond');
// }:null
cartIcon.onclick=()=>{
    //cart.classList.add("active")
    cart.add("active")
    console.log('if cond');
}
 

// cart &&cartIcon ? alert('good'):null

// cartIcon ?  cartIcon.onclick = () =>{
//     cart ? cart.onclick=() =>{
//         console.log("working:", cart);
//         cart.classList.add("active")}
//      : null;
// } : null;



    // if(cartIcon){
    //     cartIcon.onclick=()=>{
    //         if(cart){
    //          cart.classList.add("active")}
    //          else{
    //             console.log("not working")
    //          }
        
    //     }
    // }


closeCart.onclick=()=>{
    console.log('close');
    cart.remove("active")
}
