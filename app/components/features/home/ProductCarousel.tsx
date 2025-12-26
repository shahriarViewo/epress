"use client";

import React from "react";
import ProductCard from "../../ui/card/ProductCard";
import GenericCarousel from "../../ui/carousel/GenericCarousel";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const ProductCarousel = () => {
  // Mock data for display purposes
  const products: Product[] = [
    {
      id: 1,
      title: "Ink Hustle Cap",
      description: "Hustle hard looks harder",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/1.png",
    },
    {
      id: 2,
      title: "Daily Grind Cup",
      description: "Fuel your hustle in style",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/2.png",
    },
    {
      id: 3,
      title: "Pure Press Tee",
      description: "Sustainable, soft, simple & stylish",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/3.png",
    },
    {
      id: 4,
      title: "Create Mode Cap",
      description: "Switch on your creative vibe",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/4.png",
    },
    {
      id: 5,
      title: "Tag & trend Tee",
      description: "Design for the city creator",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/5.png",
    },
    {
      id: 6,
      title: "Press the Crown",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/6.png",
    },
    {
      id: 7,
      title: "Platinum pour Cup",
      description: "Every sip feels exclusive",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/TopSellingProducts/7.png",
    },
    {
      id: 8,
      title: "Heat Street Series",
      description: "Bold, urban, unapologetic",
      price: 9.99,
      rating: 4.3,
      imageUrl: "/images/landingPage/TopSellingProducts/8.png",
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
      title="New Arrivals"
      subtitle="Fresh off the press."
    />
  );
};

export default ProductCarousel;