import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AAW Sovereign Orchestrator — Fair Dinkum Publishing',
  description: 'A 14-agent AI workforce that takes a raw ebook idea and turns it into a live, revenue-generating digital asset. Powered by the Sovereign Workflow.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
