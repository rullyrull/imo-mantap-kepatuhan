
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Mail, Briefcase, Clock, Edit, Shield, Settings, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const PerawatProfil = () => {
  // Dummy data
  const profil = {
    nama: 'Dr. Anita Wijaya',
    jabatan: 'Perawat Senior',
    departemen: 'Kardiologi',
    telepon: '+62811234567',
    email: 'anita.wijaya@hospital.com',
    bergabung: '12 Januari 2020',
    pasienAktif: 35,
    jadwalKerja: [
      { hari: 'Senin', jam: '08:00 - 16:00' },
      { hari: 'Selasa', jam: '08:00 - 16:00' },
      { hari: 'Rabu', jam: '08:00 - 16:00' },
      { hari: 'Kamis', jam: '08:00 - 16:00' },
      { hari: 'Jumat', jam: '08:00 - 15:00' },
    ],
    keahlian: ['Manajemen Hipertensi', 'Pendidikan Pasien', 'Perawatan Diabetes']
  };

  const handleAction = (action: string) => {
    toast.success(`Aksi "${action}" berhasil dilakukan`);
  };

  return (
    <Layout role="perawat" title="Profil">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profil Perawat
                </CardTitle>
                <CardDescription>
                  Informasi pribadi dan data profesional
                </CardDescription>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleAction('Edit Profil')}>
                <Edit className="h-4 w-4 mr-1" />
                Edit Profil
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center justify-center flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
                    <User className="h-12 w-12 text-slate-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{profil.nama}</h3>
                  <div className="flex items-center mt-1">
                    <Badge variant="secondary">{profil.jabatan}</Badge>
                    <span className="text-sm text-muted-foreground ml-2">{profil.departemen}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    <div className="flex items-center text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>
                        {profil.pasienAktif} pasien aktif
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>Bergabung: {profil.bergabung}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Informasi Kontak</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{profil.telepon}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{profil.email}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Jadwal Kerja</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {profil.jadwalKerja.map((jadwal, index) => (
                    <div key={index} className="border rounded-lg p-2">
                      <div className="text-sm font-medium">{jadwal.hari}</div>
                      <div className="text-xs text-muted-foreground">{jadwal.jam}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {profil.keahlian.map((keahlian, index) => (
                    <Badge key={index} variant="outline">
                      {keahlian}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Keamanan Akun
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Ubah Kata Sandi')}
                >
                  Ubah Kata Sandi
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Verifikasi Dua Faktor')}
                >
                  Verifikasi Dua Faktor
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Pemulihan Akun')}
                >
                  Pemulihan Akun
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Pengaturan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Preferensi Notifikasi')}
                >
                  Preferensi Notifikasi
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Tema Aplikasi')}
                >
                  Tema Aplikasi
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Bahasa')}
                >
                  Bahasa
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-red-500 hover:text-red-500 hover:bg-red-50"
                  onClick={() => handleAction('Hapus Akun')}
                >
                  Hapus Akun
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PerawatProfil;
