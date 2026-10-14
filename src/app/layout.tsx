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
  metadataBase: new URL('https://dtdurdana.in'),
  title: {
    default: 'Clinical Nutritionist & Dietitian in Malad West, Mumbai | Nutrition By Durdana',
    template: '%s | Nutrition By Durdana',
  },
  description:
    'Consult Dt. Durdana, certified Clinical Nutritionist in Malad West, Mumbai. Holistic Ayurveda & Medical Nutrition for PCOS, gut health, diabetes, and sustainable weight management. Book your consultation today!',
  keywords: [
    'Clinical Nutritionist Mumbai',
    'Dietitian in Malad West',
    'Best Nutritionist Malad West Mumbai',
    'Nutritionist near me Malad',
    'PCOS Dietitian Mumbai',
    'Gut Health Nutritionist Mumbai',
    'Ayurvedic Nutrition Consultation',
    'Weight Loss Dietitian Mumbai',
    'Nutrition By Durdana',
    'Dt Durdana',
    'Personalized Diet Plans Mumbai',
  ],
  authors: [{ name: 'Dt. Durdana', url: 'https://dtdurdana.in' }],
  creator: 'Dt. Durdana',
  publisher: 'Nutrition By Durdana',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://dtdurdana.in',
  },
  openGraph: {
    title: 'Clinical Nutritionist & Dietitian in Malad West, Mumbai | Nutrition By Durdana',
    description:
      'Attain long-term health and wellness via individualized, holistic nutrition rooted in Ayurveda Food Science and modern Medical Nutrition in Malad West, Mumbai.',
    url: 'https://dtdurdana.in',
    siteName: 'Nutrition By Durdana',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/about1.webp',
        width: 800,
        height: 1000,
        alt: 'Dt. Durdana - Clinical Nutritionist & Holistic Health Advisor in Malad West, Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Nutritionist & Dietitian in Malad West, Mumbai | Nutrition By Durdana',
    description:
      'Holistic clinical nutrition for PCOS, gut health, diabetes, and weight management in Malad West, Mumbai.',
    images: ['/about1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
      '@id': 'https://dtdurdana.in/#organization',
      name: 'Nutrition By Durdana',
      legalName: 'Nutrition By Durdana',
      url: 'https://dtdurdana.in',
      logo: 'https://dtdurdana.in/about1.webp',
      image: 'https://dtdurdana.in/about1.webp',
      description:
        'Certified Clinical Nutritionist and Holistic Health Advisor in Malad West, Mumbai. Specializing in customized meal plans, Ayurveda food science, PCOS, gut healing, and lifestyle habit transformation.',
      telephone: '+919619997901',
      email: 'nutritionbydurdana@gmail.com',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No.3087, 1st floor, Rustomjee Eaze Zone Mall, Sunder Nagar',
        addressLocality: 'Malad West, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400064',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.1744265,
        longitude: 72.8414874,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      sameAs: [
        'https://instagram.com',
        'https://facebook.com',
      ],
      hasMap:
        'https://maps.google.com/maps?q=Nutrition%20By%20Durdana%2C%20Malad%20West%2C%20Mumbai',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '128',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://dtdurdana.in/#person',
      name: 'Dt. Durdana',
      jobTitle: 'Clinical Nutritionist & Health Advisor',
      worksFor: {
        '@id': 'https://dtdurdana.in/#organization',
      },
      image: 'https://dtdurdana.in/about1.webp',
      description:
        'Certified Clinical Nutritionist and Health Consultant in Malad West, Mumbai.',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-themeGreen-100 selection:text-themeGreen-900">
        {children}
      </body>
    </html>
  );
}
