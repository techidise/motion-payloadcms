import React from 'react';
import './globals.css';
import { ThemeProvider } from './provider';
// import './styles.css';

export const metadata = {
  description: 'Motion Tutorial',
  title: "We are using JS Mastery's Motion Tutorial to learn Motion.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-red-50 flex flex-col min-h-screen min-w-screen items-center justify-center overflow-hidden">
        <main>
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
