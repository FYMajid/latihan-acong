export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const featureData: {
  imgSrc: string;
  heading: string;
  paragraph: string;
}[] = [
    {
      imgSrc: "/images/features/time.svg",
      heading: "Cash collection",
      paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
    },
    {
      imgSrc: "/images/features/signal.svg",
      heading: "Insights",
      paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',

    },
    {
      imgSrc: "/images/features/dollar.svg",
      heading: "Payment",
      paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',

    }
  ]

  export const upgradeData: {
    icon: string;
    title: string;
    desc: string;
  }[] = [
  { icon: 'mdi:shield-check', title: 'SAFETY', desc: 'Beroperasi dengan budaya mengutamakan keselamatan.' },
  { icon: 'mdi:thumb-up-outline', title: 'QUALITY', desc: 'Mengejar keunggulan tanpa lelah.' },
  { icon: 'mdi:star-outline', title: 'SERVICE', desc: 'Layanan unggul, sepanjang hari, setiap hari.' },
  { icon: 'mdi:briefcase-check-outline', title: 'PROFESSIONALISM', desc: 'Kami memperhatikan detailnya.' },
  ]

  

export const blogData: {
  imgSrc: string;
  heading: string;
  category: string;
  date: Date;
}[] = [
  {
    imgSrc: "/images/blog/blog1.png",
    heading: "Test post: heading 1 & Title 1",
    category: "Tandem",
    date: new Date("2025-01-10"),
  },
  {
    imgSrc: "/images/blog/blog1.png",
    heading: "Test post: heading 2 & Title 2",
    category: "Belajar Skydive",
    date: new Date("2025-12-20"),
  },
  {
    imgSrc: "/images/blog/blog1.png",
    heading: "Test post: heading 3 & Title 3",
    category: "Tandem",
    date: new Date("2025-09-15"),
  }
  
]


