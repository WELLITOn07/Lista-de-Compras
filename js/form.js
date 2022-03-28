var productDescription = document.getElementById('productDescription');
var productQuantity = "";
var productPrice = "";

document.getElementById('formProduct').addEventListener("change", (evForm) => {
    console.log(evForm.target.id );
        if(evForm.target.id == 'productQuantity'){
            productQuantity = evForm.target.value;
        }
        
        if(evForm.target.id == 'productPrice'){
            productPrice = evForm.target.value;
        }
        if(productQuantity && productPrice){
            totalPrice(productQuantity, productPrice);
        }
});
    
function totalPrice(quantity, price){
    if(quantity != undefined && price != undefined){

        var totalPrice = quantity * price;
        var resHtml = document.getElementById('productTotalPrice');
        
        resHtml.textContent = totalPrice;
        return totalPrice;
    }
}