import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "components/layout/Layout";
import Router from "route/Router";
import CartProvider from "services/CartProvider";
import UserProvider from "services/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import Spinner from "components/spinner/Spinner";

// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  let [show, setShow] = useState(false);
  window.addEventListener("load", () => setShow(true));
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            {show ? (
              <Layout>
                <Router />
              </Layout>
            ) : (
              <Spinner />
            )}
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
