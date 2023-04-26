import {useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react";
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as productService from "../service/ProductService";
import {Oval} from "react-loader-spinner";
// import {type} from "@testing-library/user-event/dist/type";
// import Oval from "react-loader-spinner/dist/esm/loader/Oval";

function ProductCreate() {
    const [productAdd, setProductAdd] = useState([])
    const [types, setType] = useState([])

    let navigate = useNavigate();
    const getProductTypeList = async () => {
        const productTypeData = await productService.findAllType();
        setType(productTypeData);
    };
    useEffect(() => {
        getProductTypeList();
    }, [])
    if (!types) {
        return null;
    }
    return (
        <>
            <Formik initialValues={{name: '', type: types[0]?.id}}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required("không được bỏ trống"),
                        type: Yup.string()
                            .required("không dược bỏ trống")
                    })}
                    onSubmit={(value, {setSubmitting}) => {
                        const createProduct = async () => {
                            console.log(value)
                            try {
                                await productService.create(value);
                                setProductAdd(value);
                                navigate("/")
                            } catch (e) {
                                console.log(e)
                            }
                            setSubmitting(false);
                        };
                        createProduct();
                    }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>THÊM MỚI SẢN PHẨM</h1>
                        <div className='m-3'>
                            <label htmlFor='productName' className='form-label'>Name</label>
                            <Field type='text' className='form-control' id='productName'
                                   name='name'/>
                            <ErrorMessage name='name' component='spam' className='form-err'/>
                        </div>

                        <div className='item'>
                            <label htmlFor='type'>Loại sản phẩm</label>
                            <Field as='select' name='type'>
                                {types.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {type.type}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        {isSubmitting ? (
                            <Oval
                                height={80}
                                width={80}
                                color="#4fa94d"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                ariaLabel="oval-loading"
                                secondaryColor="#4fa94d"
                                strokeWidth={2}
                                strokeWidthSecondary={2}
                            />
                        ) : (
                            <button type="submit">Submit</button>)}
                    </Form>
                )}

            </Formik>
        </>
    );

}

export default ProductCreate;