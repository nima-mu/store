import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "components/layout/Layout";
import Router from "route/Router";
import CartProvider from "services/CartProvider";
import UserProvider from "services/UserProvider";

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
