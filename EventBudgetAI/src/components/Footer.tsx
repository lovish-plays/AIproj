
import React from 'react';
import { BarChart3, Heart, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">EventBudgetAI</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Intelligent event budget planning powered by AI.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 EventBudgetAI. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center">
          <span>Made with</span>
          <Heart className="h-3 w-3 mx-1 text-red-500" />
          <span>by EventBudgetAI Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
