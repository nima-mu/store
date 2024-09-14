import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "components/layout/Layout";
import Router from "route/Router";
import products from "constants/productsConstant";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
