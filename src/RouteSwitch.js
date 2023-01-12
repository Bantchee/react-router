import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Profile from "./Profile";
import Shop from "./Shop";
import ItemDetail from "./ItemDetail";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ItemDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;