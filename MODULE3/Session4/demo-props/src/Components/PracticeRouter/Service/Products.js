
const productList=[
    {
        id:1,
        name:'SamSung'
    },
    {
        id:2,
        name:'Apple'
    },  {
        id:3,
        name:'Sony'
    }
]


export function getAllProducts() {
    return productList;
}


export function addNewProduct(product) {
    productList.push(product);


}
export function productById(id){
    for (let i = 0; i < productList.length; i++) {
        if(productList[i].id == id){
            return productList[i];
            }
        console.log(productList[i])
    }
    return null;
}



