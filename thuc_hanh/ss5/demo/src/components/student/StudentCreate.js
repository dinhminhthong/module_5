import React from "react";
import {ErrorMessage,Field,Form,Formik} from "formik";
import * as Yup from 'yup';

function StudentCreate() {
    return(
        <>
            <Formik
    initiaValue ={{name: '', age: '', gender: '', lagnuages: []}}
    validationSchema={Yup.object({})}
    >
        </>
    )

}
export default StudentCreate;