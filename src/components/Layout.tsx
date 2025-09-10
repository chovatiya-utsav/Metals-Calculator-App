import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentPage = 'home', 
  title = 'Metals Calculator - Professional Gold & Silver Pricing Tool',
  description = 'Professional precious metals calculator with real-time gold, silver, and platinum pricing. GST compliant calculations, receipt generation, and accurate jewelry valuation for buyers and sellers.'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 overflow-x-hidden">
      <Navigation currentPage={currentPage} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
