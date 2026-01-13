import React from 'react';
import MerchandiseCard from '../../ui/card/MerchandiseCard';

const productData = [
  {
    imageSrc: '/images/landingPage/SparkYour/1.png',
    title: 'Custom T-Shirts',
    description: 'Wear your vision! Vibrant, durable prints perfect for merch, events, or personal flair.',
    priceText: 'From $9.99 – 20% Off Today!',
  },
  {
    imageSrc: '/images/landingPage/SparkYour/2.png',
    title: 'Personalized Mugs',
    description: 'Start your day with a sip of inspiration! Perfect for gifts, merch, or your home office.',
    priceText: 'From $9.99 – 20% Off Today!',
  },
  {
    imageSrc: '/images/landingPage/SparkYour/3.png',
    title: 'Bold Banners',
    description: 'Sip in style with custom mugs that make every moment memorable.',
    priceText: 'Buy 10, Get 2 Free!',
  },
];

const BestsellersSection = () => {
  return (
    <section className="w-full py-16 sm:px-16">
      <div className=" mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1C3F2F] mb-12 text-center">
          Spark Your Brand with Our Bestsellers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {productData.map((product, index) => (
            <MerchandiseCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              priceText={product.priceText}
              buttonText="Shop Now"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
