'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Hide Navbar and Footer on admin pages
  const isAdminPage = pathname?.startsWith('/admin');
  
  return (
    <>
      {!isAdminPage && <Navbar />}
      <div className="lg:pb-0 pb-20">
        {children}
      </div>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <MobileBottomNav />}
    </>
  );
}
