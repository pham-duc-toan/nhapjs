// import "./scss/style.scss"
fetch("http://localhost:3000/products")
    .then((response) => {
      
      return response.json();

    })
    .then( async (data) => {
      // console.log(data);
      const newArray =await data.map((item) => {
        return `
          <div class="product-item">
            <img src="${item.images[0]}" alt="${item.title}" />
            <h3>
              ${item.title}
            </h3>
            <div class="inner-price">
              ${item.price}$
            </div>
          </div>
        `;
      });

      // console.log(newArray);
      const htmls =await newArray.join("");
      await console.log(htmls);
       const products =await document.querySelector("#products");
      products.innerHTML = htmls; 
      let a=await "abc def";
      a=await a+" ghi";   
      // let start = a.indexOf("bc");
      await console.log(a);
      
    })
    .then( async ()=>{
      let b=[1,2,3,4,5];
      const index = b.findIndex((item)=>{
        return item == 8;
      })
      console.log(index);
    })

