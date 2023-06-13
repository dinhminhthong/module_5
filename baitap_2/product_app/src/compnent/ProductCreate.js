import {Formik,Form,Field,ErrorMessage} from "formik";
import * as productService from "../service/ProductService";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function ProductCreate() {
    const [type, setType] = useState([]);
    let navigate = useNavigate();
    useEffect( ()=>{
        const getType = async ()=>{
            let rs = await productService.findAllTypes();
            setType(rs)
        }
        getType()
    },[])
    return(
        <>
            <h1>Thêm mới sản phẩm</h1>
            <Formik initialValues={{name:'',date:'',quantity:'',typeProduct:1}}
                    validationSchema={Yup.object({
                        name:Yup.string().required('không được bỏ trống'),
                        quantity:Yup.number().required('không được nhập chữ')
                    })}
                    onSubmit={(value)=>{
                        const create = async ()=>{
                            await productService.save(value)
                            alert("thêm mới thành công");
                            navigate('/')
                        }
                        create()
                    }}
                    >
                <Form>
                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='name'>Tên sản phẩm</label>
                            <Field type='text' name='name' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' className='text-bg-danger'/>
                    </div>

                    <div className='col'>
                        <div className='form-gruop'>
                            <label htmlFor='date'>Ngày nhập</label>
                            <Field type='date' name='date' className='form-control'/>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='form-group'>
                            <label htmlFor='quantity'>Số lượng</label>
                            <Field type='text' name='quantity' className='form-control'/>
                        </div>
                        <ErrorMessage name='quantity' className='text-bg-danger'/>
                    </div>

                    <div className='col'>
                        <div className='form-gruop'>
                            <label htmlFor=''>Loại sản phẩm</label>
                            <Field component='select' name='typeProduct' className='form-control'>
                                {
                                    type.map(((value, index) =>
                                            <option key={index} value={value.id}>
                                                {value.name}
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