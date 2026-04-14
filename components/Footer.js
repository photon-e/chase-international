export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="section-container flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-semibold text-secondary">CHASE N. INTERNATIONAL CO. LTD</p>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
