import axios from "axios";
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


export async function getAllProducts() {
    try{

    const reponse = await axios.get(" http://localhost:8080/products");
    return reponse.data;

    }catch(e){
        console.log("Lỗi" + e)
        return [];

    }

}
export async function searchProducts(searchName) {
    try{

    const reponse = await axios.get(" http://localhost:8080/products?name_like="+searchName);
    return reponse.data;
    }catch(e){
        console.log("Lỗi" + e)
        return [];
    }
}


export async function addNewProduct(product) {
    try{

        const reponse = await axios.post(" http://localhost:8080/products",product);


    }catch(e){
        console.log("Lỗi" + e)
        return [];

    }


}
export async function productById(id){
    // for (let i = 0; i < productList.length; i++) {
    //     if(productList[i].id == id){
    //         return productList[i];
    //         }
    //     console.log(productList[i])
    // }

    try{
        const reponse = await axios.get(" http://localhost:8080/products/"+id);
        return reponse.data;

    }catch(e){
        console.log("Lỗi" + e)
        return null;

    }

}
export async function deleteProduct(id){
    // for (let i = 0; i < productList.length; i++) {
    //     if(productList[i].id == id){
    //         productList.splice(i,1);
    //         break;
    //     }
    //
    // }
    try{
        const reponse = await axios.delete(" http://localhost:8080/products/"+id);

    }catch(e){
        return [];

    }

}



