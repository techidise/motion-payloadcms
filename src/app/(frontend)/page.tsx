//=========> JS Mastery | Motion Crash Course | ["Bento Grid Section"] [46:05] <=========\\

import { headers as getHeaders } from 'next/headers.js';
import Image from 'next/image';
import { getPayload } from 'payload';
import React from 'react';
import { fileURLToPath } from 'url';

import config from '@payload-config';

// import './styles.css';

import Hero from '@/components/main-components/Hero';
import Grid from '@/components/main-components/Grid';

export default async function HomePage() {
  const headers = await getHeaders();
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });
  const { user } = await payload.auth({ headers });

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`;

  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl min-h-screen min-w-screen">
        <Hero />
        <Grid />

        {/* <div className="content">
        <picture></picture>
        {!user && <h1>Welcome to your new project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
      </div> */}
      </div>
    </main>
  );
}
