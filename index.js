var total = 0;
function addcart(preço = 0) {
    var quant = parseInt(document.querySelector("#select").value);
    total += preço * quant;
    document.getElementById("total").innerHTML =`<i>${total}</i>`
}