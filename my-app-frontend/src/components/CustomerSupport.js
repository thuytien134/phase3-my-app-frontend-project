import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function CustomerSuport() {
    let navigate = useNavigate();
    return (
        <>
            <Form style={{marginLeft:"2rem", marginRight:"2rem"}}>
                <Form.Group>
                    <Form.Label> Please send us message:</Form.Label>
                    <Form.Control placeholder="write your message..." as="textarea" rows={3} />
                    <Button onClick={()=> navigate("/thank-you")}>Send</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default CustomerSuport