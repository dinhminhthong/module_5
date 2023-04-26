import {useNavigate} from "react-router";
import {createBook, findAllType} from "../service/BookService";
import {useEffect} from "react";
import {Formik,Field} from "formik";
import * as Yup from "yup"
import {createBook} from "../service/BookService"
function CreateBook() {
const [bookType,setBookType] = useEffect([]);
const navigate = useNavigate();
useEffect ( ()=>{
    (async ()=>{
        const bookTypesRes =await findAllType();
        setBookType(bookTypesRes.data);
    })();
},[])
    return(
        <>
            <div className='text-center'>Create books</div>
        <Formik initialValues={{
            name:"",
            author:"",
            typeBookId :"",
            date :"",
        }}
                validationSchema={Yup.object({
                    name:Yup.string().required("khoong được bỏ trống"),
                    date: Yup.date()
                })}
                onSubmit={(value)=>{
                    (async ()=>{
                      await createBook({
                          ...value,
                          typeBookId: +value.typeBookId,
                      });
                      navigate("/books");
                    })();
                }}
                />
            </>
    );

}
export default CreateBook;