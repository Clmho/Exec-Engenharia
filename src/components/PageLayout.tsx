import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  React.useEffect(() => {
    if (title) {
      document.title = `${title} | Exec Engenharia`;
    }
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
