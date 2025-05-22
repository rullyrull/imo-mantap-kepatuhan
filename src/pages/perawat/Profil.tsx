
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { User, Phone, Mail, Briefcase, Clock, Edit, Shield, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';

const PerawatProfil = () => {
  // State for dialog visibility
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<string>('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Notifications settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  
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
                <Label htmlFor="jabatan" className="text-right">
                  Jabatan
                </Label>
                <Input id="jabatan" defaultValue={profil.jabatan} className="col-span-3" />
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
      case 'two-factor':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Verifikasi Dua Faktor</DialogTitle>
              <DialogDescription>
                Tingkatkan keamanan akun Anda dengan verifikasi dua faktor
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="mb-4">Aktifkan verifikasi dua faktor untuk meningkatkan keamanan akun Anda. Anda akan diminta kode verifikasi setiap kali masuk.</p>
              <div className="flex items-center space-x-2">
                <Switch id="two-factor" />
                <Label htmlFor="two-factor">Aktifkan verifikasi dua faktor</Label>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button onClick={handleDialogSave}>Simpan Pengaturan</Button>
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
                <Switch 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications} 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notifikasi Aplikasi</p>
                  <p className="text-sm text-muted-foreground">Terima pemberitahuan dalam aplikasi</p>
                </div>
                <Switch 
                  checked={appNotifications} 
                  onCheckedChange={setAppNotifications} 
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Pengingat Jadwal</p>
                  <p className="text-sm text-muted-foreground">Terima pengingat untuk jadwal pemberian obat</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Peringatan Penting</p>
                  <p className="text-sm text-muted-foreground">Terima peringatan untuk kondisi pasien yang berisiko</p>
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
      case 'tema':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Tema Aplikasi</DialogTitle>
              <DialogDescription>
                Pilih tema tampilan yang Anda inginkan
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-4 cursor-pointer bg-white">
                  <div className="h-20 bg-slate-100 rounded mb-2"></div>
                  <p className="text-center font-medium">Terang</p>
                </div>
                <div className="border rounded-md p-4 cursor-pointer">
                  <div className="h-20 bg-slate-800 rounded mb-2"></div>
                  <p className="text-center font-medium">Gelap</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button onClick={handleDialogSave}>Terapkan Tema</Button>
            </DialogFooter>
          </>
        );
      case 'bahasa':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Pilihan Bahasa</DialogTitle>
              <DialogDescription>
                Pilih bahasa aplikasi
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer">
                  <div className="w-6 h-4 bg-red-100"></div>
                  <span>Bahasa Indonesia</span>
                </div>
                <div className="flex items-center space-x-2 border p-3 rounded-md cursor-pointer">
                  <div className="w-6 h-4 bg-blue-100"></div>
                  <span>English</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button onClick={handleDialogSave}>Simpan Bahasa</Button>
            </DialogFooter>
          </>
        );
      case 'hapus-akun':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Hapus Akun</DialogTitle>
              <DialogDescription>
                Tindakan ini tidak dapat dibatalkan. Akun dan semua data terkait akan dihapus secara permanen.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="bg-red-50 p-4 rounded-md">
                <p className="text-red-800 font-medium">Peringatan</p>
                <p className="text-sm text-red-700 mt-1">
                  Menghapus akun akan menghapus seluruh data pasien yang Anda kelola. Pastikan data telah dicadangkan atau dialihkan ke perawat lain.
                </p>
              </div>
              <div className="mt-4">
                <Label htmlFor="confirm-delete">Ketik "HAPUS" untuk konfirmasi</Label>
                <Input id="confirm-delete" className="mt-1" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Batal</Button>
              <Button variant="destructive" onClick={handleDialogSave}>Hapus Akun</Button>
            </DialogFooter>
          </>
        );
      default:
        return <p>Content not available</p>;
    }
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

      {/* Dialogs */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          {renderDialogContent()}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PerawatProfil;
