import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function StudentList() {
    const [student,setStudent]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
            axios.get(`http://localhost:8080/students`)
                .then((res)=>{
                    setStudent(res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    );
  return(
      <>
          <h1>Student List</h1>
          <table className='table'>
              <thead>
              <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
              </tr>
              </thead>
              <tbody>
              {
                  student.map((value, index) =>(
                      <tr key={index}>
                          <td>{index}</td>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                      </tr>
                      )
                  )
              }
              </tbody>
          </table>
      </>
  );
}
export default StudentList;