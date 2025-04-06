
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  PieChart, 
  IndianRupee, 
  Users, 
  Calendar, 
  Plus,
  Sparkles
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BudgetChart, { BudgetCategory } from '@/components/BudgetChart';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

// Sample data
const sampleBudgetData: BudgetCategory[] = [
  { name: 'Venue', value: 50000, color: '#8b5cf6' },
  { name: 'Catering', value: 35000, color: '#3b82f6' },
  { name: 'Decor', value: 15000, color: '#10b981' },
  { name: 'Entertainment', value: 20000, color: '#f59e0b' },
  { name: 'Photography', value: 18000, color: '#ec4899' },
  { name: 'Miscellaneous', value: 12000, color: '#6366f1' },
];

// Event budget template suggestions
const budgetTemplates = [
  { name: 'Corporate Conference', budget: 150000 },
  { name: 'Wedding', budget: 250000 },
  { name: 'Birthday Party', budget: 30000 },
  { name: 'Non-profit Fundraiser', budget: 80000 },
  { name: 'Product Launch', budget: 120000 },
];

const Dashboard = () => {
  const [eventName, setEventName] = useState('My Corporate Event');
  const [totalBudget, setTotalBudget] = useState(150000);
  const [guestCount, setGuestCount] = useState(100);
  const [eventDate, setEventDate] = useState('2025-08-15');
  const [budgetData, setBudgetData] = useState<BudgetCategory[]>(sampleBudgetData);
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();
  const navigate = useNavigate();

  // Calculate totals and statistics
  const totalAllocated = budgetData.reduce((sum, item) => sum + item.value, 0);
  const remainingBudget = totalBudget - totalAllocated;
  const perGuestCost = totalBudget / guestCount;

  const optimizeBudget = () => {
    // Simulate AI optimization
    toast({
      title: "Budget Optimized!",
      description: "AI has analyzed your budget and made recommendations.",
    });
    
    // Simulated AI optimization result
    const optimizedData = [
      { name: 'Venue', value: 45000, color: '#8b5cf6' },
      { name: 'Catering', value: 40000, color: '#3b82f6' },
      { name: 'Decor', value: 12000, color: '#10b981' },
      { name: 'Entertainment', value: 22000, color: '#f59e0b' },
      { name: 'Photography', value: 16000, color: '#ec4899' },
      { name: 'Miscellaneous', value: 15000, color: '#6366f1' },
    ];
    
    setBudgetData(optimizedData);
  };

  const applyTemplate = (template: typeof budgetTemplates[0]) => {
    setEventName(`My ${template.name}`);
    setTotalBudget(template.budget);
    
    // Adjust budget allocations based on template
    const newData = [...budgetData];
    const factor = template.budget / totalBudget;
    
    // Scale all budget items proportionally
    newData.forEach(item => {
      item.value = Math.round(item.value * factor);
    });
    
    setBudgetData(newData);
    
    toast({
      title: "Template Applied",
      description: `Applied the ${template.name} template to your budget.`,
    });
  };

  const saveChanges = () => {
    toast({
      title: "Changes Saved",
      description: "Your event settings have been updated successfully.",
    });
  };

  const createCustomTemplate = () => {
    toast({
      title: "Custom Template",
      description: "Creating a new template based on your current budget.",
    });
  };

  const askForMoreInsights = () => {
    navigate('/advisor');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold">{eventName}</h1>
              <p className="text-sm text-muted-foreground">
                Manage and optimize your event budget
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={optimizeBudget} className="text-sm">
                <Sparkles className="h-4 w-4 mr-1" />
                AI Optimize
              </Button>
              <Button size="sm" asChild>
                <a href="/advisor">
                  Ask AI Advisor
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground">Total Budget</p>
                    <h3 className="text-xl font-bold">₹{totalBudget.toLocaleString()}</h3>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-full text-primary">
                    <IndianRupee className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground">Remaining</p>
                    <h3 className="text-xl font-bold">₹{remainingBudget.toLocaleString()}</h3>
                  </div>
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <PieChart className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground">Guests</p>
                    <h3 className="text-xl font-bold">{guestCount}</h3>
                  </div>
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <Users className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground">Per Guest</p>
                    <h3 className="text-xl font-bold">₹{perGuestCost.toFixed(0)}</h3>
                  </div>
                  <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Budget Details</TabsTrigger>
                  <TabsTrigger value="settings">Event Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Budget Allocation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BudgetChart data={budgetData} totalBudget={totalBudget} />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="details">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Budget Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {budgetData.map((item, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div 
                                className="w-3 h-3 rounded-full mr-2" 
                                style={{ backgroundColor: item.color }}
                              ></div>
                              <span className="text-sm">{item.name}</span>
                            </div>
                            <div className="flex gap-4 items-center">
                              <span className="text-xs text-muted-foreground">
                                {((item.value / totalBudget) * 100).toFixed(1)}%
                              </span>
                              <span className="text-sm font-medium">₹{item.value.toLocaleString()}</span>
                            </div>
                          </div>
                        ))}
                        
                        <div className="pt-3 border-t flex justify-between font-medium text-sm">
                          <span>Total Allocated</span>
                          <span>₹{totalAllocated.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between text-green-600 font-medium text-sm">
                          <span>Remaining Budget</span>
                          <span>₹{remainingBudget.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Event Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="event-name" className="text-sm">Event Name</Label>
                            <Input 
                              id="event-name" 
                              value={eventName} 
                              onChange={(e) => setEventName(e.target.value)} 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="event-date" className="text-sm">Event Date</Label>
                            <Input 
                              id="event-date" 
                              type="date" 
                              value={eventDate} 
                              onChange={(e) => setEventDate(e.target.value)} 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="total-budget" className="text-sm">Total Budget (₹)</Label>
                            <Input 
                              id="total-budget" 
                              type="number" 
                              value={totalBudget} 
                              onChange={(e) => setTotalBudget(Number(e.target.value))} 
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="guest-count" className="text-sm">Number of Guests</Label>
                            <Input 
                              id="guest-count" 
                              type="number" 
                              value={guestCount} 
                              onChange={(e) => setGuestCount(Number(e.target.value))} 
                            />
                          </div>
                        </div>
                        
                        <Button className="mt-4" onClick={saveChanges}>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Budget Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-3">
                    Apply an AI-generated budget template based on your event type
                  </p>
                  
                  <div className="space-y-2">
                    {budgetTemplates.map((template, index) => (
                      <div 
                        key={index} 
                        className="p-2 border rounded-lg flex justify-between items-center hover:bg-muted/50 transition-colors cursor-pointer"
                        onClick={() => applyTemplate(template)}
                      >
                        <div>
                          <p className="text-sm font-medium">{template.name}</p>
                          <p className="text-xs text-muted-foreground">₹{template.budget.toLocaleString()}</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={(e) => {
                          e.stopPropagation();
                          applyTemplate(template);
                        }}>Apply</Button>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 text-sm" onClick={createCustomTemplate}>
                    <Plus className="h-4 w-4 mr-1" />
                    Create Custom Template
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">AI Budget Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="ai-bubble mb-3">
                    <p className="text-xs">
                      Based on your event type and guest count, your catering budget seems 
                      slightly low. Consider allocating an additional ₹5,000 for better meal options.
                    </p>
                  </div>
                  
                  <div className="ai-bubble">
                    <p className="text-xs">
                      You could save approximately ₹3,000 on venue costs by booking on a Friday 
                      instead of Saturday, while maintaining the same venue quality.
                    </p>
                  </div>
                  
                  <Button className="w-full mt-4 text-sm" onClick={askForMoreInsights}>
                    Ask for More Insights
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
