import {Formik,Form,Field} from "formik";
import * as productService from '../service/ProductService'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function ProductCreate() {
    const [type,setType] = useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        const getType = async ()=>{
            let rs = await productService.findAllType();
            setType(rs);
        }
        getType()
    },[])
return(
    <>
        <Formik initialValues={{name:'',color:'',typeProduct:1}}
                onSubmit={(value)=>{
                    const create = async ()=>{
                        await productService.save(value);
                        alert("thêm mới thành công")
                        navigate('/')
                    }
                    create()
                }}
                >
            <Form>
                <div className='col-3'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name='name' className='form-control'/>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='form-group'>
                        <label htmlFor='color'>Color</label>
                        <Field type='text' name='color' className='form-control'/>
                    </div>
                </div>

                <div className='col-3'>
                    <div className='form-group'>
                        <label htmlFor=''>Type product</label>
                        <Field component='select' name='typeProduct' className='form-control'>
                            {
                                type.map( (value,index)=>(
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
export default ProductCreate;