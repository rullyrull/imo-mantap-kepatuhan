
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Menu, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

type HeaderProps = {
  onMenuClick: () => void;
  title: string;
  role: 'pasien' | 'perawat' | 'admin';
};

const Header = ({ onMenuClick, title, role }: HeaderProps) => {
  const navigate = useNavigate();
  const [notifications] = useState(role === 'pasien' ? 3 : role === 'perawat' ? 5 : 0);

  const handleLogout = () => {
    toast.success('Berhasil keluar dari sistem');
    navigate('/login');
  };

  const userName = {
    'pasien': 'Budi Santoso',
    'perawat': 'Ns. Ratna Dewi',
    'admin': 'Admin Sistem'
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="flex h-16 items-center px-4 sm:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        <h1 className="text-lg font-medium">{title}</h1>
        
        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                    {notifications}
                  </span>
                )}
                <span className="sr-only">Notifikasi</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifikasi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {role === 'pasien' ? (
                <>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Pengingat:</span> Waktunya minum obat Amlodipine
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Info:</span> Jadwal kontrol 3 hari lagi
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Pesan:</span> Perawat telah memperbarui jadwal obat Anda
                  </DropdownMenuItem>
                </>
              ) : role === 'perawat' ? (
                <>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Pasien:</span> Budi Santoso belum minum obat hari ini
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Pasien:</span> Siti Aminah memerlukan konsultasi
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Admin:</span> Perubahan jadwal tugas perawat
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Sistem:</span> 2 pasien perlu pembaruan resep
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="font-medium text-imo-500">Pengingat:</span> Rapat staf besok pukul 09.00
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem>Tidak ada notifikasi baru</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{userName[role]}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate(`/${role}/profil`)}>
                Profil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate(`/${role}/pengaturan`)}>
                Pengaturan
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
