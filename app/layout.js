import './globals.css';

export const metadata = {
  title: 'CHASE N. INTERNATIONAL CO. LTD',
  description: 'Modern construction, supplies, and general trading solutions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">{children}</body>
    </html>
  );
}
