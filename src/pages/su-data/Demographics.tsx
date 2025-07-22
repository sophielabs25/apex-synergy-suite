import { PageHeader } from "@/components/shared/PageHeader";
import { StatsCard } from "@/components/shared/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Calendar, MapPin, Activity, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";

const ageGroupData = [
  { name: "18-25", value: 145, percentage: 15.8 },
  { name: "26-35", value: 234, percentage: 25.5 },
  { name: "36-45", value: 198, percentage: 21.6 },
  { name: "46-55", value: 167, percentage: 18.2 },
  { name: "56-65", value: 123, percentage: 13.4 },
  { name: "65+", value: 50, percentage: 5.5 }
];

const serviceTypeData = [
  { name: "Mental Health", value: 423, color: "#8884d8" },
  { name: "Learning Disability", value: 287, color: "#82ca9d" },
  { name: "Physical Disability", value: 198, color: "#ffc658" },
  { name: "Substance Abuse", value: 145, color: "#ff7c7c" },
  { name: "Elderly Care", value: 134, color: "#8dd1e1" },
  { name: "Other", value: 98, color: "#d084d0" }
];

const genderData = [
  { name: "Female", value: 687, color: "#8884d8" },
  { name: "Male", value: 456, color: "#82ca9d" },
  { name: "Non-binary", value: 23, color: "#ffc658" },
  { name: "Prefer not to say", value: 19, color: "#ff7c7c" }
];

const trendsData = [
  { month: "Jan", newUsers: 45, activeUsers: 1156 },
  { month: "Feb", newUsers: 52, activeUsers: 1189 },
  { month: "Mar", newUsers: 48, activeUsers: 1203 },
  { month: "Apr", newUsers: 61, activeUsers: 1247 },
  { month: "May", newUsers: 55, activeUsers: 1289 },
  { month: "Jun", newUsers: 58, activeUsers: 1324 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0'];

export default function Demographics() {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Demographics"
        description="Comprehensive demographic analysis and visualization of service user data"
        showExportButton
        onExport={() => console.log("Export demographics data")}
      />

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Total Service Users"
          value="1,285"
          description="All registered users"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatsCard
          title="Active This Month"
          value="1,247"
          description="Currently receiving services"
          icon={UserCheck}
          trend={{ value: 8.3, isPositive: true }}
        />
        <StatsCard
          title="Average Age"
          value="38.5"
          description="Years across all users"
          icon={Calendar}
          trend={{ value: -0.8, isPositive: false }}
        />
        <StatsCard
          title="Locations Served"
          value="47"
          description="Different postcodes"
          icon={MapPin}
          trend={{ value: 15.2, isPositive: true }}
        />
      </div>

      {/* Demographics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6">
        {/* Age Groups */}
        <Card>
          <CardHeader>
            <CardTitle>Age Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageGroupData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Service Types */}
        <Card>
          <CardHeader>
            <CardTitle>Service Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gender Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Gender Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* User Growth Trends */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="newUsers" stroke="#8884d8" name="New Users" />
                <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" name="Active Users" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle>Detailed Age Group Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ageGroupData.map((group, index) => (
                <div key={group.name} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="font-medium">{group.name} years</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-bold">{group.value}</span>
                    <span className="text-muted-foreground">{group.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}