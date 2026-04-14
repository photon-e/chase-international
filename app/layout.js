import './globals.css';

export const metadata = {
  title: 'CHASE N. INTERNATIONAL CO. LTD',
  description: 'General Contracts • Supplies • Construction • Trading'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
