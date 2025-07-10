import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Target, 
  Award,
  Search,
  MessageSquare,
  PenTool,
  Megaphone,
  Mail,
  BarChart3
} from 'lucide-react';

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: MessageSquare,
      title: 'Social Media Marketing',
      description: 'Engage your audience across all major platforms with strategic content and campaigns.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.',
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Maximize ROI with targeted advertising campaigns across Google, Facebook, and more.',
    },
    {
      icon: PenTool,
      title: 'Branding & Design',
      description: 'Create compelling brand identity and visual assets that resonate with your audience.',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build lasting relationships with personalized email campaigns that convert.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Strategy',
      description: 'Data-driven insights and strategic planning to optimize your marketing efforts.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '98%', label: 'Success Rate' },
    { number: '5M+', label: 'Leads Generated' },
    { number: '150%', label: 'Avg. ROI Increase' },
  ];

  const clients = [
    'TechCorp', 'InnovateLab', 'GrowthCo', 'SuccessInc', 'VisionaryBrands', 'NextGenSolutions'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-background via-white to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Drive Growth with
                <span className="text-primary"> Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your business with data-driven marketing strategies that deliver measurable results and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-200 font-medium flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-medium"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  statsInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  servicesInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-gray-400 hover:text-primary transition-colors duration-200">
                  {client}
                </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have accelerated their growth with our proven marketing strategies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium group"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;