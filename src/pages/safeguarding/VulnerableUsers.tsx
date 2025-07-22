import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, AlertTriangle, Calendar, Eye, Edit, FileText } from "lucide-react";

const vulnerableUsers = [
  {
    id: "VU001",
    name: "John Smith",
    age: 34,
    vulnerabilityType: "Mental Health",
    riskLevel: "High",
    lastAssessment: "2024-01-15",
    nextReview: "2024-02-15",
    protectionPlan: "Active",
    keyWorker: "Dr. Sarah Wilson",
    emergencyContact: "Jane Smith",
    status: "Monitoring"
  },
  {
    id: "VU002",
    name: "Mary Johnson",
    age: 28,
    vulnerabilityType: "Learning Disability",
    riskLevel: "Medium",
    lastAssessment: "2024-01-10",
    nextReview: "2024-02-10",
    protectionPlan: "Under Review",
    keyWorker: "Emma Thompson",
    emergencyContact: "Bob Johnson",
    status: "Support Active"
  },
  {
    id: "VU003",
    name: "Robert Brown",
    age: 67,
    vulnerabilityType: "Physical Frailty",
    riskLevel: "Medium",
    lastAssessment: "2024-01-08",
    nextReview: "2024-02-08",
    protectionPlan: "Active",
    keyWorker: "Michael Davies",
    emergencyContact: "Lisa Brown",
    status: "Stable"
  }
];

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", sortable: true },
  { key: "vulnerabilityType", label: "Vulnerability Type", sortable: true, filterable: true },
  { key: "riskLevel", label: "Risk Level", sortable: true, filterable: true },
  { key: "lastAssessment", label: "Last Assessment", sortable: true },
  { key: "nextReview", label: "Next Review", sortable: true },
  { key: "protectionPlan", label: "Protection Plan", sortable: true, filterable: true },
  { key: "keyWorker", label: "Key Worker", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function VulnerableUsers() {
  const handleAddNew = () => {
    console.log("Add new vulnerable user");
  };

  const handleExport = () => {
    console.log("Export vulnerable users data");
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "critical": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPlanColor = (plan: string) => {
    switch (plan.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "under review": return "bg-yellow-100 text-yellow-800";
      case "pending": return "bg-orange-100 text-orange-800";
      case "expired": return "bg-red-100 text-red-800";
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
        <FileText className="h-4 w-4" />
      </Button>
    </div>
  );

  const enhancedData = vulnerableUsers.map(user => ({
    ...user,
    riskLevel: (
      <Badge className={getRiskColor(user.riskLevel)}>
        {user.riskLevel}
      </Badge>
    ),
    protectionPlan: (
      <Badge className={getPlanColor(user.protectionPlan)}>
        {user.protectionPlan}
      </Badge>
    )
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Vulnerable Service Users"
        description="Risk assessment tools, protection planning, review scheduling, and outcome monitoring"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Vulnerable Users"
          value="187"
          description="Currently identified"
          icon={Shield}
          trend={{ value: 5, isPositive: false }}
        />
        <StatsCard
          title="High Risk"
          value="34"
          description="Requiring intensive support"
          icon={AlertTriangle}
          trend={{ value: -8, isPositive: true }}
        />
        <StatsCard
          title="Active Protection Plans"
          value="142"
          description="Currently in place"
          icon={FileText}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Due for Review"
          value="23"
          description="This month"
          icon={Calendar}
          trend={{ value: 15, isPositive: false }}
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