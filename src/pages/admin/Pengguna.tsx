
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'perawat' | 'pasien';
  password: string;
  status: 'active' | 'inactive';
  createdAt: string;
};

const AdminPengguna = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Admin Sistem',
      email: 'admin@imomantap.com',
      role: 'admin',
      password: 'admin123',
      status: 'active',
      createdAt: '2024-01-01'
    },
    {
      id: '2',
      name: 'Ns. Ratna Dewi',
      email: 'ratna@imomantap.com',
      role: 'perawat',
      password: 'perawat123',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: '3',
      name: 'Budi Santoso',
      email: 'budi@imomantap.com',
      role: 'pasien',
      password: 'pasien123',
      status: 'active',
      createdAt: '2024-02-01'
    }
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showPasswords, setShowPasswords] = useState<{[key: string]: boolean}>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '' as 'admin' | 'perawat' | 'pasien' | '',
    password: '',
  });

  const handleAddUser = () => {
    if (!formData.name || !formData.email || !formData.role || !formData.password) {
      toast.error('Semua field harus diisi');
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      role: formData.role as 'admin' | 'perawat' | 'pasien',
      password: formData.password,
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0]
    };

    setUsers([...users, newUser]);
    setFormData({ name: '', email: '', role: '', password: '' });
    setIsAddDialogOpen(false);
    toast.success(`Pengguna ${newUser.name} berhasil ditambahkan dengan role ${newUser.role}`);
  };

  const handleEditUser = () => {
    if (!editingUser || !formData.name || !formData.email || !formData.role) {
      toast.error('Semua field harus diisi');
      return;
    }

    const updatedUsers = users.map(user => 
      user.id === editingUser.id 
        ? { 
            ...user, 
            name: formData.name,
            email: formData.email,
            role: formData.role as 'admin' | 'perawat' | 'pasien',
            password: formData.password || user.password
          }
        : user
    );

    setUsers(updatedUsers);
    setEditingUser(null);
    setFormData({ name: '', email: '', role: '', password: '' });
    setIsEditDialogOpen(false);
    toast.success('Data pengguna berhasil diperbarui');
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
      setUsers(users.filter(user => user.id !== userId));
      toast.success('Pengguna berhasil dihapus');
    }
  };

  const toggleUserStatus = (userId: string) => {
    const updatedUsers = users.map(user =>
      user.id === userId
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' as 'active' | 'inactive' }
        : user
    );
    setUsers(updatedUsers);
    const user = users.find(u => u.id === userId);
    toast.success(`Status pengguna ${user?.name} berhasil diubah`);
  };

  const openEditDialog = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      password: ''
    });
    setIsEditDialogOpen(true);
  };

  const togglePasswordVisibility = (userId: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'perawat': return 'bg-blue-100 text-blue-800';
      case 'pasien': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const generatePassword = () => {
    const password = Math.random().toString(36).slice(-8);
    setFormData({ ...formData, password });
  };

  return (
    <Layout role="admin" title="Manajemen Pengguna">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manajemen Pengguna</h1>
            <p className="text-gray-500">Kelola akun pengguna sistem IMO MANTAP</p>
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-imo-500 hover:bg-imo-600">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Pengguna
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Tambah Pengguna Baru</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value as 'admin' | 'perawat' | 'pasien' })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="perawat">Perawat</SelectItem>
                      <SelectItem value="pasien">Pasien</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="flex gap-2">
                    <Input
                      id="password"
                      type="text"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Masukkan password"
                    />
                    <Button type="button" variant="outline" onClick={generatePassword}>
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleAddUser} className="flex-1 bg-imo-500 hover:bg-imo-600">
                    Tambah
                  </Button>
                  <Button onClick={() => setIsAddDialogOpen(false)} variant="outline" className="flex-1">
                    Batal
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Pengguna</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Password</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tanggal Dibuat</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge className={getRoleBadgeColor(user.role)}>
                        {user.role === 'admin' ? 'Administrator' : 
                         user.role === 'perawat' ? 'Perawat' : 'Pasien'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">
                          {showPasswords[user.id] ? user.password : '••••••••'}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePasswordVisibility(user.id)}
                        >
                          {showPasswords[user.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                        {user.status === 'active' ? 'Aktif' : 'Nonaktif'}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(user.createdAt).toLocaleDateString('id-ID')}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openEditDialog(user)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant={user.status === 'active' ? 'destructive' : 'default'}
                          size="sm"
                          onClick={() => toggleUserStatus(user.id)}
                        >
                          {user.status === 'active' ? 'Nonaktifkan' : 'Aktifkan'}
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Edit User Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Pengguna</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-name">Nama Lengkap</Label>
                <Input
                  id="edit-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <Label htmlFor="edit-email">Email</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Masukkan email"
                />
              </div>
              <div>
                <Label htmlFor="edit-role">Role</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value as 'admin' | 'perawat' | 'pasien' })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="perawat">Perawat</SelectItem>
                    <SelectItem value="pasien">Pasien</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-password">Password Baru (kosongkan jika tidak ingin mengubah)</Label>
                <div className="flex gap-2">
                  <Input
                    id="edit-password"
                    type="text"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Masukkan password baru"
                  />
                  <Button type="button" variant="outline" onClick={generatePassword}>
                    Generate
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={handleEditUser} className="flex-1 bg-imo-500 hover:bg-imo-600">
                  Simpan
                </Button>
                <Button onClick={() => setIsEditDialogOpen(false)} variant="outline" className="flex-1">
                  Batal
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-blue-100 p-2">
                <Plus className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-blue-900">Informasi Login</h3>
                <p className="text-sm text-blue-700 mt-1">
                  Setiap pengguna yang ditambahkan dapat langsung melakukan login menggunakan email dan password yang telah ditetapkan.
                  Data login tersimpan dan dapat dilihat oleh administrator.
                </p>
                <div className="mt-3 space-y-1 text-sm text-blue-600">
                  <p><strong>Contoh login:</strong></p>
                  <p>• Admin: admin@imomantap.com / admin123</p>
                  <p>• Perawat: ratna@imomantap.com / perawat123</p>
                  <p>• Pasien: budi@imomantap.com / pasien123</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AdminPengguna;
