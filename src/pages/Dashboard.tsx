import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  AlertTriangle, 
  Shield, 
  Building, 
  TrendingUp, 
  DollarSign,
  BarChart3,
  CheckCircle,
  Clock,
  ArrowUpRight
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Service Users",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Open Incidents",
      value: "23",
      change: "-8%",
      icon: AlertTriangle,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10"
    },
    {
      title: "Safeguarding Cases",
      value: "156",
      change: "+5%",
      icon: Shield,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Properties Managed",
      value: "89",
      change: "+2%",
      icon: Building,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const recentActivities = [
    {
      title: "New Safeguarding Referral",
      description: "High priority case assigned to Team A",
      time: "2 minutes ago",
      type: "urgent"
    },
    {
      title: "Property Inspection Completed",
      description: "Compliance check passed for Property #45",
      time: "15 minutes ago",
      type: "success"
    },
    {
      title: "Staff Training Due",
      description: "5 employees require HSE refresher training",
      time: "1 hour ago",
      type: "warning"
    },
    {
      title: "Monthly Financial Report",
      description: "Budget analysis ready for review",
      time: "2 hours ago",
      type: "info"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-elite rounded-2xl p-8 text-white shadow-elegant">
        <h1 className="text-3xl font-bold mb-2">Welcome to Elite Manager</h1>
        <p className="text-white/80 text-lg">
          Your comprehensive business management dashboard
        </p>
        <div className="flex gap-4 mt-6">
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Generate Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border/50 shadow-card-custom hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center mt-1">
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2 border-border/50 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Activities
            </CardTitle>
            <CardDescription>
              Latest updates across all modules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'urgent' ? 'bg-red-500' :
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-amber-500' :
                  'bg-blue-500'
                }`} />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50 shadow-card-custom">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Frequently used functions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Users className="w-4 h-4 mr-2" />
              Add New Service User
            </Button>
            <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-secondary/50">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Incident
            </Button>
            <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-secondary/50">
              <Shield className="w-4 h-4 mr-2" />
              Create Safeguarding Case
            </Button>
            <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-secondary/50">
              <Building className="w-4 h-4 mr-2" />
              Property Inspection
            </Button>
            <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-secondary/50">
              <DollarSign className="w-4 h-4 mr-2" />
              Financial Entry
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="border-border/50 shadow-card-custom">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            System Status
          </CardTitle>
          <CardDescription>
            All systems operational
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium text-foreground">Database</p>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium text-foreground">API Services</p>
                <p className="text-sm text-muted-foreground">Operational</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <p className="font-medium text-foreground">Backup Systems</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;