
import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import { Pill } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex items-center justify-center">
          <div className="rounded-full bg-imo-500 w-12 h-12 flex items-center justify-center">
            <Pill className="h-6 w-6 text-white" />
          </div>
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">IMO MANTAP</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sistem Pengingat dan Monitoring Kepatuhan Minum Obat Hipertensi
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4">
          <RegisterForm />
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          <a href="/" className="font-medium text-imo-500 hover:underline">
            Kembali ke beranda
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
