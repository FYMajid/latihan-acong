export default function Location() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                   
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.064593982581!2d108.539089!3d-6.754096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1ddd46ccb755%3A0x85d22bef4ee354f0!2sCakrabhuwana%20Airport!5e0!3m2!1sen!2sus!4v1768462417405!5m2!1sen!2sus" width="600" height="450" loading="lazy" ></iframe>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you re launching a SaaS app, landing page, or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                     <a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
};