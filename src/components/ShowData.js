import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Api = "http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080/feedback";

const ShowData = () => {
    const [data, setData] = useState([]);
    const [isDeleted, setIsdeleted] = useState(false);
    const navigate = useNavigate();


    const handleDelete = (id) => {
        axios.delete(`${Api}/${id}`).then(res => {
            console.log(res.data);


            setIsdeleted(!isDeleted);  // toggling

        }).catch(err => {
            console.log(err);
        })

    }

    const handleEdit = (ele) => {

        // we will use useNavigate hook to redirect

        navigate('/feedbackedit', { state: ele });

    }

    const getData = () => {
        axios.get(Api).then(res => {

            setData(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {

        getData();

    }, [isDeleted])  // component did mount and component did update together here 


    // better component did update
    /*
    useEffect(()=>{
         
      getData();
    
    },[])  // component did  update
    
    
    // component did update 
    /*
    // We should not use it ,we will talk about it 
    useEffect(()=>{
    
         
      getData();
    
    })  // component did mount
    
    */



    return (
        <Row style={{ marginTop: "40px" }}>
            <Col md={{ span: 6, offset: 3 }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Suggestion</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((ele, i) => (
                                <tr key={ele.id}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.rating}</td>
                                    <td>{ele.suggestion}</td>
                                    <td> <Button variant="info" onClick={() => handleEdit(ele)}>Edit</Button></td>
                                    <td> <Button variant="danger" onClick={() => handleDelete(ele.id)}>Delete</Button></td>
                                </tr>

                            ))
                        }


                    </tbody>
                </Table>
            </Col>

        </Row>
    )
}

export default ShowData