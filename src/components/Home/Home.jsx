import Graphics from "../Graphics/Graphics";
import Marketing from "../Marketing/Marketing";
import Slider from "../Slider/Slider";
import Web from "../Web/Web";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Web></Web>
            <Marketing></Marketing>
            <Graphics></Graphics>
        </div>
    );
};

export default Home;