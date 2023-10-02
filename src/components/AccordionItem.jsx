import { useState } from "react"

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 border-b border-gray-300 text-lg font-semibold hover:text-sky-700"
            >{title}</button>
            {isOpen && <div className="p-4">{content}</div>}
        </div>
    )
}

export default AccordionItem