import { Button } from "@/components/ui/button";
import { Plus, Download, Upload, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PageHeaderProps {
  title: string;
  description?: string;
  showAddButton?: boolean;
  showExportButton?: boolean;
  showImportButton?: boolean;
  showSearch?: boolean;
  onAdd?: () => void;
  onExport?: () => void;
  onImport?: () => void;
  onSearch?: (query: string) => void;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  description,
  showAddButton = false,
  showExportButton = false,
  showImportButton = false,
  showSearch = false,
  onAdd,
  onExport,
  onImport,
  onSearch,
  children
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 p-6 border-b border-border/50 bg-gradient-to-r from-background to-muted/20">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          )}
          
          {showImportButton && (
            <Button variant="outline" onClick={onImport}>
              <Upload className="mr-2 h-4 w-4" />
              Import
            </Button>
          )}
          
          {showExportButton && (
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          )}
          
          {showAddButton && (
            <Button onClick={onAdd}>
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
}