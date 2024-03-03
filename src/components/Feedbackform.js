import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';


const Api = "http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080/feedback";


const Feedbackform = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        suggestion: ""
    })

    const [alertData, setAlertData] = useState();

    const handlechange = (event) => {
        console.log(event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value });

    }

    const handleClick = () => {
        // We will make the api call here
        axios.post(Api, formData).then(result => {
            console.log(result.data);
            setAlertData({
                text: result.data.message,
                variant: "success"
            })
            setFormData({
                name: "",
                email: "",
                rating: "",
                suggestion: ""
            })
            setTimeout(() => {
                setAlertData(undefined);

            }, 3000)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <Row>

                <Col md={{ span: 6, offset: 3 }}>
                    <h2 style={{ textAlign: "center" }}>Feedback form</h2>
                    {
                        alertData ? <Alert key={alertData.variant} variant={alertData.variant}>
                            {alertData.text}
                        </Alert> : ""
                    }

                    <Form.Label >Name</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        onChange={handlechange}
                        value={formData.name}


                    />




                    <Form.Label style={{ marginTop: "10px" }} >Email</Form.Label>
                    <Form.Control
                        type="text"
                        name='email'
                        onChange={handlechange}
                        value={formData.email}


                    />

                    <Form.Label style={{ marginTop: "10px" }} >Rating</Form.Label>
                    <Form.Select aria-label="Rating" name='rating' onChange={handlechange}>
                        <option value="" selected={formData.rating == "" ? true : false}>Select Rating</option>
                        <option value="1" selected={formData.rating == "1" ? true : false} >One</option>
                        <option value="2" selected={formData.rating == "2" ? true : false}>Two</option>
                        <option value="3" selected={formData.rating == "3" ? true : false}>Three</option>
                        <option value="4" selected={formData.rating == "4" ? true : false}>Four</option>
                        <option value="5" selected={formData.rating == "5" ? true : false}>Five</option>
                    </Form.Select>



                    <Form.Label >Suggestions</Form.Label>
                    <Form.Control
                        type="text"
                        name='suggestion'
                        onChange={handlechange}
                        value={formData.suggestion}


                    />


                    <Button variant="primary" style={{ marginTop: "20px" }}
                        onClick={handleClick}
                    >Submit</Button>


                </Col>
            </Row>
        </>


    )
}

export default Feedbackform