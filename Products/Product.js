let cardDiv = document.getElementsByTagName("main")[0];
let li = document.getElementsByTagName("li");
let categoryLi = document.getElementsByClassName("categoryLi");
let products;
let category = [];
async function getProducts(category="none")
{
    let Data = await fetch("https://fakestoreapi.com/products");
    products = await Data.json();
    display(products);
    console.log(products);
}

function filterData()
{
    let filterProducts = products.filter((e)=>category.includes(e.category));
    console.log(filterProducts);
    cardDiv.innerHTML = ""
    display(filterProducts);
}

function display(element)
{
   element.map((a)=>{

    // Card
    let card = document.createElement('div');
    card.classList.add("product")
    console.log(a.category);
    // Image
    let img = document.createElement('img');
    img.classList.add("img")
    img.setAttribute("src",a.image);
    card.appendChild(img);

    // Div
    let details = document.createElement("div");
    details.classList.add("details")

    // Title
    let title = document.createElement("h4");
    title.innerText = a.title;
    title.classList.add("title");
    card.appendChild(title);

    // Description
    let description = document.createElement("p");
    description.innerText = a.description;
    description.classList.add("description");
    card.appendChild(description);
    
    // Price
    let price = document.createElement("p");
    price.innerText = "Price :- $" + a.price;
    price.classList.add("price");
    card.appendChild(price);

    
// buttonContainer

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    // BuyNow
    let buyNowButton = document.createElement("button");
    buyNowButton.innerText = "Buy Now";
    // buyNowButton.classList.add("buynow");
    buttonContainer.appendChild(buyNowButton);

     // AddToCartButton
     let addToCartButton = document.createElement("button");
     addToCartButton.innerText = "Add To Cart";
    //  addToCartButton.classList.add("buynow");
     buttonContainer.appendChild(addToCartButton);
 
     card.appendChild(buttonContainer);

    // Main
    cardDiv.append(card);


   });
}

for(let i of categoryLi)
{
    i.addEventListener("click",(e)=>{
        if(e.target.innerText == "Men's")
    {
        category = ["men's clothing"];
    
    }
    else if(e.target.innerText == "Women's")
    {
        category = ["women's clothing","jewelery"];
        
    }
    else if(e.target.innerText == "Electronic's")
    {
        category = ["electronics"];
        
    }
    else
    {
        alert("Select Properly");
    }

    filterData();
    
    })
}



function OpenNav()
{
    for(let i of li)
    {
        i.classList.toggle("display");
    }
}

getProducts();