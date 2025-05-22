
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Mail, Home, CalendarDays, Heart, Edit, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const PasienProfil = () => {
  // Dummy data
  const profil = {
    nama: 'Budi Santoso',
    usia: 65,
    tanggalLahir: '10 Mei 1960',
    jenisKelamin: 'Laki-laki',
    telepon: '+62812345678',
    email: 'budi.santoso@example.com',
    alamat: 'Jl. Merdeka No. 123, Jakarta Pusat',
    golonganDarah: 'O+',
    kondisiMedis: ['Hipertensi', 'Diabetes Tipe 2'],
    alergi: ['Penisilin', 'Kacang']
  };

  const handleAction = (action: string) => {
    toast.success(`Aksi "${action}" berhasil dilakukan`);
  };

  return (
    <Layout role="pasien" title="Profil">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Profil Pasien
                </CardTitle>
                <CardDescription>
                  Informasi pribadi dan riwayat kesehatan
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleAction('Edit Profil')}
              >
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center text-sm">
                      <CalendarDays className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>
                        {profil.usia} tahun ({profil.tanggalLahir})
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Heart className="h-4 w-4 text-red-500 mr-2" />
                      <span>Golongan Darah: {profil.golonganDarah}</span>
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
                  <div className="flex items-center md:col-span-2">
                    <Home className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{profil.alamat}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-3">Informasi Kesehatan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Kondisi Medis</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {profil.kondisiMedis.map((kondisi, index) => (
                        <li key={index} className="text-sm">{kondisi}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Alergi</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {profil.alergi.map((alergi, index) => (
                        <li key={index} className="text-sm">{alergi}</li>
                      ))}
                    </ul>
                  </div>
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
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleAction('Manajemen Perangkat')}
                >
                  Manajemen Perangkat
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PasienProfil;
