export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-extrabold tracking-wide text-slate-900">CHASE N. INTERNATIONAL CO. LTD</p>
          <p className="mt-1 text-xs text-slate-500">General Contracts • Supplies • Construction • Trading</p>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
