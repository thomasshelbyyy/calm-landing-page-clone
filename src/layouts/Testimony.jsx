import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewCard from "../components/ReviewCard"
import reviews from "../data/reviews.json"

const Testimony = () => {
    return (
        <div className="py-12 px-20">
            <div className="pb-16">
                <h1 className="text-4xl font-semibold text-sky-800 pb-6 text-center">Trusted by the best in the business.</h1>
                <div className="flex justify-center gap-12 flex-wrap">
                    <img src="/logo-nyt.png" alt="logo" className="h-10 w-auto" />
                    <img src="/logo-wsj.png" alt="logo" className="h-10 w-auto" />
                    <img src="/logo-fortune.png" alt="logo" className="h-10 w-auto" />
                    <img src="/logo-today.png" alt="logo" className="h-10 w-auto" />
                    <img src="/logo-cnn.png" alt="logo" className="h-10 w-auto" />
                    <img src="/logo-usatoday.png" alt="logo" className="h-10 w-auto" />
                </div>
            </div>

            <div>
                <h1 className="text-4xl font-semibold text-sky-800 pb-6 text-center">Over 2 million 5-star reviews.</h1>
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {reviews.map(review => (
                            <SwiperSlide>
                                <ReviewCard
                                    review={review.comment}
                                    user={review.user}
                                    city={review.city}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div style={{ backgroundImage: "url(/blue-wave-bg.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-100 py-16 flex flex-col items-center text-center">
                <h1 className="text-4xl font-semibold text-sky-800">Start your free trial of Calm Premium.</h1>
                <div className="flex items-center justify-between w-96 p-4 bg-white border-2 border-sky-800 rounded-lg hover:bg-slate-300 my-6 cursor-pointer relative">
                    <div>
                        <p className="text-lg">Yearly</p>
                        <p className="line-through">Rp. 155.000,00</p>
                        <p>Rp. 689.000,00/yr</p>
                    </div>
                    <div className="text-xl font-medium">
                        Rp. 57.416,67/mo
                    </div>
                    <div className="absolute -top-5 right-3 p-2 text-white bg-sky-950 rounded-lg">14-Day free trial</div>
                </div>
                <p className="text-base text-gray-500 w-96 mb-4">After your free trial, the yearly subscription is Rp 689.000,00 and automatically renews each year until cancelled. <a href="#"> Terms</a> | <a href="#"> Cancel</a> anytime</p>
                <a href="#" className="w-96 py-2 text-2xl bg-sky-800 rounded-full text-white mx-auto">Continue</a>
            </div>
        </div>
    )
}

export default Testimony