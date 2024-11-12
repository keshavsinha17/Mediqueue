import React from 'react';
import { Activity, Users, Bed, Calendar, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Activity, label: 'Dashboard', active: true },
    { icon: Users, label: 'Patients' },
    { icon: Bed, label: 'Bed Management' },
    { icon: Calendar, label: 'Appointments' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-4 py-6">
      <div className="flex items-center mb-8">
        <Activity className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-bold">MediQueue</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map(({ icon: Icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center px-4 py-3 text-gray-700 rounded-lg ${
              active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="ml-3">{label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-gray-200 space-y-2">
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          <Settings className="h-5 w-5" />
          <span className="ml-3">Settings</span>
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
        >
          <LogOut className="h-5 w-5" />
          <span className="ml-3">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;