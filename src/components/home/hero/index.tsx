'use client'
import Link from 'next/link'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Banner = () => {
  return (
    <Parallax speed={-20}>
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/images/banner.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="container relative z-20 h-full flex items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl leading-tight text-white mb-6">
              Smarter Spending Starts Here.
            </h1>

            <p className="text-white/80 text-lg mb-8">
              Track your expenses, manage your cards, and never miss a bill —
              all in one powerful, intuitive app. With PaidIn, your money
              works for you.
            </p>

            <Link href="/#pricing">
              <button className="text-white text-xl font-medium py-4 px-8 rounded-full border border-primary bg-primary hover:bg-transparent hover:text-primary transition">
                Get started
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-sm tracking-widest mb-2">SCROLL</span>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown size={28} />
          </motion.div>
        </motion.div>
      </section>
    </Parallax>
  )
}

export default Banner
