import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import * as employeeService from "../service/EmployeeService"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

function EmployeeCreate() {
    const [types, setTypes] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        const getType = async () => {
            let rs = await employeeService.findAllType();
            setTypes(rs);
        }
        getType()
    }, [])
    return (
      types&&  <>
            <h1 className="text-center">Create</h1>
            <Formik initialValues={{name: '', level: '', typeEmployee: 1}}
                    validationSchema={Yup.object({
                        name: Yup.string().required("không được để trống"),
                        level: Yup.string().required(("không được để trống")),
                    })}
                    onSubmit={(value) => {
                        const create = async () => {
                            await employeeService.save(value)
                            alert("thêm mới thành công")
                            navigate('/')
                        }
                        create();
                    }}
            >
                <Form>
                    <div className="col-1">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field type="text" name='name' className='form-control'/>
                        </div>
                        <ErrorMessage name="name" className="text-bg-danger" component="span"/>
                    </div>

                    <div className="col-1">
                        <div className="form-group">
                            <label htmlFor="level">Level</label>
                            <Field type="text" name='level' className='form-control'/>
                        </div>
                        <ErrorMessage name="level" className="text-bg-danger" component="span"/>
                    </div>

                    <div className='col-1'>
                        <div className="form-group">
                            <label htmlFor="typeEmployee">Type Employee</label>
                            <Field as ="select" name="typeEmployee" >
                                {
                                    types.map((loai, index) => (
                                        <option key={index} value={loai.id}>
                                            {loai.type}
                                        </option>
                                    ))
                                }
                            </Field>
                            {/*<Field  as="select"  name="typeEmployee" id="typeEmployee">*/}
                            {/*    {*/}
                            {/*        types.map((loai, index) => (*/}
                            {/*            <option key={index} value={loai.id}>*/}
                            {/*                {loai.type}*/}
                            {/*            </option>*/}
                            {/*        ))*/}
                            {/*    }*/}
                            {/*</Field>*/}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>

            </Formik>
        </>
    )
}

export default EmployeeCreate;