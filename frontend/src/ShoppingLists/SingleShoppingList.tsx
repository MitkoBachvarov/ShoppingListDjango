import { useEffect, useState } from "react"
import { Container, Card, ListGroup } from "react-bootstrap"
import { ProductModel } from "../Models/ProductModel"
import { ShoppingListModel } from "../Models/ShoppingListModel"



async function fetchShoppingList(id: any) {
    const baseUrl = "http://127.0.0.1:8000/api"
    const request = new Request(baseUrl + `/shopping/${id}`)
    const responseList: ShoppingListModel = await fetch(request)
        .then(async (response) => await response.json())
    return responseList
}

function fetchAllProducts() {
    const baseUrl = "http://127.0.0.1:8000/api"
    const request = new Request(baseUrl + '/shopping/products')
    const products = fetch(request)
        .then((res) => res.json())
        .then((response) => 
            response.map(
                (p: {id: number, title: string,  description: string }) => new ProductModel(p.id, p.title, p.description)
            ))

    return products
}

export const SingleShoppingList = (): JSX.Element => {
    
    const [item, setItemList] = useState<ShoppingListModel>({
        title: '',
        description: '',
        weekNumber:  0,
        products: []
    });
    const [productList, setProductList] = useState<ProductModel[]>()

    useEffect(() => {
        const params = window.location.pathname
        let id = params.split('/')[2];
        fetchShoppingList(id).then(setItemList)

        fetchAllProducts().then(setProductList)
    }, [])

    return (
        <Container>
        <Card style={{ width: "16rem" }}>
            <ListGroup style={{paddingBottom: "10px"}}>
                <ListGroup.Item key={item?.title}>
                    Name: {item?.title} 
                </ListGroup.Item>
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
            <div> List of products:</div>
            <ListGroup style={{paddingBottom: "10px"}}>
            {productList?.map((list) => (
              <ListGroup.Item key={list?.id}>
                <div> 
                {list.id}: {list.title}
                </div></ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
    </Container>
    )
}


