import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Search, 
  Megaphone, 
  PenTool, 
  Mail, 
  BarChart3, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: MessageSquare,
      title: 'Social Media Marketing',
      description: 'Build your brand presence across all major social platforms with strategic content and community management.',
      features: [
        'Content strategy and creation',
        'Community management',
        'Social advertising campaigns',
        'Influencer partnerships',
        'Performance analytics and reporting'
      ],
      caseStudy: {
        client: 'Fashion Brand X',
        result: '300% increase in engagement',
        metric: '50K new followers in 6 months'
      }
    },
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your search rankings and drive organic traffic with comprehensive SEO strategies.',
      features: [
        'Technical SEO audits',
        'Keyword research and strategy',
        'On-page optimization',
        'Link building campaigns',
        'Local SEO optimization'
      ],
      caseStudy: {
        client: 'Local Restaurant Chain',
        result: '250% increase in organic traffic',
        metric: '#1 ranking for 15 target keywords'
      }
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising Campaigns',
      description: 'Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other platforms.',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'LinkedIn advertising',
        'Display and retargeting campaigns',
        'Campaign optimization and A/B testing'
      ],
      caseStudy: {
        client: 'E-commerce Store',
        result: '400% return on ad spend',
        metric: '$2.5M in attributed revenue'
      }
    },
    {
      icon: PenTool,
      title: 'Branding & Logo Design',
      description: 'Create compelling brand identity and visual assets that resonate with your target audience.',
      features: [
        'Brand strategy development',
        'Logo and visual identity design',
        'Brand guidelines creation',
        'Marketing collateral design',
        'Website and digital asset design'
      ],
      caseStudy: {
        client: 'Tech Startup',
        result: '60% brand recognition increase',
        metric: 'Complete brand overhaul in 8 weeks'
      }
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build lasting customer relationships with personalized email campaigns that drive conversions.',
      features: [
        'Email campaign design and development',
        'Marketing automation setup',
        'List segmentation and personalization',
        'A/B testing and optimization',
        'Performance tracking and analytics'
      ],
      caseStudy: {
        client: 'SaaS Company',
        result: '45% open rate improvement',
        metric: '25% increase in customer retention'
      }
    },
    {
      icon: BarChart3,
      title: 'Strategy & Consultancy',
      description: 'Data-driven insights and strategic planning to optimize your entire marketing ecosystem.',
      features: [
        'Marketing strategy development',
        'Competitive analysis',
        'Customer journey mapping',
        'Performance audits and optimization',
        'Growth strategy consulting'
      ],
      caseStudy: {
        client: 'B2B Manufacturing',
        result: '180% lead generation increase',
        metric: 'Complete marketing transformation'
      }
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-background via-white to-primary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${heroInView ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Comprehensive digital marketing solutions designed to accelerate your business growth and maximize your online potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  servicesInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="bg-primary/5 p-8 rounded-2xl">
                      <service.icon className="h-16 w-16 text-primary mb-6" />
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Study</h3>
                        <p className="text-primary font-medium">{service.caseStudy.client}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-primary to-primary-dark p-6 rounded-lg text-white">
                          <div className="text-2xl font-bold mb-2">{service.caseStudy.result}</div>
                          <div className="text-sm opacity-90">{service.caseStudy.metric}</div>
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                        >
                          Get Similar Results
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your business, goals, and target audience to create a strategic foundation.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive marketing strategy tailored to your specific objectives.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute campaigns with precision, monitoring performance and optimizing continuously.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Analyze results and refine strategies to maximize ROI and achieve better outcomes.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/testimonials"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-200 font-medium"
              >
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;