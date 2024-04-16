import BigCard from "../components/LandingPage/BigCard"
import ImgCard from "../components/LandingPage/ImgCard"
import RandomCard from "../components/LandingPage/RandomCard"
import Title from "../components/LandingPage/Title"

const Landingpage = () => {
    return (
        <div>
            <Title />
            <BigCard />
            <RandomCard />
            <ImgCard />
            <div>
                <button></button>
            </div>
        </div>
    )
}

export default Landingpage