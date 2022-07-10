import { useState } from "react"
import { Container, Form, Button } from "react-bootstrap";
import { RecipeModel } from "../Models/RecipeModel"


const baseUrl = "http://127.0.0.1:8000/api"

export const CreateRecipe = (): JSX.Element => {
    const [recipe, setRecipes] = useState<RecipeModel>({
        name: '',
        products: []
    });


    const handleFormChanges = (event: any) => {
        event.preventDefault()
        setRecipes({
            ...recipe,
            [event.target.name]: event.target.value
        })
    }

    const submitRecipe = () => {
        const request = new Request(baseUrl + '/recipe/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: recipe.name,
                products: recipe.products
            })
        })

        fetch(request)
    }

    return ( 
        <Container>
            <Form onSubmit={submitRecipe}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label style={{paddingRight: '20px'}}>Title</Form.Label>
            <Form.Control
                type="name"
                name="name"
                placeholder="Name"
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
