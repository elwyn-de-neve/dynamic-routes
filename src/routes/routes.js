import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const routes = [
    {
        title : "Home",
        element : <Home/>,
        path : "/"
    },
    {
        title : "About",
        element : <About/>,
        path : "/about"
    },
    {
        title : "Contact",
        element : <Contact/>,
        path : "/contact"
    }
]