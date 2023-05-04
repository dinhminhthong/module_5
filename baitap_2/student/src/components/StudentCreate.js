import {ErrorMessage, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as Yup from "yup"
import * as studentService from "../service/StudentService"

function StudentCreate() {
    const [class2, setClass2] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        const getClassList = async () => {
            const rs = await studentService.findAllClass()
            setClass2(rs)
        }
        getClassList()
    }, [])
    return (
        <>
            <h1 className='text-center'>Thêm mới học sinh</h1>
            <Formik initialValues={{name: '', score: '', className: ''}}
                    validationSchema={Yup.object(
                        {
                            name: Yup.string().required("không đươc bỏ trống nhá bro"),
                            score: Yup.number().required("không được bỏ trống")
                        }
                    )}
                    onSubmit={(value) => {
                        const create =async ()=>{
                            await studentService.save
                        }
                    }}>

            </Formik>
        </>
    )
}