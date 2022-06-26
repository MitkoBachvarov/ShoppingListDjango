import { useState, useEffect } from "react";
import { Card, Container, ListGroup, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ShoppingListModel } from "../Models/ShoppingListModel";

function fetchProducts() {
    const shoppingLists = fetch("http://127.0.0.1:8000/api/shopping/")
            .then((res) => res.json())
            .then((response) => 
                response.map(
                    (p: {id: number, title: string,  description: string; weekNumber: number, products: Array<string> }) => new ShoppingListModel(p.id, p.title, p.description, p.weekNumber, p.products)
                )
            );
    return shoppingLists
}

export const ShoppingList = (): JSX.Element => {
    const [shoppingLists, setProducts] = useState<ShoppingListModel[]>();

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, [])

    return (  
    <Container>
        <Nav.Link href="/shopping/create" style={{paddingBottom: "20px"}}>Create new shopping list</Nav.Link>
        <Card style={{ width: "18rem" }}>
            <ListGroup>
            {shoppingLists?.map((list) => (
              <ListGroup.Item key={list?.id}>
                <div>
                {list.weekNumber} : {list.title} <NavLink to={''+list.id}>Update</NavLink>
                </div></ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
    </Container>
    )}
