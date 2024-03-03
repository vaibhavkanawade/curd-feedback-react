import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CustomForm = ({ handlechange, formData, handleClick }) => {
    return (
        <div>

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
                <option value="" selected={formData.rating === "" ? true : false}>Select Rating</option>
                <option value="1" selected={formData.rating === "1" ? true : false} >One</option>
                <option value="2" selected={formData.rating === "2" ? true : false}>Two</option>
                <option value="3" selected={formData.rating === "3" ? true : false}>Three</option>
                <option value="4" selected={formData.rating === "4" ? true : false}>Four</option>
                <option value="5" selected={formData.rating === "5" ? true : false}>Five</option>
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

        </div>
    )
}

export default CustomForm