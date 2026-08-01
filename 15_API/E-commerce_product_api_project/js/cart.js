let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";

cart.forEach((v,index)=>{

html += `

<div class="bg-white rounded-xl shadow p-5">

<img src="${v.thumbnail}"
class="w-full h-52 object-cover rounded">

<h2 class="text-xl font-bold mt-3">
${v.title}
</h2>

<p class="text-2xl text-green-600">
$${v.price.toFixed(2)}
</p>


<div class="flex items-center gap-3 mt-3">

<button class="minus bg-red-500 text-white px-3 py-1 rounded"
data-index="${index}">
-
</button>

<span class="text-xl">
${v.quantity}
</span>

<button class="plus bg-green-500 text-white px-3 py-1 rounded"
    data-index="${index}">
    +
</button>

</div>

<button
    class="remove bg-red-500 text-white w-full mt-4 py-2 rounded"
    data-index="${index}">
    <i class="fa-solid fa-trash"></i> Remove
</button>



</div>


`;

});

$("#cartItems").html(html);



// --------------------------------

if (cart.length === 0) {


    $("#cartItems").html(`
        <div class="col-span-3 text-center py-20">
            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping empty-icon"></i>

                <h2>Your Cart is Empty</h2>

                <p>
                Looks like you haven't added anything yet.
                Start shopping to fill your cart.
                </p>

                <a href="product_api.html">
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Continue Shopping
                </a>

                </div>
            
        </div>
    `);

    $("#total").hide();
    $("#checkoutBtn").hide();
}

// ---------------------------------

let total = 0;



cart.forEach(item => {

    total += item.price * (item.quantity || 1);
    // let price=item.price.toFixed(2)

});

// $("#total").text("Grand Total : $" + total);
$("#total").text(
    "Grand Total : $" + total.toFixed(4)
);


// --------------

$(document).on("click",".remove",function(){

let index=$(this).data("index");

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

});
// ------------------------------------------------plus 
$(document).on("click",".plus",function(){

    let index=$(this).data("index");

    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

});

// ----------------------------------------minus 

$(document).on("click",".minus",function(){

    let index=$(this).data("index");

    if(cart[index].quantity>1){
        cart[index].quantity--;
    }
    else{
        cart.splice(index,1);
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

});

// ------------------------check out 

$("#checkoutBtn").click(function(){
 
    alert(" Order placed successfully!\n\nThank you for shopping with us.");

    localStorage.removeItem("cart");

    window.location.href = "product_api.html";

});

