const LinkBlogCard = ({ image, title, category }) => {
    return (
        <a href="#" className="group rounded-lg border border-black" style={{ width: "500px", display: "inline-block" }}>
            <div style={{ width: "100%", height: "14rem", overflow: "hidden" }}>
                <img src={image} alt={title} className="w-full rounded-t-lg" />
            </div>
            <article className="p-8">
                <small className="pb-4 font-semibold text-gray-900">{category}</small>
                <p className="text-lg font-semibold group-hover:text-sky-800">{title}</p>
            </article>
        </a>

    )
}

export default LinkBlogCard