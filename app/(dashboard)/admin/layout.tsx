import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* --- Sidebar (Dark Theme for Admin) --- */}
      <aside className="w-64 bg-slate-900 text-white hidden md:block flex-shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-xl font-bold text-white tracking-wide">Nissin Admin</span>
        </div>
        
        <nav className="p-4 space-y-2">
          <Link 
            href="/admin/dashboard" 
            className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
          >
            <span>📊</span> Dashboard
          </Link>
          
          <div className="pt-4 pb-1 pl-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Catalog Management
          </div>
          
          <Link 
            href="/admin/categories" 
            className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
          >
            <span>Tg</span> Categories
          </Link>

          <Link 
            href="/admin/attributes" 
            className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
          >
            <span>🎨</span> Attributes (Colors/Sizes)
          </Link>

          <div className="pt-4 pb-1 pl-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Users
          </div>
          
          <Link 
            href="/admin/vendors" 
            className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
          >
            <span>🏪</span> Vendors
          </Link>
        </nav>
      </aside>

      {/* --- Main Content Area --- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Super Admin Portal</h2>
          <div className="flex items-center gap-4">
             <div className="text-sm text-right hidden sm:block">
                <p className="font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Superuser</p>
             </div>
             <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">
               A
             </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}