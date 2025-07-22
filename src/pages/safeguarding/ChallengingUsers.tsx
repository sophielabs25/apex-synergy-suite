import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserX, Target, TrendingUp, Users, Eye, Edit, MessageSquare } from "lucide-react";

const challengingUsers = [
  {
    id: "CU001",
    name: "David Wilson",
    age: 29,
    challengingBehavior: "Aggressive outbursts",
    severity: "High",
    triggers: "Crowded spaces, loud noises",
    interventionPlan: "De-escalation techniques",
    lastIncident: "2024-01-18",
    progress: "Improving",
    keyWorker: "Dr. Sarah Wilson",
    supportTeam: "Multi-disciplinary",
    status: "Active Support"
  },
  {
    id: "CU002",
    name: "Lisa Thompson",
    age: 35,
    challengingBehavior: "Self-harm tendencies",
    severity: "Critical",
    triggers: "Stress, isolation",
    interventionPlan: "24/7 observation",
    lastIncident: "2024-01-20",
    progress: "Stable",
    keyWorker: "Emma Thompson",
    supportTeam: "Crisis team",
    status: "Intensive Support"
  },
  {
    id: "CU003",
    name: "Michael Davis",
    age: 42,
    challengingBehavior: "Non-compliance",
    severity: "Medium",
    triggers: "Authority figures",
    interventionPlan: "Motivational interviewing",
    lastIncident: "2024-01-12",
    progress: "Good",
    keyWorker: "Michael Davies",
    supportTeam: "Community team",
    status: "Monitoring"
  }
];

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", sortable: true },
  { key: "challengingBehavior", label: "Challenging Behavior", sortable: true },
  { key: "severity", label: "Severity", sortable: true, filterable: true },
  { key: "interventionPlan", label: "Intervention Plan", sortable: true },
  { key: "lastIncident", label: "Last Incident", sortable: true },
  { key: "progress", label: "Progress", sortable: true, filterable: true },
  { key: "keyWorker", label: "Key Worker", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function ChallengingUsers() {
  const handleAddNew = () => {
    console.log("Add new challenging user profile");
  };

  const handleExport = () => {
    console.log("Export challenging users data");
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress: string) => {
    switch (progress.toLowerCase()) {
      case "improving": return "bg-green-100 text-green-800";
      case "good": return "bg-blue-100 text-blue-800";
      case "stable": return "bg-yellow-100 text-yellow-800";
      case "declining": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderActions = (user: any) => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <MessageSquare className="h-4 w-4" />
      </Button>
    </div>
  );

  const enhancedData = challengingUsers.map(user => ({
    ...user,
    severity: (
      <Badge className={getSeverityColor(user.severity)}>
        {user.severity}
      </Badge>
    ),
    progress: (
      <Badge className={getProgressColor(user.progress)}>
        {user.progress}
      </Badge>
    )
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Challenging Service Users"
        description="Behavioral support plans, intervention strategies, progress tracking, and multi-disciplinary team coordination"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Challenging Behaviors"
          value="89"
          description="Users requiring support"
          icon={UserX}
          trend={{ value: -12, isPositive: true }}
        />
        <StatsCard
          title="Active Interventions"
          value="67"
          description="Current support plans"
          icon={Target}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Showing Progress"
          value="78%"
          description="Improvement rate"
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Team Coordination"
          value="156"
          description="Multi-disciplinary meetings"
          icon={Users}
          trend={{ value: 22, isPositive: true }}
        />
      </div>

      {/* Main Content */}
      <div className="px-6">
        <DataTable
          columns={columns}
          data={enhancedData}
          actions={renderActions}
        />
      </div>
    </div>
  );
}