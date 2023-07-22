import axios from "axios";

export const findAll = async ()=>{
    try {
        await axios.post(`http://localhost:8080/api/product/list`,
            {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                        //   'Authorization': 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJUaG9uZ0FkbWluIiwiaXNzIjoiQ29kZUphdmEiLCJpYXQiOjE2ODg1NDIxMDcsImV4cCI6MTY4ODYyODUwN30.HvyaQWe8aJdKeByZqB6_8nwVyoVa890IKdiFDMnH5g3YKIt1Leg9Ek8rqsrIVfrR1lDKeIEIttrnZv_mrUydDg"
                    },
            }
        );
    }catch (e) {
        console.log(e)
    }
}
export const detail = async (productID)=>{
    try {
        let rs = await axios.get(`/api/product-detail?productId=${productID}`)
    }catch (e) {
        console.log(e)
    }
}
