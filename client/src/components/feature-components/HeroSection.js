import "../../css/HeroSection.css";
export default function HeroSection(){
    return(
        <div id="hero-section">
            <div id="hero-text">
                <div>Title</div>
                <div className="hero-buttons">
                    <button>Play</button>
                    <button>+ My List</button>
                </div>
                <div className="hero-description">
                    Description
                </div>
            </div>
        </div>
    )
}