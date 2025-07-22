import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataTable } from "@/components/shared/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, FileText, Filter, Eye } from "lucide-react";

const serviceHistory = [
  {
    id: "SH001",
    serviceUserId: "SU001",
    serviceUserName: "John Smith",
    serviceType: "Mental Health Assessment",
    date: "2024-01-20",
    time: "10:00 AM",
    duration: "60 mins",
    provider: "Dr. Sarah Wilson",
    location: "Main Office",
    outcome: "Assessment Complete",
    status: "Completed",
    notes: "Initial assessment completed. Follow-up scheduled."
  },
  {
    id: "SH002",
    serviceUserId: "SU002",
    serviceUserName: "Mary Johnson",
    serviceType: "Support Planning",
    date: "2024-01-19",
    time: "2:00 PM",
    duration: "45 mins",
    provider: "Emma Thompson",
    location: "Community Centre",
    outcome: "Plan Updated",
    status: "Completed",
    notes: "Support plan reviewed and updated with new goals."
  },
  {
    id: "SH003",
    serviceUserId: "SU003",
    serviceUserName: "Robert Brown",
    serviceType: "Home Visit",
    date: "2024-01-18",
    time: "11:30 AM",
    duration: "90 mins",
    provider: "Michael Davies",
    location: "Service User Home",
    outcome: "Needs Assessment",
    status: "Completed",
    notes: "Comprehensive home assessment conducted."
  },
  {
    id: "SH004",
    serviceUserId: "SU001",
    serviceUserName: "John Smith",
    serviceType: "Therapy Session",
    date: "2024-01-22",
    time: "3:00 PM",
    duration: "50 mins",
    provider: "Dr. Sarah Wilson",
    location: "Main Office",
    outcome: "In Progress",
    status: "Scheduled",
    notes: "Upcoming therapy session."
  },
  {
    id: "SH005",
    serviceUserId: "SU004",
    serviceUserName: "Lisa Davis",
    serviceType: "Crisis Intervention",
    date: "2024-01-17",
    time: "9:00 AM",
    duration: "120 mins",
    provider: "Emergency Team",
    location: "Emergency Centre",
    outcome: "Stabilized",
    status: "Completed",
    notes: "Crisis intervention successful. Follow-up arranged."
  }
];

const columns = [
  { key: "date", label: "Date", sortable: true },
  { key: "serviceUserName", label: "Service User", sortable: true },
  { key: "serviceType", label: "Service Type", sortable: true, filterable: true },
  { key: "provider", label: "Provider", sortable: true, filterable: true },
  { key: "duration", label: "Duration", sortable: true },
  { key: "outcome", label: "Outcome", sortable: true },
  { key: "status", label: "Status", sortable: true, filterable: true }
];

export default function ServiceHistory() {
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [filterPeriod, setFilterPeriod] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "bg-green-100 text-green-800";
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "in progress": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderActions = (record: any) => (
    <Button variant="ghost" size="sm" onClick={() => setSelectedRecord(record)}>
      <Eye className="h-4 w-4" />
    </Button>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Service History"
        description="Comprehensive timeline view of all service interactions and care delivery"
        showExportButton
        showSearch
        onExport={() => console.log("Export service history")}
      />

      {/* Filter Controls */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter Service History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={filterPeriod} onValueChange={setFilterPeriod}>
                <SelectTrigger>
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="assessment">Assessments</SelectItem>
                  <SelectItem value="therapy">Therapy Sessions</SelectItem>
                  <SelectItem value="support">Support Planning</SelectItem>
                  <SelectItem value="crisis">Crisis Intervention</SelectItem>
                  <SelectItem value="review">Reviews</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Providers</SelectItem>
                  <SelectItem value="dr-wilson">Dr. Sarah Wilson</SelectItem>
                  <SelectItem value="emma-thompson">Emma Thompson</SelectItem>
                  <SelectItem value="michael-davies">Michael Davies</SelectItem>
                  <SelectItem value="emergency-team">Emergency Team</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="px-6">
        {selectedRecord ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Service Record Details
                <Button variant="outline" onClick={() => setSelectedRecord(null)}>
                  Back to History
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Service Information
                  </h3>
                  <div className="space-y-2">
                    <p><strong>ID:</strong> {selectedRecord.id}</p>
                    <p><strong>Service User:</strong> {selectedRecord.serviceUserName}</p>
                    <p><strong>Service Type:</strong> {selectedRecord.serviceType}</p>
                    <p><strong>Provider:</strong> {selectedRecord.provider}</p>
                    <p><strong>Location:</strong> {selectedRecord.location}</p>
                    <p><strong>Status:</strong> 
                      <Badge className={`ml-2 ${getStatusColor(selectedRecord.status)}`}>
                        {selectedRecord.status}
                      </Badge>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule & Outcome
                  </h3>
                  <div className="space-y-2">
                    <p><strong>Date:</strong> {selectedRecord.date}</p>
                    <p><strong>Time:</strong> {selectedRecord.time}</p>
                    <p><strong>Duration:</strong> {selectedRecord.duration}</p>
                    <p><strong>Outcome:</strong> {selectedRecord.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Notes & Documentation
                </h3>
                <div className="p-4 bg-muted rounded-lg">
                  <p>{selectedRecord.notes}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button>Edit Record</Button>
                <Button variant="outline">Download Report</Button>
                <Button variant="outline">Schedule Follow-up</Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <DataTable
            columns={columns}
            data={serviceHistory}
            onRowClick={setSelectedRecord}
            actions={renderActions}
          />
        )}
      </div>
    </div>
  );
}