let url = "https://fakestoreapi.com/products"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then ((products)=>{
    console.log(products)
    ihtml = " "
    for (item in products){
        console.log(products[item])
        ihtml +=`
        <div class="card" mx-2 my-2 style="width: 20rem;">
            <img src="https://image.hm.com/assets/hm/23/ce/23ce82d90f85254495b8939127062a6156d96deb.jpg?imwidth=2160" 
            class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${products[item].title}</h5>
              <p class="card-text"><a href = "">Visit here</p>
              <p>Start at ${products[item].category}</p>
              <p>Start at ${products[item].price}</p>
              <p>Start at ${products[item].rating}</p>
              <a href=""${products[item].url}"" class="btn btn-primary">Buy Now</a>
            </div>
          </div>
        `
    }
    cardContainer.innerHTML = ihtml;
})
let n = localStorage.getItem("note")
alert("Your note is " + n)
let a = prompt("Enter your note!")
if(a){
    localStorage.setItem("note", a)
}
let c = confirm("Do you want to delete this note?")
if(c){
    localStorage.removeItem("note")
    alert("Note deleted")
}

