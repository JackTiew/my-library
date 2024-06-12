import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                {
                    routes.map((route, index) => (
                        <h1 key={index} onClick={() => navigate(route.url)}>{route.name}</h1>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;