'use client'
import Image from 'next/image'
import { GlobalReachData } from './data'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'

const People = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  })

  return (
    <Parallax speed={20}>
      <section className="relative mt-0 pt-25 pb-20 bg-white z-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <p className="italic text-sm tracking-widest text-gray-500 mb-4">
                RATED #1
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                TEMUKAN MENGAPA RIBUAN ORANG
                <br />
                <span className="italic font-semibold">
                  MEMPERCAYAYAI BRO SKYDIVE INDONESIA
                </span>
              </h2>

              <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-8 py-4 rounded-lg">
                BOOK NOW!
              </button>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-6">
              <p className="text-lg text-black/70 leading-relaxed mb-10">
                BRO Skydive Indonesia adalah wadah bagi petualangan yang khusus
                dalam pengalaman terjun payung profesional dan aman di berbagai
                destinasi paling menakjubkan di Indonesia.
                <br /><br />
                Dengan instruktur bersertifikat internasional dan peralatan
                berkualitas tinggi, kami menghadirkan pengalaman yang melampaui
                sekadar kegembiraan.
              </p>

              {/* STATS */}
              <div className="flex flex-col sm:flex-row gap-10 justify-between">
                {GlobalReachData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 bg-white py-4 md:py-8 px-5 md:px-6 rounded-md shadow-md"
                  >
                    <h3
                      ref={ref}
                      className="text-3xl font-black text-primary"
                    >
                      {item.prefix && item.prefix}
                      {item.count === 247
                        ? '24/7'
                        : inView
                        ? <CountUp start={0} end={item.count} duration={3} />
                        : '0'}
                      {item.postfix && item.postfix}
                    </h3>
                    <p className="text-[#3c3c3c]">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Parallax>
  )
}

export default People
