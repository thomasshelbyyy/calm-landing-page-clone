const BannerCard = ({ path, fill, title, text }) => {
    return (
        <a href="" className="group w-80">
            <svg width="60" height="60" className="mb-6">
                <path d={path} fill={fill} />
            </svg>
            <h3 className="text-3xl text-gray-900 group-hover:text-sky-800 mb-4">{title}</h3>
            <p className="text-lg text-gray-900 mb-5">{text}</p>
            <p className="underline text-gray-900 group-hover:text-sky-800">Learn More</p>
        </a>
    )
}

export default BannerCard