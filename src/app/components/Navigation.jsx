// components/Navigation.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
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
              <Link href="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .navigation-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
            color: black;
          justify-self: end;
        }

        .logo-placeholder {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-text {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.75rem;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .navbar {
          display: flex;
          list-style: none;
          gap: 0.5rem;
          margin-left: auto;
          padding: 0;
        }

        .nav-link {
          text-decoration: none;
          color: #1e293b;
          font-weight: 600;
          padding: 0.75rem 1.25rem;
          border-radius: 0.75rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          font-size: 0.95rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link:hover {
          color: #475569;
          background-color: rgba(248, 250, 252, 0.8);
          transform: translateY(-1px);
          -webkit-text-fill-color: #475569;
        }

        .nav-link.active {
          color: #ffffff;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-text-fill-color: #ffffff;
          box-shadow: 0 4px 14px 0 rgba(102, 126, 234, 0.3);
        }

        .nav-link.active:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px 0 rgba(102, 126, 234, 0.4);
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
          }

          .navbar {
            gap: 0.25rem;
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
