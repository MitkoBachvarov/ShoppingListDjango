import { useEffect, useState } from "react";
import { Container, Card, ListGroup, Nav } from "react-bootstrap";
import { ProductModel } from "../Models/ProductModel";

function fetchProducts() {
  const products = fetch("http://127.0.0.1:8000/api/shopping/products")
    .then((res) => res.json())
    .then((response) =>
      response.map(
        (p: { id: number; title: string; description: string }) =>
          new ProductModel(p.id, p.title, p.description)
      )
    );

  return products;
}

export const ProductList = (): JSX.Element => {
  const [products, setProducts] = useState<ProductModel[]>();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Container>
      <Nav.Link href="/create">Add new product</Nav.Link>
      <Card style={{ width: "18rem" }}>
        <ListGroup>
          {products?.map((product) => (
            <ListGroup.Item style={{paddingBottom:"10px"}}>
              <div>
                {product.id} : {product.title}
              </div>
              <div>
                Description: {product.description}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};
