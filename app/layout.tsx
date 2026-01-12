import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="w-full">
            <div className="content-column">
              <Navbar />
            </div>
          </header>

          <main className="app-main">
            <div className="content-column">{children}</div>
          </main>

          <footer className="w-full">
            <div className="content-column">
              <Footer />
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
