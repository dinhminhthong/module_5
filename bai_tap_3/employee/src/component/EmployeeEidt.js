import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as employeeService from '../service/EmployeeService'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

function EmployeeEidt() {
    const [types, setTypes] = useState([]);
    const [findById,setFindById] =useState(null);
    let navigate = useNavigate();
    let param = useParams();
    useEffect( ()=>{
        const getId = async()=>{
            let result = await employeeService.findById(param.id)
            setFindById(result)
        }
        getId()
    },[param.id])


    useEffect(() => {
        const getEmployeeType = async () => {
            let result = await employeeService.findAllType();
            setTypes(result)
        }
        getEmployeeType()
    }, []);
 if (!findById){
     return null;
 }
    return (
        <>
            <h1>Employee Update</h1>
            <Formik initialValues={{
                id:findById?.id,
                name: findById?.name,
                level: findById?.level,
                typeEmployee: findById?.typeEmployee}}

                    validationSchema={Yup.object({
                        name: Yup.string().required('không được để trống')
                    })}
                    onSubmit={async (values) => {
                        await employeeService.update(values)
                        alert('thành công')
                        navigate('/')
                    }}
            >
                <Form>
                   <Field type='hidden' name='id'/>
                    <div className='col-3'>
                        <div className='form-gruop'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' id='name' type='text' className='form-control'/>
                        </div>
                        <ErrorMessage name='name' id='name' className='text-bg-danger' component='span'/>
                    </div>

                    <div className='col-3'>
                        <div className='form-gruop'>
                            <label htmlFor='level'>Level</label>
                            <Field name='level' id='level' type='text' className='form-control'/>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='form-gruop'>
                            <label htmlFor=''>Type employe</label>
                            <Field name='typeEmployee' id='typeEmployee' component='select' className='form-control'>
                                {
                                    types.map( (ems,index)=>(
                                        <option key={index} value={ems.id}>
                                            {ems.type}
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

export default EmployeeEidt;