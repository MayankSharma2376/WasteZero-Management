import { useState } from "react";

const DashboardLayout = ({ sidebar, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-green-700 text-white">
        {sidebar}
      </aside>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-green-700 text-white">
            {sidebar}
          </div>
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <header className="md:hidden bg-white shadow p-4 flex items-center">
          <button
            onClick={() => setOpen(true)}
            className="text-2xl mr-4"
          >
            ☰
          </button>
          <h1 className="font-bold">Dashboard</h1>
        </header>

        <main className="p-4 md:p-6">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
