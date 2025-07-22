import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";

// SU Data Module
import Analytics from "./pages/su-data/Analytics";
import ServiceUserProfiles from "./pages/su-data/ServiceUserProfiles";
import DataReports from "./pages/su-data/DataReports";
import Demographics from "./pages/su-data/Demographics";
import ServiceHistory from "./pages/su-data/ServiceHistory";

// Escalations Module
import Incidents from "./pages/escalations/Incidents";
import Complaints from "./pages/escalations/Complaints";
import VCSOrganisations from "./pages/escalations/VCSOrganisations";
import EmergencyProtocols from "./pages/escalations/EmergencyProtocols";
import CaseManagement from "./pages/escalations/CaseManagement";

// Safeguarding Module
import Referrals from "./pages/safeguarding/Referrals";
import VulnerableUsers from "./pages/safeguarding/VulnerableUsers";
import ChallengingUsers from "./pages/safeguarding/ChallengingUsers";
import RiskAssessments from "./pages/safeguarding/RiskAssessments";
import ProtectionPlans from "./pages/safeguarding/ProtectionPlans";
import MultiAgencyWorking from "./pages/safeguarding/MultiAgencyWorking";

// HSE Module
import IncidentReporting from "./pages/hse/IncidentReporting";
import RiskManagement from "./pages/hse/RiskManagement";
import TrainingRecords from "./pages/hse/TrainingRecords";
import SafetyAudits from "./pages/hse/SafetyAudits";
import PolicyManagement from "./pages/hse/PolicyManagement";
import EquipmentSafety from "./pages/hse/EquipmentSafety";

// Finance Module
import BudgetManagement from "./pages/finance/BudgetManagement";
import Invoicing from "./pages/finance/Invoicing";
import ExpenseTracking from "./pages/finance/ExpenseTracking";
import FinancialReports from "./pages/finance/FinancialReports";
import GrantManagement from "./pages/finance/GrantManagement";
import CostAnalysis from "./pages/finance/CostAnalysis";

// Property Module
import Defects from "./pages/property/Defects";
import Properties from "./pages/property/Properties";
import Compliance from "./pages/property/Compliance";
import MaintenanceSchedule from "./pages/property/MaintenanceSchedule";
import AssetManagement from "./pages/property/AssetManagement";
import Inspections from "./pages/property/Inspections";

// Employees Module
import StaffDirectory from "./pages/employees/StaffDirectory";
import HRManagement from "./pages/employees/HRManagement";
import PerformanceReviews from "./pages/employees/PerformanceReviews";
import TrainingDevelopment from "./pages/employees/TrainingDevelopment";
import Payroll from "./pages/employees/Payroll";
import LeaveManagement from "./pages/employees/LeaveManagement";
import DisciplinaryRecords from "./pages/employees/DisciplinaryRecords";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
            {/* SU Data Module */}
            <Route path="/su-data/analytics" element={<Analytics />} />
            <Route path="/su-data/service-user-profiles" element={<ServiceUserProfiles />} />
            <Route path="/su-data/data-reports" element={<DataReports />} />
            <Route path="/su-data/demographics" element={<Demographics />} />
            <Route path="/su-data/service-history" element={<ServiceHistory />} />

            {/* Escalations Module */}
            <Route path="/escalations/incidents" element={<Incidents />} />
            <Route path="/escalations/complaints" element={<Complaints />} />
            <Route path="/escalations/vcs-organisations" element={<VCSOrganisations />} />
            <Route path="/escalations/emergency-protocols" element={<EmergencyProtocols />} />
            <Route path="/escalations/case-management" element={<CaseManagement />} />

            {/* Safeguarding Module */}
            <Route path="/safeguarding/referrals" element={<Referrals />} />
            <Route path="/safeguarding/vulnerable-users" element={<VulnerableUsers />} />
            <Route path="/safeguarding/challenging-users" element={<ChallengingUsers />} />
            <Route path="/safeguarding/risk-assessments" element={<RiskAssessments />} />
            <Route path="/safeguarding/protection-plans" element={<ProtectionPlans />} />
            <Route path="/safeguarding/multi-agency-working" element={<MultiAgencyWorking />} />

            {/* HSE Module */}
            <Route path="/hse/incident-reporting" element={<IncidentReporting />} />
            <Route path="/hse/risk-management" element={<RiskManagement />} />
            <Route path="/hse/training-records" element={<TrainingRecords />} />
            <Route path="/hse/safety-audits" element={<SafetyAudits />} />
            <Route path="/hse/policy-management" element={<PolicyManagement />} />
            <Route path="/hse/equipment-safety" element={<EquipmentSafety />} />

            {/* Finance Module */}
            <Route path="/finance/budget-management" element={<BudgetManagement />} />
            <Route path="/finance/invoicing" element={<Invoicing />} />
            <Route path="/finance/expense-tracking" element={<ExpenseTracking />} />
            <Route path="/finance/financial-reports" element={<FinancialReports />} />
            <Route path="/finance/grant-management" element={<GrantManagement />} />
            <Route path="/finance/cost-analysis" element={<CostAnalysis />} />

            {/* Property Module */}
            <Route path="/property/defects" element={<Defects />} />
            <Route path="/property/properties" element={<Properties />} />
            <Route path="/property/compliance" element={<Compliance />} />
            <Route path="/property/maintenance-schedule" element={<MaintenanceSchedule />} />
            <Route path="/property/asset-management" element={<AssetManagement />} />
            <Route path="/property/inspections" element={<Inspections />} />

            {/* Employees Module */}
            <Route path="/employees/staff-directory" element={<StaffDirectory />} />
            <Route path="/employees/hr-management" element={<HRManagement />} />
            <Route path="/employees/performance-reviews" element={<PerformanceReviews />} />
            <Route path="/employees/training-development" element={<TrainingDevelopment />} />
            <Route path="/employees/payroll" element={<Payroll />} />
            <Route path="/employees/leave-management" element={<LeaveManagement />} />
            <Route path="/employees/disciplinary-records" element={<DisciplinaryRecords />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
