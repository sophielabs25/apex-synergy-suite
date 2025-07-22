import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, CheckCircle, XCircle, MessageSquare, Eye, Edit } from "lucide-react";

const complaints = [
  {
    id: "CMP001",
    reference: "CMP-2024-001",
    complainant: "Sarah Wilson",
    dateReceived: "2024-01-20",
    category: "Service Quality",
    priority: "High",
    status: "Under Investigation",
    assignedTo: "John Davies",
    targetDate: "2024-02-03",
    description: "Concerns about quality of care provided during home visit"
  },
  {
    id: "CMP002",
    reference: "CMP-2024-002",
    complainant: "Michael Brown",
    dateReceived: "2024-01-18",
    category: "Staff Conduct",
    priority: "Medium",
    status: "Resolved",
    assignedTo: "Emma Thompson",
    targetDate: "2024-02-01",
    description: "Inappropriate behavior from support worker"
  },
  {
    id: "CMP003",
    reference: "CMP-2024-003",
    complainant: "Lisa Davis",
    dateReceived: "2024-01-15",
    category: "Access to Services",
    priority: "Low",
    status: "Acknowledged",
    assignedTo: "Sarah Mitchell",
    targetDate: "2024-01-29",
    description: "Difficulty accessing mental health services"
  }
];

const columns = [
  { key: "reference", label: "Reference", sortable: true },
  { key: "complainant", label: "Complainant", sortable: true },
  { key: "dateReceived", label: "Date Received", sortable: true },
  { key: "category", label: "Category", sortable: true, filterable: true },
  { key: "priority", label: "Priority", sortable: true, filterable: true },
  { key: "status", label: "Status", sortable: true, filterable: true },
  { key: "assignedTo", label: "Assigned To", sortable: true },
  { key: "targetDate", label: "Target Date", sortable: true }
];

export default function Complaints() {
  const handleAddNew = () => {
    console.log("Add new complaint");
  };

  const handleExport = () => {
    console.log("Export complaints data");
  };

  const renderActions = (complaint: any) => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Edit className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Complaints Management"
        description="Multi-channel complaint intake with resolution tracking and satisfaction monitoring"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Total Complaints"
          value="147"
          description="All time complaints"
          icon={MessageSquare}
          trend={{ value: -12, isPositive: true }}
        />
        <StatsCard
          title="Open Cases"
          value="23"
          description="Currently under investigation"
          icon={Clock}
          trend={{ value: 5, isPositive: false }}
        />
        <StatsCard
          title="Resolved This Month"
          value="18"
          description="Successfully resolved"
          icon={CheckCircle}
          trend={{ value: 22, isPositive: true }}
        />
        <StatsCard
          title="High Priority"
          value="5"
          description="Requiring urgent attention"
          icon={AlertTriangle}
          trend={{ value: -40, isPositive: true }}
        />
      </div>

      {/* Main Content */}
      <div className="px-6">
        <DataTable
          columns={columns}
          data={complaints}
          actions={renderActions}
        />
      </div>
    </div>
  );
}