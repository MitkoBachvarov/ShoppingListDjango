import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ProductModel } from "../Models/ProductModel"


export const CreateProduct = (): JSX.Element => {
    const [product, setProduct] = useState<ProductModel>({
        title: '',
        description: ''
    });

    const baseUrl = "http://127.0.0.1:8000/api"

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
                title: product?.title,
                description: product?.description
            })
        })
        fetch(request)
    }

    return (
        <Container style={{marginTop: '15px'}}>
            <Form onSubmit={submitProduct}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label  style={{marginRight: '20px'}}>Title</Form.Label>
            <Form.Control
                style={{marginBottom: '5px'}}
                type="title"
                name="title"
                placeholder="Enter title"
                onChange={handleFormChanges}
            />
            <br/>
            <Form.Label style={{marginRight: '20px'}}>Description</Form.Label>
            <Form.Control
                type="title"
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
