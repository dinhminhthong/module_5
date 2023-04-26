import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import {Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router";
import {findAllType} from "../service/BookService";

function BookCreate() {
 const [bookTypes,setBookTypes] =useState([])
    const navigate = useNavigate();
 useEffect( ()=>{
     (async ()=>{
         const bookTypesRes = await findAllType();
         setBookTypes (bookTypesRes.data);
     })
 })
}