import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ProductModel } from "../Models/ProductModel"

const baseUrl = "http://127.0.0.1:8000/api"


export const CreateProduct = (): JSX.Element => {
    const [product, setProduct] = useState<ProductModel>({
        name: '',
        description: ''
    });

    
    const handleFormChanges = (event: any) => {
        event.preventDefault()
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        })
    }

    const submitProduct = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        const request = new Request(baseUrl + "/shopping/products/create/", {
            method: 'POST',
            headers: 
                {"Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                title: product?.name,
                description: product?.description
            })
        })
        fetch(request)
    }

    return (
        <Container style={{marginTop: '15px'}}>
            <Form onSubmit={submitProduct}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label  style={{marginRight: '20px'}}>Title</Form.Label>
            <Form.Control
                style={{marginBottom: '5px'}}
                type="name"
                name="name"
                placeholder="Enter name"
                onChange={handleFormChanges}
            />
            <br/>
            <Form.Label style={{marginRight: '20px'}}>Description</Form.Label>
            <Form.Control
                type="name"
                name="description"
                placeholder="F.e. brand name, quantity"
                onChange={handleFormChanges}
            />
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginTop: '15px'}}>
            Submit
            </Button>
                </Form>
        </Container>
    )
    
}
