import React from 'react';
import { AlertTriangle, FileText, Scale, Shield } from 'lucide-react';
import Layout from '../components/Layout';

const Disclaimer: React.FC = () => {
  return (
    <Layout 
      currentPage="disclaimer"
      title="Disclaimer - Metals Calculator | Legal Disclaimers & Limitations"
      description="Read the legal disclaimer for Metals Calculator. Understand the limitations, accuracy disclaimers, and terms of use for our precious metals pricing calculator."
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="text-yellow-600" size={40} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Disclaimer
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">General Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The information provided by Metals Calculator ("we," "us," or "our") on <a href="https://metals-calculator-app.vercel.app/" className="text-yellow-600 hover:underline">https://metals-calculator-app.vercel.app/</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pricing and Rate Accuracy Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                <div className="flex items-start gap-3">
                  <Scale className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Important Notice Regarding Rates</h3>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      The precious metals rates displayed on Metals Calculator are obtained from third-party sources and are provided for informational purposes only. While we strive to provide accurate and up-to-date pricing information, we cannot guarantee the accuracy, completeness, or timeliness of the rates displayed. Actual market rates may vary significantly from the rates shown on our calculator.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The rates provided by Metals Calculator are estimates based on available market data and should not be considered as definitive pricing for actual transactions. Real-world jewelry transactions involve additional factors including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Market fluctuations that occur between rate updates</li>
                <li>Local market conditions and regional pricing variations</li>
                <li>Jewelry condition, craftsmanship, and brand value</li>
                <li>Negotiation between buyer and seller</li>
                <li>Transaction fees and additional charges</li>
                <li>Certification and authentication requirements</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We strongly recommend consulting with licensed jewelry appraisers, certified gemologists, or authorized dealers before making any significant precious metals transactions. The calculations provided by our calculator are tools to assist in understanding potential pricing ranges, not definitive transaction values.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GST and Tax Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The GST (Goods and Services Tax) calculations provided by Metals Calculator are based on standard tax rates and regulations applicable in India at the time of calculation. Tax rates, regulations, and exemptions may change without notice, and actual tax obligations may vary based on:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Specific transaction circumstances</li>
                <li>Applicable exemptions or special provisions</li>
                <li>Regional tax variations</li>
                <li>Changes in tax legislation</li>
                <li>Individual tax status and compliance requirements</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Metals Calculator does not provide tax advice. You should consult with qualified tax professionals or chartered accountants to understand your specific tax obligations and ensure compliance with all applicable tax laws and regulations.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">No Financial or Investment Advice</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The information and calculations provided by Metals Calculator do not constitute financial, investment, or trading advice. We are not financial advisors, investment brokers, or registered investment advisors. The calculator is a tool for informational purposes only and should not be used as the sole basis for making investment or financial decisions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Precious metals investments carry inherent risks, including market volatility, liquidity concerns, and potential loss of value. Past performance and current rates do not guarantee future results. Always conduct thorough research and consult with qualified financial professionals before making investment decisions involving precious metals.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Content and Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Metals Calculator may contain links to third-party websites, services, or resources. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites. Your interactions with third-party sites are solely between you and the third party.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for the accuracy, reliability, or availability of information provided by third-party sources, including but not limited to rate providers, market data services, or external APIs. Any reliance on third-party information is at your own risk.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Availability and Technical Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we strive to ensure the continuous availability of Metals Calculator, we do not guarantee uninterrupted, error-free, or secure access to our services. The Site may be temporarily unavailable due to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Technical maintenance or updates</li>
                <li>Server issues or downtime</li>
                <li>Network connectivity problems</li>
                <li>Third-party service interruptions</li>
                <li>Force majeure events</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We are not liable for any losses, damages, or inconveniences resulting from service interruptions, technical failures, or data loss. Users are encouraged to save important calculations and receipts independently.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, Metals Calculator, its owners, operators, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Your use or inability to use the Site</li>
                <li>Any errors or omissions in the content or calculations</li>
                <li>Any unauthorized access to or use of our servers or data</li>
                <li>Any interruption or cessation of transmission to or from the Site</li>
                <li>Any bugs, viruses, or other harmful code transmitted through the Site</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Advice Recommendation</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Shield className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Seek Professional Guidance</h3>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      For important financial decisions involving precious metals, we strongly recommend consulting with qualified professionals including certified jewelry appraisers, licensed gemologists, registered financial advisors, tax professionals, and authorized precious metals dealers. These professionals can provide personalized advice tailored to your specific circumstances and help ensure compliance with all applicable laws and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update, modify, or change this Disclaimer at any time without prior notice. Any changes will be effective immediately upon posting on this page. Your continued use of Metals Calculator after any modifications constitutes acceptance of the updated Disclaimer. We encourage you to review this page periodically to stay informed about our disclaimers and limitations.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Disclaimer, please contact us:
              </p>
              <div className="bg-yellow-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-800 font-medium">Email:</p>
                    <p className="text-gray-600">legal@metalscalculator.com</p>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Website:</p>
                    <p className="text-gray-600">
                      <a href="https://metals-calculator-app.vercel.app/" className="text-yellow-600 hover:underline">
                        https://metals-calculator-app.vercel.app/
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <FileText className="text-gray-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Acknowledgment</h3>
                  <p className="text-gray-700 text-sm">
                    By using Metals Calculator, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. If you do not agree with any part of this Disclaimer, you must discontinue use of the Site immediately.
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

export default Disclaimer;

