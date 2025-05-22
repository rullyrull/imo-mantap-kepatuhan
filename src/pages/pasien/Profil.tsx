
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Mail, Home, CalendarDays, Heart, Edit, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const PasienProfil = () => {
  // State for dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    switch(action) {
      case 'Edit Profil':
        setDialogType('edit-profil');
        setDialogOpen(true);
        break;
      case 'Ubah Kata Sandi':
        setDialogType('ubah-password');
        setDialogOpen(true);
        break;
      case 'Verifikasi Dua Faktor':
        setDialogType('two-factor');
        setDialogOpen(true);
        break;
      case 'Pemulihan Akun':
        setDialogType('recovery');
        setDialogOpen(true);
        break;
      case 'Preferensi Notifikasi':
        setDialogType('notifikasi');
        setDialogOpen(true);
        break;
      case 'Tema Aplikasi':
        setDialogType('tema');
        setDialogOpen(true);
        break;
      case 'Bahasa':
        setDialogType('bahasa');
        setDialogOpen(true);
        break;
      case 'Manajemen Perangkat':
        setDialogType('perangkat');
        setDialogOpen(true);
        break;
      case 'Hapus Akun':
        setDialogType('hapus-akun');
        setDialogOpen(true);
        break;
      default:
        toast.success(`Aksi "${action}" berhasil dilakukan`);
    }
  };

  const handleDialogSave = () => {
    switch(dialogType) {
      case 'edit-profil':
        toast.success('Profil berhasil diperbarui');
        break;
      case 'ubah-password':
        if (!currentPassword || !newPassword || !confirmPassword) {
          toast.error('Semua field harus diisi');
          return;
        }
        if (newPassword !== confirmPassword) {
          toast.error('Password baru dan konfirmasi harus sama');
          return;
        }
        toast.success('Password berhasil diubah');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        break;
      case 'two-factor':
        toast.success('Verifikasi dua faktor berhasil diaktifkan');
        break;
      case 'recovery':
        toast.success('Opsi pemulihan akun berhasil diperbarui');
        break;
      case 'notifikasi':
        toast.success('Preferensi notifikasi berhasil diperbarui');
        break;
      case 'tema':
        toast.success('Tema aplikasi berhasil diubah');
        break;
      case 'bahasa':
        toast.success('Bahasa berhasil diubah');
        break;
      case 'perangkat':
        toast.success('Perangkat berhasil dikelola');
        break;
      case 'hapus-akun':
        toast.error('Fitur ini memerlukan konfirmasi lebih lanjut dan tidak tersedia dalam versi demo');
        break;
    }
    setDialogOpen(false);
  };

  const renderDialogContent = () => {
    switch(dialogType) {
      case 'edit-profil':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Edit Profil</DialogTitle>
              <DialogDescription>
                Perbarui informasi profil Anda
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nama
                </Label>
                <Input id="name" defaultValue={profil.nama} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telepon" className="text-right">
                  Telepon
                </Label>
                <Input id="telepon" defaultValue={profil.telepon} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" defaultValue={profil.email} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="alamat" className="text-right">
                  Alamat
                </Label>
                <Input id="alamat" defaultValue={profil.alamat} className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button onClick={handleDialogSave}>Simpan Perubahan</Button>
            </DialogFooter>
          </>
        );
      case 'ubah-password':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Ubah Kata Sandi</DialogTitle>
              <DialogDescription>
                Masukkan kata sandi lama dan kata sandi baru
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="current-password">
                  Kata Sandi Saat Ini
                </Label>
                <Input 
                  id="current-password" 
                  type="password" 
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="new-password">
                  Kata Sandi Baru
                </Label>
                <Input 
                  id="new-password" 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="confirm-password">
                  Konfirmasi Kata Sandi
                </Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button onClick={handleDialogSave}>Ubah Kata Sandi</Button>
            </DialogFooter>
          </>
        );
      case 'notifikasi':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Preferensi Notifikasi</DialogTitle>
              <DialogDescription>
                Sesuaikan bagaimana Anda ingin menerima pemberitahuan
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifikasi Email</p>
                  <p className="text-sm text-muted-foreground">Terima pemberitahuan melalui email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifikasi Aplikasi</p>
                  <p className="text-sm text-muted-foreground">Terima pemberitahuan dalam aplikasi</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Pengingat Obat</p>
                  <p className="text-sm text-muted-foreground">Terima pengingat untuk jadwal minum obat</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Pengingat Kontrol</p>
                  <p className="text-sm text-muted-foreground">Terima pengingat untuk jadwal kontrol rutin</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button onClick={handleDialogSave}>Simpan Preferensi</Button>
            </DialogFooter>
          </>
        );
      case 'perangkat':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Manajemen Perangkat</DialogTitle>
              <DialogDescription>
                Kelola perangkat yang digunakan untuk mengakses akun Anda
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Perangkat Saat Ini</p>
                    <p className="text-sm text-muted-foreground">Smartphone Android • Jakarta</p>
                    <p className="text-xs text-green-600 mt-1">Aktif sekarang</p>
                  </div>
                  <Button variant="outline" size="sm" disabled>Perangkat Ini</Button>
                </div>
              </div>
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Laptop Windows</p>
                    <p className="text-sm text-muted-foreground">Chrome • Jakarta</p>
                    <p className="text-xs text-muted-foreground mt-1">Terakhir aktif: 2 jam yang lalu</p>
                  </div>
                  <Button variant="outline" size="sm">Keluarkan</Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Tutup</Button>
              <Button onClick={handleDialogSave}>Keluarkan Semua Perangkat</Button>
            </DialogFooter>
          </>
        );
      default:
        return <p>Content not available</p>;
    }
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

      {/* Dialogs */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PasienProfil;
