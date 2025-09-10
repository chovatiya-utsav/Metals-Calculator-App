import React from 'react';
import { FileText, AlertTriangle, Scale, Users, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout 
      currentPage="terms"
      title="Terms of Use - Metals Calculator | Legal Terms & Conditions"
      description="Read our terms of use to understand the legal terms and conditions for using Metals Calculator and our precious metals pricing services."
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="text-yellow-600" size={40} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Terms of Use
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the Metals Calculator website and services, you agree to be bound by these Terms of Use 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                using or accessing this site.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Metals Calculator for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Description</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <Scale className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Calculator Services</h3>
                    <p className="text-gray-600 text-sm">
                      Real-time precious metals pricing calculations for gold, silver, and platinum.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <Users className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">User Support</h3>
                    <p className="text-gray-600 text-sm">
                      Customer support and assistance with calculator functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Important Notice</h3>
                    <p className="text-red-700 text-sm">
                      The materials on Metals Calculator are provided on an 'as is' basis. Metals Calculator makes no warranties, 
                      expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                      implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                      of intellectual property or other violation of rights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In no event shall Metals Calculator or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                the materials on Metals Calculator, even if Metals Calculator or a Metals Calculator authorized representative 
                has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not 
                allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                these limitations may not apply to you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Accuracy of Materials</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on Metals Calculator could include technical, typographical, or photographic errors. 
                Metals Calculator does not warrant that any of the materials on its website are accurate, complete, or current. 
                Metals Calculator may make changes to the materials contained on its website at any time without notice. 
                However, Metals Calculator does not make any commitment to update the materials.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">User Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Use the calculator services in accordance with applicable laws and regulations</li>
                <li>Provide accurate information when using our services</li>
                <li>Not use the services for any unlawful or prohibited purpose</li>
                <li>Not attempt to gain unauthorized access to any part of the website</li>
                <li>Not interfere with or disrupt the website's functionality</li>
                <li>Respect the intellectual property rights of Metals Calculator and third parties</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                to understand our practices regarding the collection, use, and disclosure of your personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Modifications</h2>
              <p className="text-gray-600 leading-relaxed">
                Metals Calculator may revise these terms of service for its website at any time without notice. By using this 
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United States 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-800 font-medium">Email:</p>
                    <p className="text-gray-600">legal@metalscalculator.com</p>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Phone:</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Acceptance of Terms</h3>
                  <p className="text-blue-700 text-sm">
                    By continuing to use our website and services, you acknowledge that you have read, understood, 
                    and agree to be bound by these Terms of Use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
