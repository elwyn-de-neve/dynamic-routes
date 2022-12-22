import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import routes from './routes/routes.json'

function App() {
    const routeElements = routes.map( ( { path, element }, key ) => <Route path={ path } element={ element } key={ key }/> );

    return (
        <>
            <Nav/>
            <Routes>
                { routeElements }
            </Routes>
        </>
    );
}

export default App;
