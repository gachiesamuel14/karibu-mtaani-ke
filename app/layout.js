import './globals.css';

export const metadata = {
  title: 'Karibu Mtaani — Location Dating for Kenya',
  description: 'Connect with people near you in Kenya. Match by county, distance, interests, tribe, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
