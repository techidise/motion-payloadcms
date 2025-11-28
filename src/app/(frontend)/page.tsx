import { headers as getHeaders } from 'next/headers.js';
import Image from 'next/image';
import { getPayload } from 'payload';
import React from 'react';
import { fileURLToPath } from 'url';

import config from '@payload-config';

// import './styles.css';

import Hero from '@/src/components/main-components/Hero';
import Footer from '@/src/components/main-components/Footer';

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`;

  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />

      {/* <div className="content">
        <picture></picture>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
