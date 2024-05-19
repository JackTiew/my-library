import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const libraries = [
        { url: '/redux-sample', name: 'Redux'},
        { url: '/parabola', name: 'Parabola Animation'},
        { url: '/css-animation-play-pause', name: 'Control Animation State With CSS'},
        { url: '/css-animation-delay', name: 'Control Animation With Animation Delay'},
        { url: '/rotate-slideshow', name: 'Rotate Slide Show'},
    ];

    const onNavigate = (obj) => {
        navigate(obj.url);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                {
                    libraries.map(x => (
                            <h1 onClick={() => onNavigate(x)}>{x.name}</h1>
                            
                    ))
                }
            </div>
        </div>
    )
}

export default Home;