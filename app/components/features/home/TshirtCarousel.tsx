"use client";

import React from "react";
import ProductCard from "@/app/components/ui/card/ProductCard";
import GenericCarousel from "../../ui/carousel/GenericCarousel";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const TshirtCarousel = () => {
  // T-shirts data from BestSellingTshirtSection
  const products: Product[] = [
    {
      id: 1,
      title: "Pure Press Tee",
      description: "Sustainable, soft, simple & stylish",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/1.png",
    },
    {
      id: 2,
      title: "Pure Press Tee",
      description: "Sustainable, soft, simple & stylish",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/2.png",
    },
    {
      id: 3,
      title: "Pure Press Tee",
      description: "Sustainable, soft, simple & stylish",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/3.png",
    },
    {
      id: 4,
      title: "Pure Press Tee",
      description: "Sustainable, soft, simple & stylish",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/4.png",
    },
    {
      id: 5,
      title: "Tag & trend Tee",
      description: "Design for the city creator",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/5.png",
    },
    {
      id: 6,
      title: "Tag & trend Tee",
      description: "Design for the city creator",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/6.png",
    },
    {
      id: 7,
      title: "Tag & trend Tee",
      description: "Design for the city creator",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/7.png",
    },
    {
      id: 8,
      title: "Tag & trend Tee",
      description: "Design for the city creator",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/BestSellingT-Shirt/8.png",
    },
  ];

  const renderProductCard = (product: Product) => (
    <ProductCard
      key={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      rating={product.rating}
      imageUrl={product.imageUrl}
      onAddToCart={() => console.log(`Added ${product.title} to cart`)}
      onWishlistToggle={() => console.log(`Wishlisted ${product.title}`)}
    />
  );

  return (
    <GenericCarousel
      items={products}
      renderItem={renderProductCard}
    />
  );
};

export default TshirtCarousel;
