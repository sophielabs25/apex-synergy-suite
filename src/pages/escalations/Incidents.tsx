import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Plus, Clock, Eye } from "lucide-react";

const Incidents = () => {
  const incidents = [
    {
      id: "INC-001",
      title: "Medication Administration Error",
      priority: "High",
      status: "Under Investigation",
      reporter: "Sarah Johnson",
      date: "2024-01-15",
      category: "Medical"
    },
    {
      id: "INC-002", 
      title: "Service User Fall",
      priority: "Medium",
      status: "Resolved",
      reporter: "Michael Brown",
      date: "2024-01-14",
      category: "Safety"
    },
    {
      id: "INC-003",
      title: "Equipment Malfunction",
      priority: "Low",
      status: "Open",
      reporter: "Emma Davis",
      date: "2024-01-13",
      category: "Equipment"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'Low': return 'bg-green-500/10 text-green-500 border-green-500/20';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Investigation': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Resolved': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Open': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Incident Management</h1>
          <p className="text-muted-foreground">Track and manage all incident reports</p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Report New Incident
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border/50 shadow-card-custom">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Incidents</p>
                <p className="text-2xl font-bold text-foreground">156</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-card-custom">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Cases</p>
                <p className="text-2xl font-bold text-foreground">23</p>
              </div>
              <Clock className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-card-custom">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                <p className="text-2xl font-bold text-foreground">8</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-card-custom">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Resolved</p>
                <p className="text-2xl font-bold text-foreground">125</p>
              </div>
              <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 shadow-card-custom">
        <CardHeader>
          <CardTitle>Recent Incidents</CardTitle>
          <CardDescription>Latest incident reports requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm text-primary">{incident.id}</span>
                    <Badge className={getPriorityColor(incident.priority)}>
                      {incident.priority}
                    </Badge>
                    <Badge className={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground">{incident.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Reporter: {incident.reporter}</span>
                    <span>Date: {incident.date}</span>
                    <span>Category: {incident.category}</span>
                  </div>
                </div>
                <Button variant="outline" size="icon" className="border-border/50">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Incidents;