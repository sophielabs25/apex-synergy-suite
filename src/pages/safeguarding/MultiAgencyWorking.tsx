import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Users, Building2, MessageSquare, Calendar } from "lucide-react";

const agencies = [
  { id: "AG001", agencyName: "Social Services", contactPerson: "Sarah Johnson", activeCases: "23", lastMeeting: "2024-01-15", status: "Active" }
];

const columns = [
  { key: "agencyName", label: "Agency", sortable: true },
  { key: "contactPerson", label: "Contact Person", sortable: true },
  { key: "activeCases", label: "Active Cases", sortable: true },
  { key: "lastMeeting", label: "Last Meeting", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function MultiAgencyWorking() {
  return (
    <div className="space-y-6">
      <PageHeader title="Multi-Agency Working" description="Communication hub for partner agencies and shared case management" showAddButton showExportButton />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        <StatsCard title="Partner Agencies" value="45" icon={Building2} />
        <StatsCard title="Active Collaborations" value="156" icon={Users} />
        <StatsCard title="Joint Meetings" value="89" icon={Calendar} />
        <StatsCard title="Shared Cases" value="234" icon={MessageSquare} />
      </div>
      <div className="px-6"><DataTable columns={columns} data={agencies} /></div>
    </div>
  );
}