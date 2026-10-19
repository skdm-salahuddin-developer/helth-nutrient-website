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
    default: 'Best Nutritionist & Weight Loss Coach in Malad | Nutrition By Durdana',
    template: '%s | Nutrition By Durdana',
  },
  description:
    'Consult Dt. Durdana, certified best nutritionist and weight loss coach in Malad West, Mumbai. Offering custom diet plans in Malad for weight loss, PCOS, gut healing, and lifestyle transformation at one of the best nutrition clinics in Malad.',
  keywords: [
    'Nutritionist in Malad',
    'Best Nutritionist in Malad',
    'Weight Loss Coach in Malad',
    'custom diet plans in Malad for weight loss',
    'best nutrition clinics in Malad',
    'nutritionist near Malad',
    'Dietitian in Malad West',
    'Clinical Nutritionist Mumbai',
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
    title: 'Best Nutritionist & Weight Loss Coach in Malad | Nutrition By Durdana',
    description:
      'Looking for the best nutritionist in Malad? Consult Dt. Durdana for custom diet plans in Malad for weight loss, PCOS management, and gut health at our top-rated Malad clinic.',
    url: 'https://dtdurdana.in',
    siteName: 'Nutrition By Durdana',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/about1.webp',
        width: 800,
        height: 1000,
        alt: 'Dt. Durdana - Best Nutritionist & Weight Loss Coach in Malad West, Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Nutritionist & Weight Loss Coach in Malad | Nutrition By Durdana',
    description:
      'Custom diet plans in Malad for weight loss, PCOS, and gut health by certified Clinical Nutritionist Dt. Durdana.',
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
      name: 'Nutrition By Durdana - Best Nutritionist in Malad',
      legalName: 'Nutrition By Durdana',
      url: 'https://dtdurdana.in',
      logo: 'https://dtdurdana.in/about1.webp',
      image: 'https://dtdurdana.in/about1.webp',
      description:
        'Certified Best Nutritionist, Weight Loss Coach and leading nutrition clinic in Malad West, Mumbai. Offering custom diet plans in Malad for weight loss, Ayurveda food science, PCOS, gut healing, and sustainable habit coaching.',
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
        'https://share.google/QFh9lhoDh7HEuCLu8',
        'https://www.instagram.com/nutritionbydurdana?igsh=MW52Z29jdXUxZmlxZg%3D%3D',
        'https://www.facebook.com/people/Durdana-Ansari/pfbid02hCqS4ViRSUBuGEm1GJ1hQfYEMboUViLhHNfXeZaqgyxRGa9KAcKbsXj7E7g8a8TKl/?rdid=xQwmhMSpgewm2S6g&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16etLftAcn%2F',
      ],
      hasMap: 'https://share.google/QFh9lhoDh7HEuCLu8',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '20',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://dtdurdana.in/#person',
      name: 'Dt. Durdana',
      jobTitle: 'Best Nutritionist & Weight Loss Coach in Malad',
      worksFor: {
        '@id': 'https://dtdurdana.in/#organization',
      },
      image: 'https://dtdurdana.in/about1.webp',
      description:
        'Certified Clinical Nutritionist, Weight Loss Coach and Health Consultant in Malad West, Mumbai providing custom diet plans for weight loss.',
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
