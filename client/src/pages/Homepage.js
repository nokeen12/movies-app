import { HeroSection, ShowCarousel } from "../components/feature-components";
import "../css/Homepage.css"
export default function Homepage(){
    return(
        <div id="homepage">
            <HeroSection/>
            <ShowCarousel title="Top Picks For You"/>
            <ShowCarousel title="Action"/>
            <ShowCarousel title="Popular"/>
        </div>
    )
}