import { useState } from "react"

const FreeSamples = ({ freeSample }) => {
    const [activeSearch, setActiveSearch] = useState("sleep")
    return (
        <div>
            <div className="flex justify-center gap-4 py-8">
                <button
                    className={`px-4 py-2 text-lg font-semibold rounded-lg ${activeSearch === "sleep" ? "bg-sky-700 text-white" : "bg-gray-300  hover:bg-gray-400 text-gray-800"}`}
                    onClick={() => setActiveSearch("sleep")}
                >
                    Sleep
                </button>

                <button
                    className={`px-4 py-2 text-lg font-semibold rounded-lg ${activeSearch === "stress-anxiety" ? "bg-sky-700 text-white" : "bg-gray-300  hover:bg-gray-400 text-gray-800"}`}
                    onClick={() => setActiveSearch("stress-anxiety")}
                >
                    Stress & Anxiety
                </button>

                <button
                    className={`px-4 py-2 text-lg  font-semibold rounded-lg ${activeSearch === "focus" ? "bg-sky-700 text-white" : "bg-gray-300  hover:bg-gray-400 text-gray-800"}`}
                    onClick={() => setActiveSearch("focus")}
                >
                    Focus
                </button>

                <button
                    className={`px-4 py-2 text-lg  font-semibold rounded-lg ${activeSearch === "relaxation" ? "bg-sky-700 text-white" : "bg-gray-300  hover:bg-gray-400 text-gray-800"}`}
                    onClick={() => setActiveSearch("relaxation")}
                >
                    Relaxation
                </button>

                <button
                    className={`px-4 py-2 text-lg  font-semibold rounded-lg ${activeSearch === "building-habits" ? "bg-sky-700 text-white" : "bg-gray-300  hover:bg-gray-400 text-gray-800"}`}
                    onClick={() => setActiveSearch("building-habits")}
                >
                    Building Habits
                </button>

                <button
                    className={`px-4 py-2 text-lg  font-semibold rounded-lg ${activeSearch === "physical-wellbeing" ? "bg-sky-700 text-white" : "bg-gray-300  hover:bg-gray-400 text-gray-800"}`}
                    onClick={() => setActiveSearch("physical-wellbeing")}
                >
                    Physical Wellbeing
                </button>
            </div>

            {freeSample.map(sample => sample.triger === activeSearch && (
                <div className="flex justify-center items-center gap-16" key={sample.triger}>
                    <div className="w-96 text-center">
                        <h3 className=" text-2xl font-semibold">{sample.title}</h3>
                        <p className="text-lg font-light pb-6 pt-3">{sample.text}</p>
                        <p className="px-4 py-2 bg-slate-200 font-semibold w-fit rounded-lg mx-auto">Free Sample</p>
                        <a href="#" className="text-xl font-semibold pt-5">{sample.audio_title}</a>
                        <p>Narrated by {sample.narrator}</p>
                        <audio controls className="mx-auto">
                            <source src={`${sample.audio_src}`} type="audio/mpeg" />
                        </audio>
                    </div>

                    <div className="w-96 border-gray-400 border-l-4 border-t-4 border-r-4 rounded-tl-2xl rounded-tr-2xl relative">
                        <img src={`${sample.image}`} alt="Harry Potter" className="w-100 rounded-tl-xl rounded-tr-xl" />
                        <div className="absolute bottom-4 text-center text-white w-4/5 left-1/2 transform -translate-x-1/2">
                            <p className="text-lg font-semibold">{sample.audio_title}</p>
                            <p>{sample.image_subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FreeSamples