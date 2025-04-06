
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIAdvisor from '@/components/AIAdvisor';

const Advisor = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">AI Budget Advisor</h1>
            <p className="text-muted-foreground">
              Get expert advice and budget optimization from our AI assistant
            </p>
          </div>
          
          <div className="mb-8">
            <AIAdvisor />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Advisor;
