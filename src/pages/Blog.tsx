import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp, Search, MessageSquare, Target } from 'lucide-react';

const Blog: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuredPost = {
    title: 'The Future of Digital Marketing: AI and Automation Trends for 2024',
    excerpt: 'Discover how artificial intelligence and automation are reshaping the digital marketing landscape and what it means for your business strategy.',
    author: 'Afnan Ul Haq',
    date: 'January 15, 2024',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Industry Trends',
    slug: 'future-digital-marketing-ai-automation-2024'
  };

  const blogPosts = [
    {
      title: 'SEO in 2024: Core Web Vitals and User Experience Optimization',
      excerpt: 'Learn how to optimize your website for Google\'s Core Web Vitals and improve user experience to boost your search rankings.',
      author: 'Sarah Johnson',
      date: 'January 12, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'SEO',
      slug: 'seo-2024-core-web-vitals-user-experience'
    },
    {
      title: 'Social Media Marketing: Building Authentic Brand Communities',
      excerpt: 'Strategies for creating genuine connections with your audience and building a loyal community around your brand.',
      author: 'Emma Rodriguez',
      date: 'January 10, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Social Media',
      slug: 'social-media-marketing-authentic-brand-communities'
    },
    {
      title: 'Email Marketing ROI: Maximizing Returns with Personalization',
      excerpt: 'How to leverage data and personalization to increase your email marketing ROI and drive better customer engagement.',
      author: 'Michael Chen',
      date: 'January 8, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Email Marketing',
      slug: 'email-marketing-roi-personalization'
    },
    {
      title: 'Content Marketing Strategy: From Planning to Performance',
      excerpt: 'A comprehensive guide to developing and executing a content marketing strategy that drives results.',
      author: 'Lisa Park',
      date: 'January 5, 2024',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Content Marketing',
      slug: 'content-marketing-strategy-planning-performance'
    },
    {
      title: 'PPC Advertising: Advanced Strategies for Better Conversion Rates',
      excerpt: 'Take your paid advertising to the next level with advanced targeting and optimization techniques.',
      author: 'David Kim',
      date: 'January 3, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'PPC',
      slug: 'ppc-advertising-advanced-strategies-conversion-rates'
    },
    {
      title: 'Brand Storytelling: Connecting with Your Audience Emotionally',
      excerpt: 'Learn how to craft compelling brand stories that resonate with your audience and drive engagement.',
      author: 'Rachel Thompson',
      date: 'December 28, 2023',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Branding',
      slug: 'brand-storytelling-emotional-audience-connection'
    },
  ];

  const categories = [
    { name: 'All', icon: Target, count: 12 },
    { name: 'SEO', icon: Search, count: 3 },
    { name: 'Social Media', icon: MessageSquare, count: 4 },
    { name: 'Industry Trends', icon: TrendingUp, count: 5 },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-background via-white to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Marketing <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Stay ahead of the curve with expert insights, industry trends, and actionable strategies to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium group"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <category.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium text-gray-900">{category.name}</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover actionable insights and strategies to elevate your marketing game.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                    postsInView ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Marketing Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter and get the latest marketing tips, trends, and strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;