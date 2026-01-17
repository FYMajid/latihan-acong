import { NextResponse } from 'next/server'

import { headerItem } from '@/types/menu'
import { featureData } from '@/types/featuredata'
import { socialLinksData } from '@/types/sociallinks'
import { plansData } from '@/types/plans'
import { footerlLinksData } from '@/types/footerlinks'
import { TestimonialType } from '@/types/testimonial'
import { articles } from '@/types/articles'
import { CourseType } from '@/types/course'

const HeaderData: headerItem[] = [
  { label: 'Skydiving', href: '/#product' },
  { label: 'Price', href: '#',
    submenu: [
      {label:'Harga', href:'/'},
      {label:'Promo Spesial', href:'/'},
      {label:'Paket Perayaan', href:'/'},
      {label:'Sertifikat Hadiah', href:'/'},
    ]
   },
  { label: 'About', href: '# ',
    submenu: [
      {label:'About Us' ,href:'#'},
      {label:'Our Facilities' ,href:'#'},
      {label:'Our Aircraft' ,href:'#'},
      {label:'Our Team' ,href:'#'},
    ]
   },
  { label: 'Blog', href: '/documentation' },
  { label: 'Contact', href: '/#contact ' },
]



const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Unpaid Bill Alerts',
    paragraph:
      'Never miss a due date again. Get instant alerts for upcoming payments. Stay on top of your bills, effortlessly.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Spending Insights',
    paragraph:
      'Track where your money goes. See spending by category. Make smarter choices with clear insights.',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Card Management',
    paragraph:
      'Link all your cards. Track balances and activity. Manage everything in one dashboard.',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: 'UX/UI Designer',
    name: 'Andrew Williams',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Cristian Doru Barin',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Tanzeel Ur Rehman',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
  {
    profession: 'UX/UI Designer',
    name: 'Andrew Williams',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail:
      "I have been a Junior Graphic Designer for more then 10 years. Some things are problem that I had and teach how to solve them. That's why this course is so great!",
  },
]


const PlansData: plansData[] = [
  {
    heading: 'Lite',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'Basic invoice generation',
      'Downloadable PDF invoice',
      'Unlimited transactions',
      'Emails for all the updates',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Lite features',
      'Custom invoice templates',
      'Tax calculation support',
      'Automatic invoice reminders',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Plus',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Basic features',
      'Multi-currency support',
      'Invoice payment tracking',
      'Priority customer support',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Product', href: '/#product' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Features', href: '/#features ' },
  { label: 'Contact Us', href: '/#contact ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

const ArticlesData: articles[] = [
  {
    category: 'tandem skydiving',
    heading: 'We Launch Delia',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    category: 'belajar skydiving',
    heading: 'We Launch Delia',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    category: 'belajar skydiving',
    heading: 'We Launch Delia',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    category: 'tandem skydiving',
    heading: 'We Launch Delia',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    category: 'belajar skydiving',
    heading: 'We Launch Delia',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    category: 'tandem skydiving',
    heading: 'We Launch Delia',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

const CourseData: CourseType[] = [
  {
    heading: '(MERN) Full-Stack Development',
    name: 'James Nolan',
    imgSrc: '/images/courses/mern.webp',
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.4,
  },
  {
    heading: 'Design Systems with React',
    name: 'Elena Brooks',
    imgSrc: '/images/courses/react.webp',
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.5,
  },
  {
    heading: 'Create Stunning Banners in Figma',
    name: 'Aria Kim',
    imgSrc: '/images/courses/UiUx.webp',
    students: 120,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
  {
    heading: 'Build & Launch a Webflow Website',
    name: 'Marcus Lee',
    imgSrc: '/images/courses/webflow.webp',
    students: 150,
    classes: 12,
    price: 20,
    rating: 5.0,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
    TestimonialData,
    ArticlesData,
    CourseData,
    // headerDataFooter
  })
}
