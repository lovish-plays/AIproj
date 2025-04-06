
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Brain, 
  BarChart, 
  Calendar, 
  PieChart, 
  Zap, 
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient text-white">
          <div className="container py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
              Plan Your Event Budget with AI Intelligence
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90">
              EventBudgetAI uses advanced artificial intelligence to help you create, manage, 
              and optimize your event budgets with perfect precision.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/dashboard">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                See How It Works
              </Button>
            </div>
            
            <div className="mt-16 relative w-full max-w-5xl">
              <div className="glass-card overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" 
                  alt="Dashboard preview" 
                  className="w-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Powered by Artificial Intelligence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI technology helps you make smarter budgeting decisions for your events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="feature-icon-container mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Budget Advisor</h3>
              <p className="text-muted-foreground">
                Get personalized recommendations on how to allocate your budget based on event type, guest count, and priorities.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="feature-icon-container mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Prediction</h3>
              <p className="text-muted-foreground">
                Our AI analyzes market rates and historical data to predict accurate costs for your event elements.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="feature-icon-container mb-4">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-muted-foreground">
                Receive intelligent suggestions for cost-saving alternatives without compromising quality.
              </p>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-muted/50">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
                How EventBudgetAI Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple yet powerful approach to event budget management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">1</div>
                <h3 className="text-xl font-semibold mb-2">Create Your Event</h3>
                <p className="text-muted-foreground">
                  Enter your event details, expected guest count, and location to get started.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">2</div>
                <h3 className="text-xl font-semibold mb-2">Set Your Budget</h3>
                <p className="text-muted-foreground">
                  Define your total budget and priorities, and our AI will suggest optimal allocations.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6">3</div>
                <h3 className="text-xl font-semibold mb-2">Track & Optimize</h3>
                <p className="text-muted-foreground">
                  Track your spending in real-time and get AI-powered suggestions to optimize your budget.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-container">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your Next Event?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Join thousands of event planners who use EventBudgetAI to create perfect events within budget.
            </p>
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Start Planning Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
