import AccordionItem from "./AccordionItem"

const Accordion = ({ title, items }) => {
    return (
        <div className="py-8">
            <h3 className="text-sky-800 font-medium text-2xl">{title}</h3>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    )
}

export default Accordion