import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-shell">
          <header className="w-full bg-gradient-to-r from-[var(--color-baltic-blue)] via-[var(--color-tropical-teal)] to-[var(--color-mint-leaf)]">
            <div className="content-column py-4">
              <Navbar />
            </div>
          </header>

          <main className="app-main py-4">
            <div className="content-column ">{children}</div>
          </main>

          <footer className="w-full bg-gradient-to-r from-[var(--color-baltic-blue)] via-[var(--color-tropical-teal)] to-[var(--color-mint-leaf)]">
            <div className="">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
