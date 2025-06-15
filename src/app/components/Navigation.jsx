// components/Navigation.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <header className="navigation-header">
      <div className="nav-container">
        <div></div>
        <Link href="/" className="logo-link">
          <div className="logo-placeholder">
            <span className="logo-text">MedConnect</span>
          </div>
        </Link>
        <nav className="nav-section">
          <ul className="navbar">
            <li>
              <Link
                href="/about"
                className={isActive('/about') ? 'nav-link active' : 'nav-link'} style={{padding: 20}}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={isActive('/contact') ? 'nav-link active' : 'nav-link'} style={{padding: 20}}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .navigation-header {
          background-color: #0f172a;
          border-bottom: 1px solid #1e293b;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 1rem 2rem;
        }

        .logo-link {
          text-decoration: none;
          justify-self: center;
        }

        .nav-section {
          justify-self: end;
          margin-left: auto;
        }

        .logo-placeholder {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-text {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, #7f5af0 0%, #00f2fe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar {
          display: flex;
          list-style: none;
          gap: 1rem;
          margin-left: auto;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: #e2e8f0;
          font-weight: 600;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .nav-link:hover {
          background-color: #1e293b;
          color: #ffffff;
        }

        .nav-link.active {
          background-color: #7f5af0;
          color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(127, 90, 240, 0.4);
        }

        .nav-link.active:hover {
          background-color: #6842f4;
        }

        @media (max-width: 768px) {
          .nav-container {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
            justify-items: center;
          }

          .logo-link {
            justify-self: center;
          }

          .nav-section {
            justify-self: center;
            margin-left: 0;
          }

          .navbar {
            gap: 0.5rem;
            margin-left: 0;
          }

          .nav-link {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .logo-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
}
