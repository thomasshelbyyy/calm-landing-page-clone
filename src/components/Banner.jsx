const Banner = () => {
    const style = {
        backgroundImage: "url(/content-tile-collage.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div style={style} className="w-100 h-96">
            <div className="bg-gradient-to-b from-white via-transparent via-10% to-white to-90% w-100 h-full"></div>
        </div>
    )
}

export default Banner