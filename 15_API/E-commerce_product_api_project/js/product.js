let products = [];
$.ajax({
    method:'GET',
    url:'https://dummyjson.com/products',

    success:function(data){

         products=data.products;
        let result="";

        products.map((v)=>{

            result+=`
            
           <div class="product bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden">

             <img src="${v.thumbnail}"
                class="w-full h-52 object-contain bg-white p-4">
                

                <div class="p-5">

                    <span class="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
                        ${v.category}
                    </span>

                    <h2 class="text-xl font-bold mt-3">
                        ${v.title}
                    </h2>

                    <p class="text-gray-600 text-sm mt-2 line-clamp-3">
                        ${v.description}
                    </p>

                    <div class="flex justify-between mt-4">
                        <span class="text-2xl font-bold text-green-600">
                            $${v.price}
                        </span>

                        <span class="text-yellow-500 font-semibold">
                            <i class="fa-solid fa-star text-yellow-400"></i>  ${v.rating}
                        </span>
                    </div>

                    <div class="mt-3 flex justify-between text-sm">

                        <span class="text-red-500">
                            ${v.discountPercentage}% OFF
                        </span>

                        <span class="text-blue-600">
                            <i class="fa-solid fa-box-open"></i>  Stock: ${v.stock}
                        </span>

                    </div>

                    <div class="mt-4 flex flex-wrap gap-2">

                        ${v.tags.map(tag=>`
                            <span class="bg-gray-200 px-2 py-1 rounded text-xs">
                                ${tag}
                            </span>
                        `).join("")}

                    </div>

                    <div class="mt-5 flex gap-2">

                        <button
                            class="add-cart w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
                            data-id="${v.id}">
                            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>

                        <button class="bg-red-500 text-white px-4 rounded-lg">
                        <i class="fa-regular fa-heart"></i>
                        </button>

                    </div>

                    <button
                        class="view-btn w-full mt-3 border border-indigo-600 text-indigo-600 object-contain bg-white p-4 rounded-lg"
                        data-id="${v.id}">
                            View Details
                    </button>

                </div>

            </div>

            `;
        });

        $("#product-table").html(result);

    }
})
// ---------------search 

$("#search").keyup(function(){

    let value=$(this).val().toLowerCase();

    $(".product").filter(function(){

        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);

    });

});
// ------------------add to cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];

$("#cart-count").text(cart.length);

$(document).on("click",".add-cart",function(){

    let id = $(this).data("id");

    let product = products.find(p => p.id == id);

   let exist = cart.find(item => item.id == id);

if(exist){
    exist.quantity++;
}
else{
    product.quantity = 1;
    cart.push(product);
}

localStorage.setItem("cart", JSON.stringify(cart));

    localStorage.setItem("cart", JSON.stringify(cart));

    $("#cart-count").text(cart.length);

    alert("Product Added Successfully!");
});


// ---------------------------------------------------view product
$(document).on("click",".view-btn",function(){

    let id=$(this).data("id");

    $.get(`https://dummyjson.com/products/${id}`,function(product){

        $("#modalContent").html(`

            <img src="${product.thumbnail}"
            class="w-full h-72 object-cover rounded-lg">

            <h2 class="text-3xl font-bold mt-2">
                ${product.title}
            </h2>

            <p class="mt-2 text-gray-600">
                ${product.description}
            </p>

            <div class="flex justify-between mt-3">

                <h3 class="text-green-600 text-2xl">
                    $${product.price}
                </h3>

                <h3>
                    ⭐ ${product.rating}
                </h3>

            </div>

            <p class="mt-2">
                Brand :
                <b>${product.brand}</b>
            </p>

            <p>
                Stock :
                <b>${product.stock}</b>
            </p>

        `);

        $("#productModal").removeClass("hidden").addClass("flex");

    });

});

// ------------close btn 

$(document).on("click", "#closeModal", function () {
    $("#productModal")
        .removeClass("flex")
        .addClass("hidden");
});


