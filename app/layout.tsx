import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KHAT EATING SOMALI | $KHAT | ETERNAL CHEW',
  description: 'Born in the Somali trenches. Endless qaad chew. No sleep. Just pump.',
  icons: {
    icon: '/images/kes.png',
    apple: '/images/kes.png',
  },
  openGraph: {
    title: 'KHAT EATING SOMALI | $KHAT',
    description: 'Born in the Somali trenches. Endless qaad chew. No sleep. Just pump.',
    images: [
      {
        url: '/images/kes.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KHAT EATING SOMALI | $KHAT',
    description: 'Born in the Somali trenches. Endless qaad chew. No sleep. Just pump.',
    images: [
      {
        url: '/images/kes.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  );
}
