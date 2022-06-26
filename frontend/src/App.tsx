import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { ProductList } from "./Products/Products";
import { CreateProduct } from "./Products/CreateProduct";
import { ShoppingList } from "./ShoppingLists/ShoppingList";
import { CreateShoppingList } from "./ShoppingLists/CreateShoppingList";
import { SingleShoppingList } from "./ShoppingLists/SingleShoppingList";

export const App = (): JSX.Element => (
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="create" element={<CreateProduct />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/shopping/create" element={<CreateShoppingList />} />
        <Route path="/shopping/:id" element={<SingleShoppingList />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
