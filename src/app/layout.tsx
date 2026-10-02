import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nutrition By Durdana | Long-Term Health, Healing & Holistic Wellness',
  description: 'Attain long-term health and wellness via individualized, holistic nutrition rooted in Ayurveda Food Science and modern Medical Nutrition.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-themeGreen-100 selection:text-themeGreen-900">
        {children}
      </body>
    </html>
  );
}
