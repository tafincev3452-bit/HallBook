'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [menu, setMenu] = useState<any[]>([]);
  const [tables, setTables] = useState<any[]>([]);
  const [shifts, setShifts] = useState<any[]>([]);
  const [promotions, setPromotions] = useState<any[]>([]);
  const [newMenu, setNewMenu] = useState({ name: '', price: '', category: '' });
  const [newTable, setNewTable] = useState({ name: '', seats: '', x: '100', y: '100' });
  const router = useRouter();

  const loadData = async (token: string) => {
    const headers = { Authorization: 'Bearer ' + token };
    const [p, m, t, s, pr] = await Promise.all([
      fetch('http://localhost:3000/auth/profile', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/menu', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/tables', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/shifts', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/promotions', { headers }).then(r => r.json()),
    ]);
    setProfile(p);
    setMenu(m);
    setTables(t);
    setShifts(s);
    setPromotions(pr);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/login');
    loadData(token);
  }, [router]);

  const createMenu = async () => {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:3000/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ ...newMenu, price: Number(newMenu.price) }),
    });
    setNewMenu({ name: '', price: '', category: '' });
    loadData(token!);
  };

  const createTable = async () => {
    const token = localStorage.getItem('token');
    await fetch('http://localhost:3000/tables', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ ...newTable, seats: Number(newTable.seats), x: Number(newTable.x), y: Number(newTable.y) }),
    });
    setNewTable({ name: '', seats: '', x: '100', y: '100' });
    loadData(token!);
  };

  if (!profile) return <div className="p-8 text-center">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">HallBook — Админка</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Профиль</h2>
        <p><strong>Имя:</strong> {profile.name}</p>
        <p><strong>Роль:</strong> {profile.role}</p>
        <p><strong>Заведение:</strong> {profile.establishmentId}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Меню */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Меню ({menu.length})</h2>
          {menu.map(item => <div key={item.id} className="mb-2">{item.name} — {item.price} ₽</div>)}
          <div className="mt-4 space-y-2">
            <input placeholder="Название" value={newMenu.name} onChange={e => setNewMenu({...newMenu, name: e.target.value})} className="w-full p-2 border rounded" />
            <input placeholder="Цена" type="number" value={newMenu.price} onChange={e => setNewMenu({...newMenu, price: e.target.value})} className="w-full p-2 border rounded" />
            <input placeholder="Категория" value={newMenu.category} onChange={e => setNewMenu({...newMenu, category: e.target.value})} className="w-full p-2 border rounded" />
            <button onClick={createMenu} className="w-full bg-green-600 text-white p-2 rounded">Добавить позицию</button>
          </div>
        </div>

        {/* Столы */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Столы ({tables.length})</h2>
          {tables.map(table => <div key={table.id} className="mb-2">{table.name} — {table.seats} мест</div>)}
          <div className="mt-4 space-y-2">
            <input placeholder="Название" value={newTable.name} onChange={e => setNewTable({...newTable, name: e.target.value})} className="w-full p-2 border rounded" />
            <input placeholder="Мест" type="number" value={newTable.seats} onChange={e => setNewTable({...newTable, seats: e.target.value})} className="w-full p-2 border rounded" />
            <button onClick={createTable} className="w-full bg-green-600 text-white p-2 rounded">Добавить стол</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Смены ({shifts.length})</h2>
          {shifts.map(s => <div key={s.id}>{new Date(s.date).toLocaleDateString()} {s.startTime}–{s.endTime}</div>)}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Акции ({promotions.length})</h2>
          {promotions.map(p => <div key={p.id}>{p.title}</div>)}
        </div>
      </div>
    </div>
  );
}