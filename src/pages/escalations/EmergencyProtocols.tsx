import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Phone, Shield, Clock, Users, FileText, Siren, Heart } from "lucide-react";

const emergencyContacts = [
  {
    id: "EC001",
    name: "Emergency Services",
    number: "999",
    type: "Primary",
    availability: "24/7",
    purpose: "Life-threatening emergencies"
  },
  {
    id: "EC002",
    name: "Crisis Response Team",
    number: "0800 123 4567",
    type: "Internal",
    availability: "24/7",
    purpose: "Mental health crises"
  },
  {
    id: "EC003",
    name: "Safeguarding Lead",
    number: "07700 900 123",
    type: "Internal",
    availability: "Office hours",
    purpose: "Safeguarding concerns"
  },
  {
    id: "EC004",
    name: "On-call Manager",
    number: "07700 900 456",
    type: "Internal",
    availability: "Out of hours",
    purpose: "Operational emergencies"
  }
];

const protocols = [
  {
    id: "PROT001",
    title: "Medical Emergency",
    severity: "Critical",
    steps: [
      "Call 999 immediately",
      "Provide first aid if trained",
      "Notify emergency contact",
      "Document incident",
      "Follow up with family"
    ],
    lastUpdated: "2024-01-15"
  },
  {
    id: "PROT002",
    title: "Mental Health Crisis",
    severity: "High",
    steps: [
      "Assess immediate danger",
      "Contact crisis response team",
      "Stay with service user",
      "Notify family if appropriate",
      "Complete risk assessment"
    ],
    lastUpdated: "2024-01-12"
  },
  {
    id: "PROT003",
    title: "Safeguarding Concern",
    severity: "High",
    steps: [
      "Ensure immediate safety",
      "Contact safeguarding lead",
      "Preserve evidence",
      "Complete incident report",
      "Notify relevant authorities"
    ],
    lastUpdated: "2024-01-10"
  }
];

export default function EmergencyProtocols() {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      default: return "bg-green-100 text-green-800";
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Emergency Protocols"
        description="Quick-access emergency procedures, contact directories, and crisis management tools"
        showExportButton
        onExport={() => console.log("Export emergency protocols")}
      />

      {/* Emergency Alert */}
      <div className="px-6">
        <Alert className="border-red-200 bg-red-50">
          <Siren className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Emergency Number: 999</strong> - For immediate life-threatening situations
          </AlertDescription>
        </Alert>
      </div>

      {/* Quick Access Emergency Contacts */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyContacts.map((contact) => (
                <div key={contact.id} className="p-4 border rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{contact.name}</h3>
                    <Badge variant={contact.type === "Primary" ? "destructive" : "secondary"}>
                      {contact.type}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-primary">{contact.number}</div>
                  <div className="text-sm text-muted-foreground">
                    <p><strong>Available:</strong> {contact.availability}</p>
                    <p><strong>Purpose:</strong> {contact.purpose}</p>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Protocols */}
      <div className="px-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Emergency Response Protocols
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {protocols.map((protocol) => (
                <Card key={protocol.id} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{protocol.title}</CardTitle>
                      <Badge className={getSeverityColor(protocol.severity)}>
                        {protocol.severity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Response Steps:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                          {protocol.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground">
                          Last updated: {protocol.lastUpdated}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <FileText className="mr-2 h-4 w-4" />
                          View Full Protocol
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Action Cards */}
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-semibold text-red-800 mb-2">Medical Emergency</h3>
              <p className="text-sm text-red-600">Call 999 immediately</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-orange-800 mb-2">Mental Health Crisis</h3>
              <p className="text-sm text-orange-600">Crisis response team</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">Safeguarding</h3>
              <p className="text-sm text-blue-600">Report concerns</p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-green-800 mb-2">Staff Support</h3>
              <p className="text-sm text-green-600">On-call manager</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}