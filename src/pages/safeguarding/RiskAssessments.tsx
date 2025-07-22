import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { AlertTriangle, Shield, Calendar, TrendingUp } from "lucide-react";

const riskAssessments = [
  { id: "RA001", serviceUser: "John Smith", assessmentType: "Mental Health", riskScore: "8/10", lastReview: "2024-01-15", nextReview: "2024-02-15", status: "Active" }
];

const columns = [
  { key: "serviceUser", label: "Service User", sortable: true },
  { key: "assessmentType", label: "Assessment Type", sortable: true, filterable: true },
  { key: "riskScore", label: "Risk Score", sortable: true },
  { key: "lastReview", label: "Last Review", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function RiskAssessments() {
  return (
    <div className="space-y-6">
      <PageHeader title="Risk Assessments" description="Dynamic risk assessment tools with scoring systems and review schedules" showAddButton showExportButton />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <StatsCard title="Total Assessments" value="245" icon={Shield} />
        <StatsCard title="High Risk" value="23" icon={AlertTriangle} />
        <StatsCard title="Due for Review" value="34" icon={Calendar} />
        <StatsCard title="Risk Reduction" value="15%" icon={TrendingUp} />
      </div>
      <div className="px-6"><DataTable columns={columns} data={riskAssessments} /></div>
    </div>
  );
}