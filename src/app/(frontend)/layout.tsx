import React from 'react';
import './globals.css';
import { ThemeProvider } from './provider';
import NavBar from '@/components/main-components/NavBar';
// import './styles.css';

export const metadata = {
  description: 'TechiDISE Studio',
  title:
    'We are a Product Design & Development Studio, based in Las Vegas Navada.',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-red-50 flex flex-col min-h-screen min-w-screen items-center justify-center">
        <main>
          <NavBar />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
