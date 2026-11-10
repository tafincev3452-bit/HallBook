'use client';

import { useEffect, useState } from 'react';

export default function GuestPage() {
  const [menu, setMenu] = useState<any[]>([]);
  const [tables, setTables] = useState<any[]>([]);

  useEffect(() => {
    // Для гостя пока без авторизации — можно сделать публичные эндпоинты позже
    // Сейчас просто заглушка
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">HallBook — Гостевая</h1>
      <p className="text-center text-gray-600 mb-8">Скоро здесь будет меню, акции и схема зала</p>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Схема зала (заглушка)</h2>
        <div className="relative w-full h-96 bg-gray-100 border-2 border-dashed rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Здесь будет интерактивная схема столов</p>
        </div>
      </div>
    </div>
  );
}