import React from 'react'
import Hero from '@/components/home/hero'
import People from '@/components/home/people'
import Features from '@/components/home/features'
import Business from '@/components/home/business'
import Payment from '@/components/home/payment'
import Pricing from '@/components/home/pricing'
// import ContactForm from './components/Contact/Form'
import { Metadata } from 'next'
import Blog from '@/components/home/articles'
import Testimonial from '@/components/home/testimonial'
import Location from '@/components/home/location'
import Faq from '@/components/home/faqs'
import ContactForm from '@/components/home/contactForm'
import Footage from '@/components/home/footage'
export const metadata: Metadata = {
  title: 'Paidin',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <People />
      <Payment />
      <Pricing />
      <Footage/>
      <Location/>
      <Testimonial/>
      <Blog/>
      <ContactForm/>
      <Faq/>
      {/* <ContactForm /> */}
    </main>
  )
}
