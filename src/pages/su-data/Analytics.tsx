import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp, Download, Filter } from "lucide-react";

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SU Data Analytics</h1>
          <p className="text-muted-foreground">Comprehensive service user data analysis and insights</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-border/50">
            <Filter className="w-4 h-4 mr-2" />
            Filter Data
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Total Service Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2,847</div>
            <p className="text-sm text-green-500">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Active Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,234</div>
            <p className="text-sm text-blue-500">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Engagement Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">87.3%</div>
            <p className="text-sm text-green-500">+3.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 shadow-card-custom">
        <CardHeader>
          <CardTitle>Service User Demographics</CardTitle>
          <CardDescription>Breakdown by age groups and service types</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-secondary/20 rounded-lg">
            <p className="text-muted-foreground">Interactive charts will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;