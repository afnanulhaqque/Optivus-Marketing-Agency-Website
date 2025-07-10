import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp, Users, Target } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "Optivus Marketing transformed our online presence completely. Their strategic approach to social media marketing helped us increase our engagement by 400% and generated over $2M in new revenue within the first year.",
      rating: 5,
      results: {
        metric: '400%',
        description: 'Increase in social media engagement'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Director, GrowthCorp',
      company: 'GrowthCorp',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "The team at Optivus doesn't just execute campaigns—they become true partners in your success. Their data-driven approach to SEO helped us rank #1 for our most competitive keywords and doubled our organic traffic.",
      rating: 5,
      results: {
        metric: '250%',
        description: 'Increase in organic traffic'
      }
    },
    {
      name: 'Emily Chen',
      role: 'Founder, EcoLiving',
      company: 'EcoLiving',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "Working with Optivus was a game-changer for our sustainable products company. Their comprehensive branding strategy and paid advertising campaigns resulted in a 500% ROI and helped us expand to three new markets.",
      rating: 5,
      results: {
        metric: '500%',
        description: 'Return on investment'
      }
    },
    {
      name: 'David Thompson',
      role: 'Owner, Local Restaurant Group',
      company: 'Thompson Restaurants',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "Optivus helped us navigate the digital transformation of our restaurant business. Their local SEO expertise and social media strategies increased our foot traffic by 60% and online orders by 300%.",
      rating: 5,
      results: {
        metric: '60%',
        description: 'Increase in foot traffic'
      }
    },
    {
      name: 'Lisa Johnson',
      role: 'VP Marketing, FinTech Solutions',
      company: 'FinTech Solutions',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "The expertise and dedication of the Optivus team is unmatched. They helped us launch our new product with an integrated marketing campaign that generated 10,000 qualified leads in just 3 months.",
      rating: 5,
      results: {
        metric: '10,000',
        description: 'Qualified leads generated'
      }
    },
    {
      name: 'Robert Anderson',
      role: 'CEO, Manufacturing Plus',
      company: 'Manufacturing Plus',
      image: 'https://images.pexels.com/photos/1484810/pexels-photo-1484810.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: "Optivus transformed our traditional manufacturing business into a digital-first company. Their B2B marketing strategies and lead generation campaigns increased our sales pipeline by 300% and shortened our sales cycle by 40%.",
      rating: 5,
      results: {
        metric: '300%',
        description: 'Increase in sales pipeline'
      }
    },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Client Satisfaction Rate',
      description: 'Consistently exceeding client expectations'
    },
    {
      icon: Target,
      value: '150%',
      label: 'Average ROI Increase',
      description: 'Measurable results across all campaigns'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Successful Projects',
      description: 'Delivered on time and within budget'
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-accent fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-background via-white to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Client <span className="text-primary">Success Stories</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover how we've helped businesses like yours achieve remarkable growth and success through strategic digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl transition-all duration-500 ${
                  metricsInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{metric.label}</div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real businesses that have transformed their growth with our help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  testimonialsInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Key Result:</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{testimonial.results.metric}</div>
                      <div className="text-sm text-gray-600">{testimonial.results.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Success in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our strategic approach has transformed businesses across various industries.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l6-5z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg">Video Testimonial Coming Soon</p>
                  <p className="text-white/70">Client success story compilation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across various industries, delivering tailored solutions for unique business needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Technology',
              'Healthcare',
              'E-commerce',
              'Manufacturing',
              'Financial Services',
              'Real Estate',
              'Education',
              'Hospitality',
              'Non-Profit',
              'Professional Services',
              'Food & Beverage',
              'Automotive'
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join the ranks of successful businesses that have transformed their growth with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium"
              >
                Start Your Success Story
              </a>
              <a
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-200 font-medium"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;