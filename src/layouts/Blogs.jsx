import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LinkBlogCard from "../components/LinkBlogCard"
import blogs from "../data/blogs.json"

const Blogs = () => {
    return (
        <div className="p-16">
            <h1 className="text-4xl font-semibold text-sky-800 pb-6 text-center">Check out our blog for more meditation, sleep, stress, and mental health resources.</h1>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {blogs.map(blog => (
                    <SwiperSlide>
                        <LinkBlogCard
                            image={blog.image}
                            title={blog.title}
                            category={blog.category}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-100 flex justify-center py-12">
                <a href="#" className="underline font-bold text-center">See All Blogs</a>
            </div>
        </div>
    )
}

export default Blogs