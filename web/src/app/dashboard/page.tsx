'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [menu, setMenu] = useState<any[]>([]);
  const [tables, setTables] = useState<any[]>([]);
  const [shifts, setShifts] = useState<any[]>([]);
  const [promotions, setPromotions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const headers = { Authorization: 'Bearer ' + token };

    fetch('http://localhost:3000/auth/profile', { headers })
      .then(res => res.json())
      .then(setProfile)
      .catch(() => router.push('/login'));

    fetch('http://localhost:3000/menu', { headers }).then(res => res.json()).then(setMenu);
    fetch('http://localhost:3000/tables', { headers }).then(res => res.json()).then(setTables);
    fetch('http://localhost:3000/shifts', { headers }).then(res => res.json()).then(setShifts);
    fetch('http://localhost:3000/promotions', { headers }).then(res => res.json()).then(setPromotions);
  }, [router]);

  if (!profile) return <div className="p-8">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Личный кабинет HallBook</h1>
      
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Профиль</h2>
        <p><strong>Имя:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Роль:</strong> {profile.role}</p>
        <p><strong>Заведение:</strong> {profile.establishmentId || 'нет'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Меню ({menu.length})</h2>
          {menu.map(item => <p key={item.id}>{item.name} — {item.price} ₽</p>)}
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Столы ({tables.length})</h2>
          {tables.map(table => <p key={table.id}>{table.name} ({table.seats} мест)</p>)}
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Смены ({shifts.length})</h2>
          {shifts.map(shift => <p key={shift.id}>{new Date(shift.date).toLocaleDateString()} {shift.startTime}-{shift.endTime}</p>)}
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Акции ({promotions.length})</h2>
          {promotions.map(promo => <p key={promo.id}>{promo.title}</p>)}
        </div>
      </div>
    </div>
  );
}