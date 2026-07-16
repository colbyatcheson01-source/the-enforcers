import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'The Protectors | The Guardian of Justice',
  description: 'A symbol of justice, courage and unwavering faith. Building safer communities through support, awareness, and action. Stand for what\'s right.',
  keywords: ['community safety', 'victim support', 'violence prevention', 'Canadian nonprofit', 'The Protectors', 'Guardian of Justice'],
  authors: [{ name: 'The Protectors' }],
  openGraph: {
    title: 'The Protectors | The Guardian of Justice',
    description: 'Stand for what\'s right. A symbol of justice, courage and unwavering faith.',
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-pt-20">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-guardian-midnight">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-guardian-void focus:text-guardian-gold focus:border focus:border-guardian-gold focus:rounded-lg">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
