import { useState } from "react";
import {
  Users,
  AlertTriangle,
  Shield,
  TrendingUp,
  Building,
  UserCheck,
  Database,
  FileText,
  Phone,
  Building2,
  Heart,
  Users2,
  AlertCircle,
  CheckCircle,
  DollarSign,
  CreditCard,
  PieChart,
  Home,
  Wrench,
  ClipboardCheck,
  UserPlus,
  Award,
  Settings,
  BarChart3,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const menuItems = [
  {
    title: "SU Data",
    icon: Database,
    items: [
      { title: "Analytics Dashboard", url: "/su-data/analytics", icon: BarChart3 },
      { title: "Service User Profiles", url: "/su-data/profiles", icon: Users },
      { title: "Data Reports", url: "/su-data/reports", icon: FileText },
      { title: "Demographics", url: "/su-data/demographics", icon: PieChart },
      { title: "Service History", url: "/su-data/history", icon: ClipboardCheck },
    ]
  },
  {
    title: "Escalations",
    icon: AlertTriangle,
    items: [
      { title: "Incidents", url: "/escalations/incidents", icon: AlertCircle },
      { title: "Complaints", url: "/escalations/complaints", icon: FileText },
      { title: "VCS Organisations", url: "/escalations/vcs", icon: Building2 },
      { title: "Emergency Protocols", url: "/escalations/emergency", icon: Shield },
      { title: "Case Management", url: "/escalations/cases", icon: ClipboardCheck },
    ]
  },
  {
    title: "SG (Safeguarding)",
    icon: Shield,
    items: [
      { title: "Referrals", url: "/sg/referrals", icon: Phone },
      { title: "Vulnerable Service Users", url: "/sg/vulnerable", icon: Heart },
      { title: "Challenging SU's", url: "/sg/challenging", icon: Users2 },
      { title: "Risk Assessments", url: "/sg/risk-assessments", icon: AlertTriangle },
      { title: "Protection Plans", url: "/sg/protection-plans", icon: Shield },
      { title: "Multi-Agency Working", url: "/sg/multi-agency", icon: Building2 },
    ]
  },
  {
    title: "HSE (Health & Safety)",
    icon: CheckCircle,
    items: [
      { title: "Incident Reporting", url: "/hse/incidents", icon: AlertCircle },
      { title: "Risk Management", url: "/hse/risk-management", icon: Shield },
      { title: "Training Records", url: "/hse/training", icon: Award },
      { title: "Safety Audits", url: "/hse/audits", icon: ClipboardCheck },
      { title: "Policy Management", url: "/hse/policies", icon: FileText },
      { title: "Equipment Safety", url: "/hse/equipment", icon: Wrench },
    ]
  },
  {
    title: "Finance",
    icon: DollarSign,
    items: [
      { title: "Budget Management", url: "/finance/budget", icon: PieChart },
      { title: "Invoicing", url: "/finance/invoicing", icon: CreditCard },
      { title: "Expense Tracking", url: "/finance/expenses", icon: TrendingUp },
      { title: "Financial Reports", url: "/finance/reports", icon: BarChart3 },
      { title: "Grant Management", url: "/finance/grants", icon: DollarSign },
      { title: "Cost Analysis", url: "/finance/analysis", icon: TrendingUp },
    ]
  },
  {
    title: "Property",
    icon: Building,
    items: [
      { title: "Defects", url: "/property/defects", icon: Wrench },
      { title: "Properties", url: "/property/properties", icon: Home },
      { title: "Compliance", url: "/property/compliance", icon: CheckCircle },
      { title: "Maintenance Schedule", url: "/property/maintenance", icon: ClipboardCheck },
      { title: "Asset Management", url: "/property/assets", icon: Building },
      { title: "Inspections", url: "/property/inspections", icon: Shield },
    ]
  },
  {
    title: "Employees",
    icon: UserCheck,
    items: [
      { title: "Staff Directory", url: "/employees/directory", icon: Users },
      { title: "HR Management", url: "/employees/hr", icon: UserPlus },
      { title: "Performance Reviews", url: "/employees/performance", icon: Award },
      { title: "Training & Development", url: "/employees/training", icon: BarChart3 },
      { title: "Payroll", url: "/employees/payroll", icon: CreditCard },
      { title: "Leave Management", url: "/employees/leave", icon: ClipboardCheck },
      { title: "Disciplinary Records", url: "/employees/disciplinary", icon: FileText },
    ]
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [openGroups, setOpenGroups] = useState<string[]>(["SU Data"]);
  const collapsed = state === "collapsed";

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-foreground shadow-glow font-medium" 
      : "hover:bg-secondary/50 transition-all duration-300 hover:shadow-card-custom";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-72"} collapsible="icon">
      <SidebarContent className="bg-gradient-subtle border-r border-border/50">
        {/* Logo Section */}
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Building className="w-6 h-6 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Elite Manager
                </h1>
                <p className="text-xs text-muted-foreground">Business Suite</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          {menuItems.map((section) => {
            const isGroupOpen = openGroups.includes(section.title);
            const hasActiveItem = section.items.some(item => isActive(item.url));
            
            return (
              <Collapsible
                key={section.title}
                open={isGroupOpen || hasActiveItem}
                onOpenChange={() => toggleGroup(section.title)}
                className="mb-2"
              >
                <SidebarGroup>
                  <CollapsibleTrigger asChild>
                    <SidebarGroupLabel className="group/label flex items-center justify-between p-3 hover:bg-secondary/30 rounded-lg transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <section.icon className="w-5 h-5 text-primary" />
                        {!collapsed && (
                          <span className="font-semibold text-foreground group-hover/label:text-primary transition-colors">
                            {section.title}
                          </span>
                        )}
                      </div>
                      {!collapsed && (
                        <div className="text-muted-foreground group-hover/label:text-primary transition-colors">
                          {isGroupOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </div>
                      )}
                    </SidebarGroupLabel>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {section.items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <NavLink 
                                to={item.url} 
                                className={`ml-6 p-3 rounded-lg transition-all duration-300 ${getNavCls({ isActive: isActive(item.url) })}`}
                              >
                                <item.icon className="w-4 h-4 mr-3" />
                                {!collapsed && <span className="text-sm">{item.title}</span>}
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            );
          })}
        </div>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4 border-t border-border/50">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-sm">
                <p className="font-medium text-foreground">Admin Panel</p>
                <p className="text-xs text-muted-foreground">System Settings</p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}