import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Shield, Target, Users, CheckCircle } from "lucide-react";

const protectionPlans = [
  { id: "PP001", serviceUser: "John Smith", planType: "Safeguarding", goals: "Reduce isolation", progress: "75%", keyWorker: "Dr. Wilson", status: "Active" }
];

const columns = [
  { key: "serviceUser", label: "Service User", sortable: true },
  { key: "planType", label: "Plan Type", sortable: true, filterable: true },
  { key: "goals", label: "Goals", sortable: true },
  { key: "progress", label: "Progress", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function ProtectionPlans() {
  return (
    <div className="space-y-6">
      <PageHeader title="Protection Plans" description="Collaborative protection planning with goal setting and action tracking" showAddButton showExportButton />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <StatsCard title="Active Plans" value="156" icon={Shield} />
        <StatsCard title="Goals Achieved" value="89%" icon={Target} />
        <StatsCard title="Multi-Agency" value="67" icon={Users} />
        <StatsCard title="Completed" value="234" icon={CheckCircle} />
      </div>
      <div className="px-6"><DataTable columns={columns} data={protectionPlans} /></div>
    </div>
  );
}