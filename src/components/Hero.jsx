import imgae from "/jasper-lake-hero-banner.jpeg"

const Hero = () => {
    const style = {
        backgroundImage: `url(${imgae})`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "screen"
    }
    return (
        <div style={{ width: "100%", height: "500px" }}>

        </div>
    )
}

export default Hero