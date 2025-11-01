import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout 
      currentPage="contact"
      title="Contact Us - Metals Calculator | Get Help & Support"
      description="Contact Metals Calculator for support, questions, or feedback. Get help with our precious metals pricing calculator and professional jewelry valuation tools."
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our metals calculator? We're here to help! Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">support@metalscalculator.com</p>
                  <p className="text-gray-600">info@metalscalculator.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Jewelry Street<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Technical Support</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If you're experiencing technical issues with the calculator, please include details about your 
                    device, browser version, and a description of the problem. This helps us resolve issues more quickly.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Feature Requests</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We're constantly improving our calculator based on user feedback. If you have suggestions for new 
                    features, additional cities, or improvements, we'd love to hear from you. Your input helps us 
                    create a better tool for everyone.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Rate Accuracy Inquiries</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If you notice discrepancies in our rate calculations, please contact us immediately with the specific 
                    details. We take rate accuracy seriously and will investigate any issues promptly. Include the city, 
                    metal type, and date of your calculation for faster resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-lg hover:from-yellow-700 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Contact Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600 leading-relaxed">
                We aim to respond to all inquiries within 24 hours during business days (Monday through Friday). 
                Weekend inquiries are typically answered by the following Monday. For urgent matters, we recommend 
                calling our phone support line for immediate assistance. We prioritize technical issues and rate 
                accuracy concerns to ensure our calculator remains reliable for all users.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I schedule a consultation?</h3>
              <p className="text-gray-600 leading-relaxed">
                While we primarily operate as an online calculator service, we do offer consultation services for 
                jewelry businesses and professional traders who need assistance with bulk calculations or integration 
                requirements. Please contact us through the form above with details about your needs, and we'll arrange 
                a consultation time that works for you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you provide API access?</h3>
              <p className="text-gray-600 leading-relaxed">
                We're currently evaluating API access options for businesses that need to integrate our calculator 
                into their own systems. If you're interested in API access, please contact us with details about your 
                use case, expected volume, and integration requirements. We'll work with you to determine the best 
                solution for your needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I report inaccurate rates?</h3>
              <p className="text-gray-600 leading-relaxed">
                Rate accuracy is crucial to our service. If you believe you've encountered inaccurate rates, please 
                contact us immediately with the following information: the city and state you selected, the metal 
                type (gold/silver), the date and time of your calculation, and the rate that appeared. We investigate 
                all rate discrepancy reports and update our database promptly when issues are confirmed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Partnership and Business Inquiries</h3>
              <p className="text-gray-600 leading-relaxed">
                We're open to partnerships with jewelry retailers, financial institutions, and other businesses that 
                could benefit from our calculator technology. If you're interested in discussing partnership 
                opportunities, white-label solutions, or custom development, please reach out through our contact form 
                with details about your organization and proposed collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Help Resources */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Before You Contact Us</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many questions can be answered by checking our FAQ section on the homepage. We've compiled answers to the 
            most common questions about how the calculator works, rate calculations, GST applications, and more. 
            Before reaching out, we encourage you to browse our FAQ as it may provide immediate answers to your questions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For detailed information about our privacy practices, please review our Privacy Policy. For terms of use 
            and service limitations, see our Terms of Use page. Both documents are accessible through our main navigation 
            menu and footer links.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-yellow-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              View FAQ Section
            </a>
            <a href="/privacy-policy" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-yellow-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Privacy Policy
            </a>
            <a href="/terms" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-yellow-600 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
