import {Formik,Field,Form,ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as employeeService from '../service/EmployeeService'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
function EmployeeCreate() {
    const [types,setTypes] = useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        const getType = async ()=>{
            let result = await employeeService.findAllType();
            setTypes(result)
        }
        getType()
    },[])
    return(
        <>
            <h1>Employee Create</h1>
            <Formik initialValues={{name:'',level:'',}}
                    onSubmit={}
                    >

            </Formik>
            </>
    )
}
export default EmployeeCreate;