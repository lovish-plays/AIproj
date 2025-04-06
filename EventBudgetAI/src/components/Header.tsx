
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Brain, 
  CalendarDays,
  Menu,
  X
} from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">EventBudgetAI</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/advisor" className="text-sm font-medium hover:text-primary transition-colors">
            AI Advisor
          </Link>
          <Button variant="default" size="sm" className="gap-1">
            <Brain className="h-4 w-4 mr-1" />
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className="p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/advisor" 
              className="p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Advisor
            </Link>
            <Button variant="default" size="sm" className="gap-1">
              <Brain className="h-4 w-4 mr-1" />
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
