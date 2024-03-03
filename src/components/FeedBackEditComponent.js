import React, { useState, useEffect } from 'react'
import CustomForm from './common/CustomForm'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import { useLocation } from 'react-router-dom';

const Api = "http://ubuntu@ec2-13-58-234-56.us-east-2.compute.amazonaws.com:8080/feedback";


const FeedBackEditComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        suggestion: "",
        id: ""
    })

    const [alertData, setAlertData] = useState();
    // if you want to get data from the url you have to useLocation

    const { state } = useLocation();
    const handlechange = (event) => {
        console.log(event.target.name);
        setFormData({ ...formData, [event.target.name]: event.target.value });

    }

    const handleClick = () => {
        // We will make the api call here
        axios.put(Api, formData).then(result => {
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

    //  component did mount part
    useEffect(() => {
        setFormData(state)
    }, [])


    return (
        <div>
            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h2 style={{ textAlign: "center" }}>Feedback form</h2>
                    {
                        alertData ? <Alert key={alertData.variant} variant={alertData.variant}>
                            {alertData.text}
                        </Alert> : ""
                    }
                    <CustomForm formData={formData} handleClick={handleClick} handlechange={handlechange} />

                </Col>
            </Row>

        </div>
    )
}

export default FeedBackEditComponent