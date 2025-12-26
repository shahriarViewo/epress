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
  // Caps data from OurFeaturedCaps component
  const products: Product[] = [
    {
      id: 1,
      title: "Visionary Crown Cap",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/1.png",
    },
    {
      id: 2,
      title: "Press the Crown",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/2.png",
    },
    {
      id: 3,
      title: "Limitless Ink Cap",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/3.png",
    },
    {
      id: 4,
      title: "The Innovator Cap",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/4.png",
    },
    {
      id: 5,
      title: "PressPower Snap Cap",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/5.png",
    },
    {
      id: 6,
      title: "Create Mode Cap",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/6.png",
    },
    {
      id: 7,
      title: "DreamPress Heat Cap",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/7.png",
    },
    {
      id: 8,
      title: "Press the Crown",
      description: "Street energy, OnePrint precision",
      price: 9.99,
      rating: 4.5,
      imageUrl: "/images/landingPage/cap/8.png",
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