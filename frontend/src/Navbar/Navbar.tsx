import { Container, Nav, Navbar as BooststrapNavbar } from 'react-bootstrap';

export const Navbar= (): JSX.Element => ( 
  <Container>
<BooststrapNavbar bg="light" expand="lg">
  <Container>
    <BooststrapNavbar.Brand href="/shopping">Manage your shopping list</BooststrapNavbar.Brand>
    <BooststrapNavbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" style={{paddingBottom: "10px"}}>
        <Nav.Link href="/shopping" style={{paddingRight: '5px'}}>Shopping lists</Nav.Link>
        <Nav.Link href="/products">Products</Nav.Link>
      </Nav>
    </BooststrapNavbar.Collapse>
  </Container>
</BooststrapNavbar>
</Container>
)
