import type { APIRoute } from 'astro';
import { site } from '../content/site';
import { brand } from '../content/brand';

export const GET: APIRoute = () => new Response(JSON.stringify({
  name: site.name,
  short_name: site.name,
  lang: site.locale,
  start_url: '/',
  display: 'browser',
  background_color: brand.backgroundColor,
  theme_color: brand.themeColor,
  icons: [
    { src: '/web-app-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/web-app-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/web-app-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}), { headers: { 'Content-Type': 'application/manifest+json' } });
