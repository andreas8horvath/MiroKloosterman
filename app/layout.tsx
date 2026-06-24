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
                  var now = Date.now();
                  var lastReload = null;
                  var storageWorking = false;

                  // Try using sessionStorage first
                  try {
                    if (typeof sessionStorage !== 'undefined' && sessionStorage) {
                      lastReload = sessionStorage.getItem('last_chunk_reload');
                      storageWorking = true;
                    }
                  } catch (e) {
                    // sessionStorage restricted in private browsing mode
                  }

                  // Fall back to window.name to persist reload time across pages securely
                  if (!storageWorking) {
                    try {
                      var parts = (window.name || '').split('::');
                      if (parts[0] === 'last_chunk_reload' && parts[1]) {
                        lastReload = parts[1];
                      }
                    } catch (e) {
                      // Fallback failed
                    }
                  }

                  var lastReloadTime = lastReload ? parseInt(lastReload, 10) : 0;

                  if (!lastReloadTime || now - lastReloadTime > 15000) {
                    // Record reload time safely
                    try {
                      if (storageWorking) {
                        sessionStorage.setItem('last_chunk_reload', now.toString());
                      } else {
                        window.name = 'last_chunk_reload::' + now.toString();
                      }
                    } catch (e) {
                      // If completely blocked, do not set anything
                    }

                    console.warn('Chunk loading error detected. Refreshing to load latest version...');
                    window.location.reload();
                  } else {
                    console.error('Repeated chunk loading error within 15s. Reload skipped to prevent endless loop.');
                  }
                }

                // Catch script loading network errors (during capture phase)
                window.addEventListener('error', function(e) {
                  if (!e) return;
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
                  if (!e) return;
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
