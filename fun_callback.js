var products=["laptop","mobiles","smartwatch","Tablet"];

function addToCart(){
    var input=prompt("enter the product")
    if(input){
        for(elem of products){
            var itemFound=false;
            if(input==elem){
                console.log(`you have added $(input) item to the cart`);
                alert(`you have added ${input} item to the cart`)
                itemFound=true;
                break;
            }
        }
        if(!itemFound){
            alert(`we dont have ${input} item in our cart`) 
            addToCart()
        }
    }
    else{
        alert("please select item and add it to cart")
    }
}