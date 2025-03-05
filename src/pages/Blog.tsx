
import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Travel Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.summary}</p>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Beaches in Bali",
    summary: "Discover the most beautiful and serene beaches that Bali has to offer for your next tropical getaway.",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "A Food Tour Through Italy",
    summary: "From pizza in Naples to pasta in Rome, follow our culinary journey through the heart of Italian cuisine.",
    date: "May 22, 2023",
    image: "https://images.unsplash.com/photo-1534649643822-e7544cd8b689?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Hiking the Inca Trail",
    summary: "Everything you need to know before embarking on the famous trek to Machu Picchu in Peru.",
    date: "April 10, 2023",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94901b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Safari Guide: Kenya vs. Tanzania",
    summary: "Compare these two amazing safari destinations to find which one is right for your African adventure.",
    date: "March 5, 2023",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Budget Travel in Southeast Asia",
    summary: "Tips and tricks for exploring Thailand, Vietnam, and Cambodia without breaking the bank.",
    date: "February 18, 2023",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Winter in the Swiss Alps",
    summary: "From skiing to cozy chalets, discover why Switzerland is the perfect winter wonderland destination.",
    date: "January 7, 2023",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=80"
  }
];

export default Blog;
