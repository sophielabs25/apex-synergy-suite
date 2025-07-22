import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Filter } from "lucide-react";

const reportTemplates = [
  {
    id: "monthly-summary",
    name: "Monthly Service Summary",
    description: "Comprehensive monthly overview of all service user activities",
    category: "Summary",
    lastGenerated: "2024-01-20",
    status: "Ready"
  },
  {
    id: "demographics-breakdown",
    name: "Demographics Breakdown",
    description: "Detailed analysis of service user demographics and trends",
    category: "Analytics",
    lastGenerated: "2024-01-18",
    status: "Ready"
  },
  {
    id: "service-outcomes",
    name: "Service Outcomes Report",
    description: "Outcome measurements and effectiveness analysis",
    category: "Outcomes",
    lastGenerated: "2024-01-15",
    status: "Generating"
  },
  {
    id: "compliance-audit",
    name: "Compliance Audit Report",
    description: "GDPR and regulatory compliance status report",
    category: "Compliance",
    lastGenerated: "2024-01-10",
    status: "Ready"
  },
  {
    id: "risk-assessment",
    name: "Risk Assessment Summary",
    description: "Overview of risk assessments and mitigation strategies",
    category: "Risk",
    lastGenerated: "2024-01-12",
    status: "Ready"
  },
  {
    id: "funding-report",
    name: "Funding & Resources Report",
    description: "Analysis of funding utilization and resource allocation",
    category: "Finance",
    lastGenerated: "2024-01-08",
    status: "Pending"
  }
];

export default function DataReports() {
  const handleGenerateReport = (reportId: string) => {
    console.log(`Generating report: ${reportId}`);
  };

  const handleDownloadReport = (reportId: string) => {
    console.log(`Downloading report: ${reportId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Generating": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Pending": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Data Reports"
        description="Generate and download comprehensive reports on service user data and analytics"
        showExportButton
        onExport={() => console.log("Export all reports")}
      />

      {/* Filter Controls */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Report Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="summary">Summary</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="outcomes">Outcomes</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                  <SelectItem value="risk">Risk</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                  <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="word">Word</SelectItem>
                </SelectContent>
              </Select>

              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reportTemplates.map((report) => (
            <Card key={report.id} className="transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{report.name}</CardTitle>
                    <Badge variant="secondary">{report.category}</Badge>
                  </div>
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {report.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Last Generated:</span>
                    <span>{report.lastGenerated}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(report.status)}>
                      {report.status}
                    </Badge>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleGenerateReport(report.id)}
                      disabled={report.status === "Generating"}
                    >
                      {report.status === "Generating" ? "Generating..." : "Generate"}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownloadReport(report.id)}
                      disabled={report.status !== "Ready"}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <FileText className="h-6 w-6" />
                Create Custom Report
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Calendar className="h-6 w-6" />
                Schedule Report
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Download className="h-6 w-6" />
                Download All Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}