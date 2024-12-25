import axios from "axios";

const url = "http://localhost:8080/dining/food"
const posturl = "http://localhost:8080/dining/food/add"
//const contacturl = "http://localhost:8080/dining/contact/add"
//const adminurl= "http://localhost:8080/dining/admin/getall"
const customerUrl= "http://localhost:8080/dining/customer"
const cartUrl= "http://localhost:8080/dining/cart"
// export async function getAdmin(){
//     return await axios.get(adminurl);
// }

export async function getcart(){
    return await axios.get(`${cartUrl}/getall`);
}
export async function deletecart(id){
    return await axios.delete(`${cartUrl}/delete/${id}`);
}
export async function postorder(data){
    return await axios.post('http://localhost:8080/dining/order/add',data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}

export async function postCustomer(data){
    return await axios.post(`${customerUrl}/add`,data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
export async function postContact(data){
    return await axios.post("http://localhost:8080/dining/contact/add",data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}
export async function getcustomer(){
    return await axios.get(customerUrl);
}
export async function getFood(){
    return await axios.get(url);
}
export async function getorders(){
    return await axios.get('http://localhost:8080/dining/order/getall');
}
export async function deleteFood(id){
    return await axios.delete(`${url}/delete/${id}`);
}
export async function putFood(data){
    return await axios.put(url+"/update",data
);
}
export async function postFood(data){
    return await axios.post(posturl,data,{
        headers:{
            'Content-Type':'application/json'
        }
    });
}