import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';
import Layout from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout 
      currentPage="privacy"
      title="Privacy Policy - Metals Calculator | Data Protection & Privacy"
      description="Read our privacy policy to understand how Metals Calculator collects, uses, and protects your personal information when using our precious metals pricing calculator."
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="text-yellow-600" size={40} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Metals Calculator, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <UserCheck className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Personal Information</h3>
                    <p className="text-gray-600 text-sm">
                      Name, email address, and contact information when you contact us or create an account.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <Database className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Usage Data</h3>
                    <p className="text-gray-600 text-sm">
                      Information about how you use our calculator, including calculations performed and features accessed.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <Eye className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Device Information</h3>
                    <p className="text-gray-600 text-sm">
                      IP address, browser type, device type, and operating system information.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <Lock className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Cookies & Tracking</h3>
                    <p className="text-gray-600 text-sm">
                      Cookies and similar tracking technologies to enhance your experience and analyze usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide and maintain our calculator services</li>
                <li>To process your requests and provide customer support</li>
                <li>To improve our website functionality and user experience</li>
                <li>To send you important updates about our services</li>
                <li>To analyze usage patterns and optimize our platform</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Data portability and restriction of processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, 
                and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies for various purposes including authentication, preferences, analytics, and advertising. 
                Third-party services such as Google AdSense, Media.net, and Adsterra may also use cookies to serve personalized 
                advertisements based on your browsing behavior and interests.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Google AdSense and Third-Party Advertising</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Metals Calculator uses Google AdSense, a third-party advertising service provided by Google LLC. Google AdSense 
                uses cookies and web beacons to serve personalized advertisements based on your visits to our website and other 
                websites on the internet. This helps us provide free access to our calculator services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Google AdSense may collect and use information about your visits to this and other websites to provide relevant 
                advertisements about goods and services. This information may include your IP address, browser type, device 
                information, and browsing patterns. Google's use of advertising cookies enables it and its partners to serve 
                ads to you based on your visit to our site and/or other sites on the Internet.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                In addition to Google AdSense, we may also use other third-party advertising networks including Media.net and 
                Adsterra. These services may use cookies, web beacons, and similar technologies to collect information about your 
                online activities across different websites to provide you with relevant advertisements.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Opt-Out Options:</strong> You can opt out of personalized advertising by visiting Google's Ad Settings 
                  at <a href="https://www.google.com/settings/ads" className="underline" target="_blank" rel="noopener noreferrer">www.google.com/settings/ads</a>. 
                  You can also opt out of some third-party vendors' uses of cookies by visiting the Network Advertising Initiative 
                  opt-out page at <a href="http://www.networkadvertising.org/choices/" className="underline" target="_blank" rel="noopener noreferrer">www.networkadvertising.org/choices/</a>.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Vendors and Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We work with various third-party vendors and service providers to deliver our services and improve user experience. 
                These third parties may collect information about your use of our website:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Google AdSense:</strong> For serving advertisements and analyzing ad performance</li>
                <li><strong>Media.net:</strong> Alternative advertising network for ad serving</li>
                <li><strong>Adsterra:</strong> Additional advertising network for ad monetization</li>
                <li><strong>Analytics Services:</strong> To understand how users interact with our website</li>
                <li><strong>Rate Providers:</strong> Third-party APIs for fetching real-time precious metals rates</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                These third-party vendors have their own privacy policies and terms of service. We encourage you to review their 
                privacy policies to understand how they collect, use, and protect your information. We are not responsible for 
                the privacy practices of these third-party services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Usage and Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The data we collect is used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>To provide and maintain our calculator services</li>
                <li>To process your calculations and generate receipts</li>
                <li>To improve our website functionality and user experience</li>
                <li>To serve relevant advertisements through third-party ad networks</li>
                <li>To analyze website usage and optimize performance</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To provide customer support and respond to inquiries</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal information to third parties. However, third-party advertising networks may use 
                information collected through cookies and similar technologies to serve personalized advertisements. This data 
                usage is governed by the privacy policies of those third-party services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after 
                any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-gray-800 font-medium">Email:</p>
                <p className="text-gray-600">privacy@metalscalculator.com</p>
                <p className="text-gray-800 font-medium mt-2">Phone:</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
