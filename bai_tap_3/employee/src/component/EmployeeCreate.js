import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as employeeService from '../service/EmployeeService'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function EmployeeCreate() {
    const [types, setTypes] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        const getType = async () => {
            let result = await employeeService.findAllType();
            setTypes(result)
        }
        getType()
    }, [])
    return (
        <>
            <h1>Employee Create</h1>
            <Formik initialValues={{name: '', level: '', typeEmployee: ''}}
                    validationSchema={Yup.object({
                        name: Yup.string().required('không được để trống')
                    })}
                    onSubmit={(values) => {
                        const create = async () => {
                            await employeeService.save(values)
                            alert('thành công')
                            navigate('/')
                        }
                        create()
                    }}
            >
                <Form>
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

export default EmployeeCreate;