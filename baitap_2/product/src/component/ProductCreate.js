import {Formik, Form, Field, ErrorMessage} from "formik";
import * as productService from "../service/ProductService";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function ProductCreate() {
    const [types,setTypes] = useState([])
    let navigate = useNavigate();
    useEffect( ()=>{
        const getType = async ()=>{
            let rs = await productService.findAllType();
            setTypes(rs)
        }
        getType()
    },[])
    return(
      types &&  <>
            <h1 className='text-center'>CREATE PRODUCT</h1>
            <Formik initialValues={{name:'',date:'',productType:1}}
                    validationSchema={Yup.object({
                        name:Yup.string().required("khong duoc bo trong"),
                        date:Yup.date().required(),
                    })}
                    onSubmit={(value)=>{
                        const create = async ()=>{
                            await productService.save(value)
                            alert("them moi de dang")
                            navigate('/')
                        }
                        create()
                    }}
                    >
                <Form>
                    <div className="col-1">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name='name' className='form-control'/>
                        </div>
                        <ErrorMessage name="name" className="text-bg-danger" component="span" />
                    </div>

                    <div className="col-1">
                        <div className="form-group">
                            <label name="date">Date</label>
                            <Field type='text' name="date" className='form-control'/>
                        </div>
                        <ErrorMessage component="span" className="text-bg-danger" name='date'/>
                    </div>

                    <div className="col-1">
                        <div className="form-group">
                            <label htmlFor=''>Product Type</label>
                            <Field as="select" name="productType" id="productType">
                                {
                                    types.map( (pro,index)=>(
                                        <option key={index} value={pro.id}>
                                            {pro.type}
                                        </option>
                                    ))
                                }
                            </Field>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
            </>
    )
}
export default ProductCreate;