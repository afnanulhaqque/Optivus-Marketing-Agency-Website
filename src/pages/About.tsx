import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Award, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const teamMembers = [
    {
      name: 'Afnan Ul Haq',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years of experience in digital marketing and business strategy.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Strategy',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data-driven strategist specializing in performance marketing and growth optimization.',
    },
    {
      name: 'Michael Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer with expertise in brand identity and visual storytelling.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Digital Marketing Manager',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Social media expert focused on community building and engagement strategies.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your business growth and success.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships based on trust and transparency.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and leverage cutting-edge tools and strategies.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as an extension of your team, fostering open communication and shared goals.',
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
                About <span className="text-primary">Optivus</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're a team of passionate digital marketing professionals dedicated to helping businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, Optivus Marketing emerged from a simple belief: every business deserves to reach its full potential through strategic digital marketing. What started as a small consultancy has grown into a full-service digital marketing agency.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began when our founder, Afnan Ul Haq, recognized the growing gap between traditional marketing approaches and the digital-first world. With a vision to bridge this gap, we've helped over 500 businesses transform their online presence and achieve remarkable growth.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower businesses with innovative digital marketing strategies that drive growth, build brand awareness, and create lasting customer relationships. We believe in the power of data-driven decisions and creative excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <TrendingUp className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading digital marketing agency that transforms businesses through innovative strategies, cutting-edge technology, and exceptional client service. We envision a future where every business can achieve its digital potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together creativity, strategy, and technical expertise to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                  teamInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center group ${
                  valuesInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We believe in fostering a collaborative, innovative, and inclusive environment where creativity thrives and every team member can reach their potential.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-white/80">We encourage experimentation and embrace new ideas that push boundaries.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
                <p className="text-white/80">We support our team's well-being with flexible work arrangements and time off.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-white/80">We invest in our team's growth through training and professional development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;