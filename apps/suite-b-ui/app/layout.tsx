import "./globals.css";
import Link from "next/link";
export const metadata = { title: "Suite B UI", description: "Suite B UI UI" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex">
        <a className="sr-only focus:not-sr-only" href="#content">Skip to content</a>
        <aside className="w-60 p-4 border-r">
          <h1 className="font-bold mb-4">Suite B UI</h1>
          <nav className="grid gap-2">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/health">Health</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </aside>
        <main id="content" className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
