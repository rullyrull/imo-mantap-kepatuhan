
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Heart, 
  Calendar, 
  User, 
  Users, 
  Settings, 
  BarChart3, 
  Pills, 
  Clock, 
  Bell, 
  Menu
} from 'lucide-react';

type SidebarProps = {
  role: 'pasien' | 'perawat' | 'admin';
  isMobile?: boolean;
  onClose?: () => void;
};

const Sidebar = ({ role, isMobile = false, onClose }: SidebarProps) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const sidebarItems = {
    pasien: [
      { name: 'Dashboard', path: '/pasien/dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Jadwal Obat', path: '/pasien/jadwal', icon: <Clock className="h-5 w-5" /> },
      { name: 'Riwayat', path: '/pasien/riwayat', icon: <Calendar className="h-5 w-5" /> },
      { name: 'Pengingat', path: '/pasien/pengingat', icon: <Bell className="h-5 w-5" /> },
      { name: 'Profil', path: '/pasien/profil', icon: <User className="h-5 w-5" /> },
    ],
    perawat: [
      { name: 'Dashboard', path: '/perawat/dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Pasien', path: '/perawat/pasien', icon: <Users className="h-5 w-5" /> },
      { name: 'Pengobatan', path: '/perawat/pengobatan', icon: <Pills className="h-5 w-5" /> },
      { name: 'Kepatuhan', path: '/perawat/kepatuhan', icon: <Heart className="h-5 w-5" /> },
      { name: 'Profil', path: '/perawat/profil', icon: <User className="h-5 w-5" /> },
    ],
    admin: [
      { name: 'Dashboard', path: '/admin/dashboard', icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Pengguna', path: '/admin/pengguna', icon: <Users className="h-5 w-5" /> },
      { name: 'Obat', path: '/admin/obat', icon: <Pills className="h-5 w-5" /> },
      { name: 'Laporan', path: '/admin/laporan', icon: <Calendar className="h-5 w-5" /> },
      { name: 'Pengaturan', path: '/admin/pengaturan', icon: <Settings className="h-5 w-5" /> },
    ],
  };

  const items = sidebarItems[role];

  const roleTitle = {
    pasien: 'Pasien',
    perawat: 'Perawat',
    admin: 'Administrator',
  };

  return (
    <div className={cn(
      "flex flex-col h-full bg-white border-r border-border",
      isMobile ? "w-full" : "w-64 min-w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <div className="rounded-full bg-imo-500 w-8 h-8 flex items-center justify-center">
            <Pills className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 font-semibold text-lg">IMO MANTAP</span>
        </div>
        {isMobile && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
      </div>
      
      <div className="px-3 py-4 border-b">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {roleTitle[role]}
        </p>
      </div>
      
      <div className="flex-1 overflow-auto py-2">
        <nav className="space-y-1 px-2">
          {items.map((item) => (
            <Link 
              to={item.path}
              key={item.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                activePath === item.path 
                  ? "bg-imo-50 text-imo-700" 
                  : "text-foreground hover:bg-imo-50 hover:text-imo-700"
              )}
              onClick={isMobile ? onClose : undefined}
            >
              <div className={cn(
                "mr-3",
                activePath === item.path ? "text-imo-500" : "text-muted-foreground"
              )}>
                {item.icon}
              </div>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full" asChild>
          <Link to="/login">
            Keluar
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
