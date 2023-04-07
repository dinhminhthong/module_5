import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {Field, Form, Formik} from "formik";
import * as BookService from "../service/BookService";

function EditBook() {
    const [books,setBooks]=useState();
    const param=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        async function BookDetail() {
            const detail=await BookService.findById(param.id);
            setBooks(detail.data)
        }
        BookDetail();
    },[param.id])
    if (!books){
        return null
    }
        return(
            <>
                <Formik initialValues={{id:books?.id,name:books?.name,author:books?.author,price:books?.price}}
                        onSubmit={(values,{resetForm})=>{
                            const update =async ()=>{
                                await BookService.editBook(values);
                                resetForm()
                                navigate("/")
                            };
                            update();
                        }}
                        >
                    <Form>
                        <input type={'hidden'} name={'id'} />
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" className="form-control" id="name" name="name"/>
                        </div>

                        <div>
                            <label htmlFor="author">Author</label>
                            <Field type="text" className="form-control" id="author" name="author"/>
                        </div>

                        <div>
                            <label htmlFor="price">Author</label>
                            <Field type="price" className="form-control" id="price" name="price"/>
                        </div>
                        <button type="submit">Lưu</button>
                    </Form>
                </Formik>
                </>
        )
}
export default EditBook;