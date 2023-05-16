import {Formik, Form, Field, ErrorMessage} from "formik";
import * as productService from "../service/ProductService";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {findById} from "../service/ProductService";

function ProductEdit() {
    const [type, setType] = useState([])
    let navigate = useNavigate();
    let param = useParams()
    useEffect(() => {
        const getType = async () => {
            let rs = await productService.findAllType()
            setType(rs)
        }
        getType()
    }, [])
    return (
        <>
            <Formik initialValues={{
                name: findById.name,
                date: findById.date,
                soLuong: findById.soLuong,
                typeProduct: 1
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required(),
                        date: Yup.date().required(),
                        soLuong: Yup.number().required()
                    })}
                    onSubmit={(value) => {
                        const edit = async () => {
                            await productService.updateProduct(value);
                            alert("chỉnh sửa thành công");
                            navigate("/")
                        }
                        edit()
                    }}
            >
                <Form>
                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='name'>Tên sản phẩm</label>
                            <Field type='text' name='name' id='name' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='date'>Ngày nhập</label>
                            <Field type='date' name='date' id='date' className='form-control'/>
                        </div>
                        <ErrorMessage name='date' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor='soLuong'>Số lượng</label>
                            <Field type='text' name='soLuong' id='soLuong' className='form-control'/>
                        </div>
                        <ErrorMessage name='soLuong' component='span' className='text-bg-danger'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-group'>
                            <label htmlFor=''>Loại sản phẩm</label>
                            <Field component='select' name='typeProduct' id='typeProduct'>
                                {
                                    type.map((pro, index) => (
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
export default ProductEdit;