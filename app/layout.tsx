import type {Metadata} from 'next';
import { Cormorant_Garamond, Outfit } from 'next/font/google';
import LayoutWrapper from '@/components/LayoutWrapper';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Miro Kloosterman — Healer, Coach & Retreat Guide',
  description: 'Come home to yourself. Feel alive again. Private retreats in Bali. Group retreats around the world. One-on-one healing and coaching, in person or online.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function forceReload() {
                  try {
                    var now = Date.now();
                    var lastReload = sessionStorage.getItem('last_chunk_reload');
                    if (!lastReload || now - parseInt(lastReload, 10) > 15000) {
                      sessionStorage.setItem('last_chunk_reload', now.toString());
                      console.warn('Chunk loading error detected. Refreshing to load latest version...');
                      window.location.reload();
                    } else {
                      console.error('Repeated chunk loading error. Skipping reload to avoid loop.');
                    }
                  } catch (e) {
                    window.location.reload();
                  }
                }

                // Catch script loading network errors (during capture phase)
                window.addEventListener('error', function(e) {
                  var target = e.target;
                  if (target && target.tagName === 'SCRIPT') {
                    var src = target.src || '';
                    if (src.indexOf('_next/static') !== -1 || src.indexOf('chunk') !== -1) {
                      forceReload();
                    }
                  }
                }, true);

                // Catch runtime chunk load errors (Webpack/Turbopack chunk errors)
                window.addEventListener('unhandledrejection', function(e) {
                  var reason = e.reason;
                  if (reason) {
                    var msg = reason.message || '';
                    var name = reason.name || '';
                    if (name === 'ChunkLoadError' || msg.indexOf('ChunkLoadError') !== -1 || msg.indexOf('Loading chunk') !== -1) {
                      forceReload();
                    }
                  }
                });
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#FBF8F3] text-[#322C2B] font-body antialiased min-h-screen flex flex-col">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
