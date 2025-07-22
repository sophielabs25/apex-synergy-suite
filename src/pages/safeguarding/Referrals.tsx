import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Clock, AlertTriangle, CheckCircle, Eye, Edit, Share } from "lucide-react";

const referrals = [
  {
    id: "REF001",
    referralNumber: "SG-REF-2024-001",
    serviceUser: "John Smith",
    referredBy: "GP Surgery",
    dateReceived: "2024-01-20",
    riskLevel: "High",
    concern: "Self-harm indicators",
    status: "Assessment Pending",
    assignedTo: "Dr. Sarah Wilson",
    targetDate: "2024-01-25",
    agency: "Mental Health Team"
  },
  {
    id: "REF002",
    referralNumber: "SG-REF-2024-002",
    serviceUser: "Mary Johnson",
    referredBy: "Social Services",
    dateReceived: "2024-01-18",
    riskLevel: "Medium",
    concern: "Domestic violence concerns",
    status: "Under Investigation",
    assignedTo: "Emma Thompson",
    targetDate: "2024-01-28",
    agency: "Safeguarding Team"
  },
  {
    id: "REF003",
    referralNumber: "SG-REF-2024-003",
    serviceUser: "Robert Brown",
    referredBy: "Police",
    dateReceived: "2024-01-15",
    riskLevel: "Critical",
    concern: "Financial abuse suspected",
    status: "Action Plan Active",
    assignedTo: "Michael Davies",
    targetDate: "2024-01-22",
    agency: "Adult Protection"
  }
];

const columns = [
  { key: "referralNumber", label: "Referral Number", sortable: true },
  { key: "serviceUser", label: "Service User", sortable: true },
  { key: "referredBy", label: "Referred By", sortable: true, filterable: true },
  { key: "dateReceived", label: "Date Received", sortable: true },
  { key: "riskLevel", label: "Risk Level", sortable: true, filterable: true },
  { key: "concern", label: "Concern", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true },
  { key: "assignedTo", label: "Assigned To", sortable: true },
  { key: "targetDate", label: "Target Date", sortable: true }
];

export default function Referrals() {
  const handleAddNew = () => {
    console.log("Add new referral");
  };

  const handleExport = () => {
    console.log("Export referrals data");
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "assessment pending": return "bg-blue-100 text-blue-800";
      case "under investigation": return "bg-yellow-100 text-yellow-800";
      case "action plan active": return "bg-orange-100 text-orange-800";
      case "resolved": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderActions = (referral: any) => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Share className="h-4 w-4" />
      </Button>
    </div>
  );

  const enhancedData = referrals.map(referral => ({
    ...referral,
    riskLevel: (
      <Badge className={getRiskColor(referral.riskLevel)}>
        {referral.riskLevel}
      </Badge>
    ),
    status: (
      <Badge className={getStatusColor(referral.status)}>
        {referral.status}
      </Badge>
    )
  }));

  return (
    <div className="space-y-6">
      <PageHeader
        title="Safeguarding Referrals"
        description="Multi-agency referral system with risk screening, priority assignment, and response time tracking"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Total Referrals"
          value="342"
          description="All time referrals"
          icon={UserPlus}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Pending Assessment"
          value="23"
          description="Awaiting initial review"
          icon={Clock}
          trend={{ value: 8, isPositive: false }}
        />
        <StatsCard
          title="High Risk"
          value="15"
          description="Critical/High priority cases"
          icon={AlertTriangle}
          trend={{ value: -20, isPositive: true }}
        />
        <StatsCard
          title="Resolved This Month"
          value="45"
          description="Successfully completed"
          icon={CheckCircle}
          trend={{ value: 18, isPositive: true }}
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