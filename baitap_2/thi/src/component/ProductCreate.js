import {Formik,Form,Field,ErrorMessage} from "formik";
import * as productService from "../service/ProductService"
import * as Yup from "yup"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function ProductCreate() {
    const [type,setType] = useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        const getType = async ()=>{
            let rs = await productService.findAllType()
            setType(rs)
        }
        getType()
    },[])
    return(
        <>
            <Formik initialValues={{name:'',date:'',soLuong:'',typeProduct:1}}
                    validationSchema={Yup.object({
                        name:Yup.string().required(),
                        date:Yup.date().required(),
                        soLuong:Yup.number().required()
                    })}
                    onSubmit={ (value)=>{
                        const create = async ()=>{
                            await productService.save(value);
                            alert("thêm mới thành công");
                            navigate("/")
                        }
                        create()
                    }}
                    >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Tên sản phẩm</label>
                            <Field type='text' name='name' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='date'>Ngày nhập</label>
                            <Field type='date' name='date' className='form-control'/>
                        </div>
                        <ErrorMessage name='date' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='soLuong'>Số lượng</label>
                            <Field type='text' name='soLuong' className='form-control'/>
                        </div>
                        <ErrorMessage name='soLuong' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Loại sản phẩm</label>
                            <Field component='select' name='typeProduct'>
                                {
                                    type.map( (pro,index)=>(
                                        <option key={index} value={pro.id}>
                                            {pro.type}
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