import React from "react";
import { Form } from "react-bootstrap";
function CustomerSuport() {
    return (
        <>
            <Form style={{marginLeft:"2rem", marginRight:"2rem"}}>
                <Form.Group>
                    <Form.Label> Please send us message:</Form.Label>
                    <Form.Control placeholder="write your message..." as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </>
    )
}

export default CustomerSuport