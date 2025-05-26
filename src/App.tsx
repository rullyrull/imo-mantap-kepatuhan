
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";

// Pasien Pages
import PasienDashboard from "./pages/pasien/Dashboard";
import PasienJadwal from "./pages/pasien/Jadwal";
import PasienRiwayat from "./pages/pasien/Riwayat";
import PasienPengingat from "./pages/pasien/Pengingat";
import PasienProfil from "./pages/pasien/Profil";

// Perawat Pages
import PerawatDashboard from "./pages/perawat/Dashboard";
import PerawatPasien from "./pages/perawat/Pasien";
import PerawatPasienDetail from "./pages/perawat/PasienDetail";
import PerawatPengobatan from "./pages/perawat/Pengobatan";
import PerawatKepatuhan from "./pages/perawat/Kepatuhan";
import PerawatProfil from "./pages/perawat/Profil";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPengguna from "./pages/admin/Pengguna";
import AdminObat from "./pages/admin/Obat";
import AdminLaporan from "./pages/admin/Laporan";
import AdminPengaturan from "./pages/admin/Pengaturan";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" closeButton richColors />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Pasien Routes */}
              <Route path="/pasien/dashboard" element={
                <ProtectedRoute allowedRoles={['pasien']}>
                  <PasienDashboard />
                </ProtectedRoute>
              } />
              <Route path="/pasien/jadwal" element={
                <ProtectedRoute allowedRoles={['pasien']}>
                  <PasienJadwal />
                </ProtectedRoute>
              } />
              <Route path="/pasien/riwayat" element={
                <ProtectedRoute allowedRoles={['pasien']}>
                  <PasienRiwayat />
                </ProtectedRoute>
              } />
              <Route path="/pasien/pengingat" element={
                <ProtectedRoute allowedRoles={['pasien']}>
                  <PasienPengingat />
                </ProtectedRoute>
              } />
              <Route path="/pasien/profil" element={
                <ProtectedRoute allowedRoles={['pasien']}>
                  <PasienProfil />
                </ProtectedRoute>
              } />
              
              {/* Perawat Routes */}
              <Route path="/perawat/dashboard" element={
                <ProtectedRoute allowedRoles={['perawat']}>
                  <PerawatDashboard />
                </ProtectedRoute>
              } />
              <Route path="/perawat/pasien" element={
                <ProtectedRoute allowedRoles={['perawat']}>
                  <PerawatPasien />
                </ProtectedRoute>
              } />
              <Route path="/perawat/pasien/:id" element={
                <ProtectedRoute allowedRoles={['perawat']}>
                  <PerawatPasienDetail />
                </ProtectedRoute>
              } />
              <Route path="/perawat/pengobatan" element={
                <ProtectedRoute allowedRoles={['perawat']}>
                  <PerawatPengobatan />
                </ProtectedRoute>
              } />
              <Route path="/perawat/kepatuhan" element={
                <ProtectedRoute allowedRoles={['perawat']}>
                  <PerawatKepatuhan />
                </ProtectedRoute>
              } />
              <Route path="/perawat/profil" element={
                <ProtectedRoute allowedRoles={['perawat']}>
                  <PerawatProfil />
                </ProtectedRoute>
              } />
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/pengguna" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminPengguna />
                </ProtectedRoute>
              } />
              <Route path="/admin/obat" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminObat />
                </ProtectedRoute>
              } />
              <Route path="/admin/laporan" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminLaporan />
                </ProtectedRoute>
              } />
              <Route path="/admin/pengaturan" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminPengaturan />
                </ProtectedRoute>
              } />
              
              {/* 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
