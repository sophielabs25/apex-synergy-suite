import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Handshake, Star, Eye, Edit, Phone, Mail } from "lucide-react";

const vcsOrganisations = [
  {
    id: "VCS001",
    name: "Community Care Network",
    type: "Charity",
    services: "Mental Health Support",
    contactPerson: "Dr. Sarah Johnson",
    phone: "0207 123 4567",
    email: "contact@ccn.org.uk",
    address: "123 Community St, London",
    partnership: "Active",
    rating: 4.8,
    contractValue: "£125,000",
    lastContact: "2024-01-18"
  },
  {
    id: "VCS002",
    name: "Disability Support Alliance",
    type: "Non-profit",
    services: "Disability Advocacy",
    contactPerson: "Michael Roberts",
    phone: "0161 987 6543",
    email: "info@dsa.org.uk",
    address: "456 Support Ave, Manchester",
    partnership: "Active",
    rating: 4.6,
    contractValue: "£95,000",
    lastContact: "2024-01-15"
  },
  {
    id: "VCS003",
    name: "Elder Care Foundation",
    type: "Foundation",
    services: "Elderly Care Services",
    contactPerson: "Emma Thompson",
    phone: "0121 555 7890",
    email: "hello@ecf.org.uk",
    address: "789 Elder Rd, Birmingham",
    partnership: "Under Review",
    rating: 4.2,
    contractValue: "£75,000",
    lastContact: "2024-01-10"
  }
];

const columns = [
  { key: "name", label: "Organisation", sortable: true },
  { key: "type", label: "Type", sortable: true, filterable: true },
  { key: "services", label: "Services", sortable: true },
  { key: "contactPerson", label: "Contact Person", sortable: true },
  { key: "partnership", label: "Partnership Status", sortable: true, filterable: true },
  { key: "rating", label: "Rating", sortable: true },
  { key: "contractValue", label: "Contract Value", sortable: true },
  { key: "lastContact", label: "Last Contact", sortable: true }
];

export default function VCSOrganisations() {
  const handleAddNew = () => {
    console.log("Add new VCS organisation");
  };

  const handleExport = () => {
    console.log("Export VCS data");
  };

  const renderActions = (org: any) => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        <Phone className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Mail className="h-4 w-4" />
      </Button>
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
        title="VCS Organisations"
        description="Directory of Voluntary and Community Sector partners with service agreements and collaboration tools"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Total Partners"
          value="156"
          description="VCS organisations"
          icon={Building2}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Active Partnerships"
          value="142"
          description="Currently collaborating"
          icon={Handshake}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Total Contract Value"
          value="£2.4M"
          description="Annual partnership value"
          icon={Star}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Service Users Reached"
          value="3,247"
          description="Through VCS partnerships"
          icon={Users}
          trend={{ value: 18, isPositive: true }}
        />
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle>Partnership Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Handshake className="h-6 w-6" />
                New Partnership
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Star className="h-6 w-6" />
                Performance Reviews
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                Service Mapping
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Building2 className="h-6 w-6" />
                Directory Management
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="px-6">
        <DataTable
          columns={columns}
          data={vcsOrganisations}
          actions={renderActions}
        />
      </div>
    </div>
  );
}