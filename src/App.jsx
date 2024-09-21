import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "components/layout/Layout";
import Router from "route/Router";
import CartContext from "services/CartProvider";

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
