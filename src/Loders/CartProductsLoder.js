// import { getShoppingCart } from "../utilities/fakedb";

const featuredBobs = async () =>{
const loadedProducts = await fetch('products.json');
const products = await loadedProducts.json();

// const storeCard = getShoppingCart();
// const savedCart = [];
// for(const id in storeCard){
//     const addedProduct = products.find(pd=>pd.id===id);
//     if(addedProduct){
//         const quantity = storeCard[id];
//         addedProduct.quantity = quantity;
//         savedCart.push(addedProduct);
//     }

// }
return products;
}

const jobListLoder = async () =>{
const loadedProducts = await fetch('joblist.json');
const products = await loadedProducts.json();




return products;
}



const skillsPageLoader = async () => {
    return Promise.all([featuredBobs(), jobListLoder()]);
  };


export default skillsPageLoader;