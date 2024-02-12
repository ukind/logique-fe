import { SearchProvider } from '@/context/search-provider';
import StyledComponentsRegistry from '@/lib/styled-component';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'normalize.css/normalize.css';

const roboto = Roboto({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Logique',
  description: 'Logique',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <StyledComponentsRegistry>
        <SearchProvider>
          <body>{children}</body>
        </SearchProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
