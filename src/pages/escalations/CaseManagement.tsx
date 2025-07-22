import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Clock, CheckCircle, AlertCircle, Users, Eye, Edit, MessageCircle } from "lucide-react";

const cases = [
  {
    id: "CASE001",
    caseNumber: "CM-2024-001",
    serviceUser: "John Smith",
    caseManager: "Dr. Sarah Wilson",
    type: "Mental Health Support",
    priority: "High",
    status: "Active",
    openDate: "2024-01-15",
    nextReview: "2024-02-15",
    stakeholders: "Family, GP, Therapist",
    progress: "Good progress - attending sessions regularly"
  },
  {
    id: "CASE002",
    caseNumber: "CM-2024-002",
    serviceUser: "Mary Johnson",
    caseManager: "Emma Thompson",
    type: "Learning Disability Support",
    priority: "Medium",
    status: "Under Review",
    openDate: "2024-01-10",
    nextReview: "2024-02-10",
    stakeholders: "Family, Social Worker",
    progress: "Support plan needs updating"
  },
  {
    id: "CASE003",
    caseNumber: "CM-2024-003",
    serviceUser: "Robert Brown",
    caseManager: "Michael Davies",
    type: "Physical Disability",
    priority: "Low",
    status: "Closing",
    openDate: "2023-12-01",
    nextReview: "2024-01-25",
    stakeholders: "Family, OT, Physio",
    progress: "Goals achieved - preparing for closure"
  }
];

const columns = [
  { key: "caseNumber", label: "Case Number", sortable: true },
  { key: "serviceUser", label: "Service User", sortable: true },
  { key: "caseManager", label: "Case Manager", sortable: true },
  { key: "type", label: "Type", sortable: true, filterable: true },
  { key: "priority", label: "Priority", sortable: true, filterable: true },
  { key: "status", label: "Status", sortable: true, filterable: true },
  { key: "openDate", label: "Open Date", sortable: true },
  { key: "nextReview", label: "Next Review", sortable: true }
];

export default function CaseManagement() {
  const handleAddNew = () => {
    console.log("Add new case");
  };

  const handleExport = () => {
    console.log("Export case data");
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-blue-100 text-blue-800";
      case "under review": return "bg-yellow-100 text-yellow-800";
      case "closing": return "bg-orange-100 text-orange-800";
      case "closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderActions = (caseItem: any) => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <MessageCircle className="h-4 w-4" />
      </Button>
    </div>
  );

  const enhancedData = cases.map(caseItem => ({
    ...caseItem,
    priority: (
      <Badge className={getPriorityColor(caseItem.priority)}>
        {caseItem.priority}
      </Badge>
    ),
    status: (
      <Badge className={getStatusColor(caseItem.status)}>
        {caseItem.status}
      </Badge>
    )
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Case Management"
        description="Comprehensive case tracking with timeline views, stakeholder communication, and outcome measurement"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Open Cases"
          value="147"
          description="Currently active cases"
          icon={FolderOpen}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="High Priority"
          value="23"
          description="Requiring immediate attention"
          icon={AlertCircle}
          trend={{ value: -12, isPositive: true }}
        />
        <StatsCard
          title="Due for Review"
          value="34"
          description="Reviews scheduled this week"
          icon={Clock}
          trend={{ value: 15, isPositive: false }}
        />
        <StatsCard
          title="Cases Closed"
          value="89"
          description="Completed this month"
          icon={CheckCircle}
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