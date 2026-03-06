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

const HoodyCarousel = () => {
	const products: Product[] = [
		{
			id: 1,
			title: "Pure Press Tee",
			description: "Sustainable, soft, simple & stylish",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/1.webp",
		},
		{
			id: 2,
			title: "Pure Press Tee",
			description: "Sustainable, soft, simple & stylish",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/2.webp",
		},
		{
			id: 3,
			title: "Pure Press Tee",
			description: "Sustainable, soft, simple & stylish",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/3.webp",
		},
		{
			id: 4,
			title: "Pure Press Tee",
			description: "Sustainable, soft, simple & stylish",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/4.webp",
		},
		{
			id: 5,
			title: "Tag & trend Tee",
			description: "Design for the city creator",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/5.webp",
		},
		{
			id: 6,
			title: "Tag & trend Tee",
			description: "Design for the city creator",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/6.webp",
		},
		{
			id: 7,
			title: "Tag & trend Tee",
			description: "Design for the city creator",
			price: 19.99,
			rating: 4.5,
			imageUrl: "/images/landingPage/Hoody/7.png",
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

	return <GenericCarousel items={products} renderItem={renderProductCard} />;
};

export default HoodyCarousel;
