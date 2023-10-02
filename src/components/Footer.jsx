const Footer = () => {
    return (
        <div className="p-12 bg-sky-800">
            <div className="flex flex-wrap justify-around pb-8">
                <div>
                    <p className="text-lg font-semibold text-white pb-3">Company</p>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Careers</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Press</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Blog</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Meet Our Instructor</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Calm Science</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold text-white pb-3">Offers</p>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Buy a Gift</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Redeem a Gift</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Family Plan</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Calm Health</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Calm Business</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg font-semibold text-white pb-3">Help</p>
                    <ul>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">FAQ</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Contact Us</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Terms</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Privacy</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">CCPA Notice</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Accessibillity Statement</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Opt out of targeted Ads</a></li>
                        <li><a href="#" className="hover:text-gray-400 pb-1 text-gray-200 transition duration-300">Cookies</a></li>
                    </ul>
                </div>
            </div>

            <p className="text-center text-gray-400">Copyright © 2023 Calm. All rights reserved</p>
        </div>
    )
}

export default Footer