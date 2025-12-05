import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showHeaderLogo?: boolean;
  showFooterCTA?: boolean;
}

export function Layout({
  children,
  showHeader = true,
  showFooter = true,
  showHeaderLogo = true,
  showFooterCTA = true,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header showLogo={showHeaderLogo} />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer showCTA={showFooterCTA} />}
    </div>
  );
}
