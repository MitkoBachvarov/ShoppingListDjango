import { useEffect, useState } from "react"
import { Container, Nav, Card, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RecipeModel, RecipeProducts } from "../Models/RecipeModel"

const baseUrl = "http://127.0.0.1:8000/api"


function fetchRecipes() {
    console.log(`fetching: ${baseUrl}`)
    const recipes = fetch(baseUrl + "/recipe")
            .then((res) => res.json())
            .then((response) => 
                response.map(
                    (r: {id: number, name: string, products: Array<RecipeProducts>}) =>
                        new RecipeModel(r.id, r.name, r.products)
                ))

        return recipes;
}

export const Recipe = (): JSX.Element => {
    const [recipeList, setRecipe] = useState<RecipeModel[]>();


    useEffect(() => {
        fetchRecipes().then(setRecipe);
    }, [])


    return (
        <Container>
        <Card style={{ width: "18rem" }}>
            <ListGroup>
            {recipeList?.map((recipe) => (
              <ListGroup.Item key={recipe?.id}>
                <div>
                {recipe.id} : {recipe.name} <NavLink to={''+recipe.id}>Update</NavLink>
                </div>
                <div>
                    {recipe.products.map((product) => (
                        <ListGroup.Item key={product?.name}>
                            {product.name}
                        </ListGroup.Item>
                    ))}
                </div></ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
    </Container>
    )
}
