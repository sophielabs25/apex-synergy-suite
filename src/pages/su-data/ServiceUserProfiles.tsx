import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { StatsCard } from "@/components/shared/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, AlertTriangle, Eye, Edit, Trash2 } from "lucide-react";

const serviceUsers = [
  {
    id: "SU001",
    name: "John Smith",
    age: 34,
    gender: "Male",
    dateOfBirth: "1990-03-15",
    address: "123 Main St, London",
    contactNumber: "07700 900 123",
    emergencyContact: "Jane Smith - 07700 900 124",
    serviceType: "Mental Health",
    riskLevel: "Medium",
    caseWorker: "Dr. Sarah Wilson",
    lastAssessment: "2024-01-15",
    status: "Active"
  },
  {
    id: "SU002",
    name: "Mary Johnson",
    age: 28,
    gender: "Female",
    dateOfBirth: "1996-07-22",
    address: "456 Oak Ave, Manchester",
    contactNumber: "07700 900 125",
    emergencyContact: "Bob Johnson - 07700 900 126",
    serviceType: "Learning Disability",
    riskLevel: "Low",
    caseWorker: "Emma Thompson",
    lastAssessment: "2024-01-20",
    status: "Active"
  },
  {
    id: "SU003",
    name: "Robert Brown",
    age: 42,
    gender: "Male",
    dateOfBirth: "1982-11-08",
    address: "789 Pine Rd, Birmingham",
    contactNumber: "07700 900 127",
    emergencyContact: "Lisa Brown - 07700 900 128",
    serviceType: "Physical Disability",
    riskLevel: "High",
    caseWorker: "Michael Davies",
    lastAssessment: "2024-01-10",
    status: "Under Review"
  }
];

const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name", sortable: true },
  { key: "age", label: "Age", sortable: true },
  { key: "serviceType", label: "Service Type", sortable: true, filterable: true },
  { key: "riskLevel", label: "Risk Level", sortable: true, filterable: true },
  { key: "caseWorker", label: "Case Worker", sortable: true },
  { key: "lastAssessment", label: "Last Assessment", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function ServiceUserProfiles() {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleAddNew = () => {
    console.log("Add new service user");
  };

  const handleExport = () => {
    console.log("Export service user data");
  };

  const handleRowClick = (user: any) => {
    setSelectedUser(user);
  };

  const renderActions = (user: any) => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm" onClick={() => setSelectedUser(user)}>
        <Eye className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Edit className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Service User Profiles"
        description="Comprehensive service user management with detailed profiles and care plans"
        showAddButton
        showExportButton
        showSearch
        onAdd={handleAddNew}
        onExport={handleExport}
      />

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <StatsCard
          title="Total Service Users"
          value="1,247"
          description="Active service users"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Cases"
          value="1,189"
          description="Currently receiving services"
          icon={UserCheck}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Under Review"
          value="45"
          description="Cases under assessment"
          icon={AlertTriangle}
          trend={{ value: -3, isPositive: false }}
        />
        <StatsCard
          title="High Risk"
          value="23"
          description="Requiring immediate attention"
          icon={UserX}
          trend={{ value: -15, isPositive: true }}
        />
      </div>

      {/* Main Content */}
      <div className="px-6">
        {selectedUser ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Service User Details: {selectedUser.name}
                <Button variant="outline" onClick={() => setSelectedUser(null)}>
                  Back to List
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Personal Information</h3>
                  <div className="space-y-2">
                    <p><strong>ID:</strong> {selectedUser.id}</p>
                    <p><strong>Name:</strong> {selectedUser.name}</p>
                    <p><strong>Age:</strong> {selectedUser.age}</p>
                    <p><strong>Gender:</strong> {selectedUser.gender}</p>
                    <p><strong>Date of Birth:</strong> {selectedUser.dateOfBirth}</p>
                    <p><strong>Address:</strong> {selectedUser.address}</p>
                    <p><strong>Contact:</strong> {selectedUser.contactNumber}</p>
                    <p><strong>Emergency Contact:</strong> {selectedUser.emergencyContact}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Service Information</h3>
                  <div className="space-y-2">
                    <p><strong>Service Type:</strong> {selectedUser.serviceType}</p>
                    <p><strong>Risk Level:</strong> 
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        selectedUser.riskLevel === 'High' ? 'bg-red-100 text-red-800' :
                        selectedUser.riskLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {selectedUser.riskLevel}
                      </span>
                    </p>
                    <p><strong>Case Worker:</strong> {selectedUser.caseWorker}</p>
                    <p><strong>Last Assessment:</strong> {selectedUser.lastAssessment}</p>
                    <p><strong>Status:</strong> {selectedUser.status}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <DataTable
            columns={columns}
            data={serviceUsers}
            onRowClick={handleRowClick}
            actions={renderActions}
          />
        )}
      </div>
    </div>
  );
}