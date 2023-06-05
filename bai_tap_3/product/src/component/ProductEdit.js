import{Formik,Form,Field} from "formik";
import * as productService from '../service/ProductService';
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
function ProductEdit() {
    const [showTypeProduct,setShowTypeProduct] = useState([]);
    const [findById,setFindById] = useState()
    let navigate = useNavigate();
    let param = useParams();
    useEffect( ()=>{
        const getID = async ()=>{
            const rs = await productService.findById(param.id);
            // debugger
            setFindById(rs);
        };
        getID()
    },[param.id]);

    useEffect( ()=>{
        const getProductType = async ()=>{
            const rs = await productService.findAllType()
            // console.log(rs)
            setShowTypeProduct(rs)
        }
        getProductType()
    },[])

    if(!findById){
        return null;
    }
    return(
        <>
            <Formik initialValues={
                {

                    id:findById?.id,
                    name:findById?.name,
                    color:findById?.color,
                    typeProduct:findById?.typeProduct

                }
            }
                    onSubmit={ async (values)=>{
                    await  productService.update(values)
                        alert("thành công")
                        navigate('/')
                    }}
                    >
                <Form>
                    <Field type='hidden' name ="id" />
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' name='name' id='name' aria-describedby="helpId" placeholder="Nhập name"
                                   className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='color'>Color</label>
                            <Field type='text' name='color' id='color' aria-describedby="helpId" placeholder="Nhập color"
                                   className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Type product</label>
                            <Field component='select' name='typeProduct' id='typeProduct' className='form-control'>
                                {
                                    showTypeProduct.map( (value,index)=>(
                                        <option key={index} value={value.id}>
                                            {value.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </Form>

            </Formik>
            </>
    )
}
export default ProductEdit;