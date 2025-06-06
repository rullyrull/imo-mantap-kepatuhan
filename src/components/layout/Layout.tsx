
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from '@/components/ui/sheet';

type LayoutProps = {
  children: React.ReactNode;
  role: 'pasien' | 'perawat' | 'admin';
  title: string;
};

const Layout = ({ children, role, title }: LayoutProps) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, verify authentication here
    // For now, we'll assume the user is authenticated
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-50">
      {isMobile ? (
        <>
          <Header onMenuClick={() => setIsMenuOpen(true)} title={title} role={role} />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetContent side="left" className="p-0">
              <Sidebar role={role} isMobile={true} onClose={() => setIsMenuOpen(false)} />
            </SheetContent>
          </Sheet>
          <main className="pb-16 pt-2 px-4">
            {children}
          </main>
        </>
      ) : (
        <div className="flex h-screen overflow-hidden">
          <Sidebar role={role} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header onMenuClick={() => {}} title={title} role={role} />
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
