// React router dom
import { Route, Routes } from "react-router-dom";
// Import pages
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Auth/AuthPage";
import ForgetPasswordPage from "./pages/Auth/ForgetPasswordPage";
import AllCategoriesPage from "./pages/Categories/AllCategoriesPage";
import AllProductsPage from "./pages/products/AllProductsPage";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import FavoritePage from "./pages/Favorite/FavoritePage";
import CartPage from "./pages/Cart/CartPage";
import AccountPage from "./pages/Account/AccountPage";
import EditAccountPage from "./pages/Account/EditAccountPage";
import AddressPage from "./pages/Address/AddressPage";
import AddAddressPage from "./pages/Address/AddAddressPage";
import EditAddressPage from "./pages/Address/EditAddressPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import ReturnsPage from "./pages/Returns/ReturnsPage";
// Import components auth
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Message from "./components/Auth/Message";
import Email from "./components/Auth/Email";
// Import Global file css
import "./App.css";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/forget-password/*" element={<ForgetPasswordPage />}>
          <Route path="sms" element={<Message />} />
          <Route path="email" element={<Email />} />
        </Route>
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/edit-account" element={<EditAccountPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/add-address" element={<AddAddressPage />} />
        <Route path="/edit-address/:id" element={<EditAddressPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
};

export default App;
