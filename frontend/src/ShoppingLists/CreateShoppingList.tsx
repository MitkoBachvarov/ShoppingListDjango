import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap";
import { ShoppingListModel } from "../Models/ShoppingListModel"


export const CreateShoppingList = (): JSX.Element => {
    const [list, setList] = useState<ShoppingListModel>({
        title: '',
        weekNumber: 0,
        description: '',
        products: []
    });

    const baseUrl = "http://127.0.0.1:8000/api"

    const handleFormChanges = (event:any) => {
        event.preventDefault()
        setList({
            ...list,
           [event.target.name]: event.target.value,
            })
    }

    const submitShoppingList = () => {
        console.log(`Title: ${list.title}`)
        const request = new Request(baseUrl + '/shopping/create/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: list?.title,
                description: list?.description,
                weekNumber: list?.weekNumber,
                products: list?.products
            })
        })
        console.log(`Sending request: ${list?.weekNumber}`)
        fetch(request)
    }

    return (
        <Container>
            <Form onSubmit={submitShoppingList}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label style={{paddingRight: '20px'}}>Title</Form.Label>
            <Form.Control
                type="title"
                name="title"
                placeholder="Title"
                onChange={handleFormChanges}
            />
            <br/>
            <Form.Label style={{paddingRight: '20px'}}>Description:</Form.Label>
            <Form.Control  
                type="description"
                name="description"
                placeholder="Description"
                onChange={handleFormChanges} 
            />
            <br/>
            <Form.Label style={{paddingRight: '20px'}}>Week number</Form.Label>
            <Form.Control  type="number"
                name="weekNumber"
                placeholder="Number of week this shopping list is for"
                onChange={handleFormChanges} 
            />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
                </Form>
        </Container>
    )
}
