import Image from 'next/image'
import { Icon } from '@iconify/react'
import { upgradeData } from '@/app/api/data'



const Upgrade = () => {
  return (
    <section className='py-20 bg-white' id='upgrade'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* IMAGE */}
          <div className='order-1 lg:order-none'>
            <Image
              src='/images/upgrade.png'
              alt='Skydiving Experience'
              width={800}
              height={600}
              className='rounded-xl w-full h-auto object-cover'
              priority
            />
          </div>

          {/* CONTENT */}
          <div>
            <h2 className='text-4xl md:text-5xl font-semibold text-slate-700 mb-6'>
              SAFETY-FOCUSED, VALUES DRIVEN
            </h2>
            <p className='text-slate-500 mb-10 leading-relaxed'>
              Bro Skydive Indonesia bukanlah DROP ZONE biasa. Kami termasuk yang pertama di industri ini yang berfokus pada pengalaman pelanggan menyeluruh dan secara sengaja mengutamakan nilai-nilai inti kami. Kami menyediakan Tim, Peralatan dan Pesawat terbaik dengan standar regulasi tinggi.
            </p>

            <div className='grid sm:grid-cols-2 gap-8'>
              {upgradeData.map((item, index) => (
                <div key={index} className='flex gap-4'>
                  <Icon icon={item.icon} width={28} height={28} className='text-indigo-500 flex-shrink-0' />
                  <div>
                    <h3 className='font-semibold text-slate-700'>{item.title}</h3>
                    <p className='text-slate-500 text-sm'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className='mt-10 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition'>
              BOOK NOW!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upgrade