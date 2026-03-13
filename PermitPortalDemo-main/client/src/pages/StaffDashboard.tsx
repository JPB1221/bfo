/**
 * PAGE: Staff Dashboard
 * DESIGN: Warm Civic Modernism — dark sidebar (#1E3A5F), white content area
 * Updates: Maplewood city seal, GIS Map Preview panel, Document Upload widget
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  LayoutDashboard,
  FileText,
  Building2,
  ClipboardCheck,
  AlertTriangle,
  Calendar,
  ChevronRight,
  Bell,
  Search,
  User,
  TrendingUp,
  Clock,
  CheckCircle2,
  Circle,
  XCircle,
  Menu,
  X,
  LogOut,
  MapPin,
  Upload,
  Layers,
  FileUp,
  FilePlus2,
  FolderOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import BFOBanner from "@/components/BFOBanner";
import BFOFooter from "@/components/BFOFooter";

const MAPLEWOOD_LOGO = null; // Using inline SVG seal
  ;
const MAP_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ErhD5cGXGmCbe2jBuvHgzd/holladay-map_6c7e170b.jpg";

/* ── Static demo data ── */
const stats = [
  {
    label: "Pending Applications",
    value: 12,
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
    trend: "+3 this week",
    trendUp: true,
  },
  {
    label: "Inspections Today",
    value: 5,
    icon: ClipboardCheck,
    color: "text-amber-600",
    bg: "bg-amber-50",
    trend: "2 completed",
    trendUp: null,
  },
  {
    label: "Code Enforcement Cases",
    value: 8,
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-50",
    trend: "-1 from last week",
    trendUp: false,
  },
  {
    label: "Business Licenses Pending",
    value: 3,
    icon: Building2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    trend: "All new this month",
    trendUp: null,
  },
];

const permitRequests = [
  { id: "PRM-2026-0892", applicant: "Sarah Mitchell", type: "Residential Addition", submitted: "Mar 10", status: "pending", priority: "normal" },
  { id: "PRM-2026-0891", applicant: "Maplewood Builders LLC", type: "Commercial Renovation", submitted: "Mar 9", status: "review", priority: "high" },
  { id: "PRM-2026-0890", applicant: "James & Carol Tanner", type: "Deck Construction", submitted: "Mar 8", status: "approved", priority: "normal" },
  { id: "PRM-2026-0889", applicant: "Mountain View Homes", type: "New Construction", submitted: "Mar 7", status: "review", priority: "high" },
  { id: "PRM-2026-0888", applicant: "Robert Chen", type: "Solar Panel Install", submitted: "Mar 6", status: "approved", priority: "normal" },
];

const inspections = [
  { time: "8:00 AM", address: "4521 Maplewood Blvd", type: "Framing", inspector: "D. Larsen", done: true },
  { time: "9:30 AM", address: "2834 E Murray-Maplewood Rd", type: "Electrical", inspector: "M. Park", done: true },
  { time: "11:00 AM", address: "1205 E Vine St", type: "Foundation", inspector: "D. Larsen", done: false },
  { time: "1:30 PM", address: "3901 S Highland Dr", type: "Final", inspector: "T. Nguyen", done: false },
  { time: "3:00 PM", address: "5544 S 2300 E", type: "Plumbing", inspector: "M. Park", done: false },
];

const businessLicenses = [
  { name: "Maplewood Dental Group", type: "Medical Office", applied: "Mar 5", status: "pending" },
  { name: "The Spice Kitchen", type: "Restaurant", applied: "Mar 3", status: "review" },
  { name: "Peaks Fitness Studio", type: "Fitness Center", applied: "Feb 28", status: "approved" },
];

const codeEnforcement = [
  { id: "CE-2026-0044", address: "2210 E Vine St", issue: "Unpermitted Structure", opened: "Mar 1", status: "open" },
  { id: "CE-2026-0043", address: "4890 S 2300 E", issue: "Overgrown Vegetation", opened: "Feb 25", status: "pending" },
  { id: "CE-2026-0042", address: "1560 Maplewood Rd", issue: "Illegal Parking", opened: "Feb 20", status: "closed" },
];

const recentDocs = [
  { name: "Mitchell_SitePlan_v2.pdf", type: "Site Plan", permit: "PRM-2026-0892", uploaded: "Mar 10", size: "4.2 MB" },
  { name: "MaplewoodBuilders_Structural.pdf", type: "Structural Drawings", permit: "PRM-2026-0891", uploaded: "Mar 9", size: "12.8 MB" },
  { name: "Tanner_Deck_Plans.dwg", type: "CAD File", permit: "PRM-2026-0890", uploaded: "Mar 8", size: "2.1 MB" },
  { name: "MtnView_Elevations.bbm", type: "Bluebeam File", permit: "PRM-2026-0889", uploaded: "Mar 7", size: "8.5 MB" },
];

const statusBadge: Record<string, string> = {
  pending: "badge-pending",
  review: "badge-review",
  approved: "badge-approved",
  open: "badge-review",
  closed: "badge-approved",
};

const statusLabel: Record<string, string> = {
  pending: "Pending",
  review: "In Review",
  approved: "Approved",
  open: "Open",
  closed: "Closed",
};

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Permit Requests", active: false },
  { icon: ClipboardCheck, label: "Inspections", active: false },
  { icon: Building2, label: "Business Licenses", active: false },
  { icon: AlertTriangle, label: "Code Enforcement", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Layers, label: "GIS / Parcel Map", active: false },
  { icon: FolderOpen, label: "Document Manager", active: false },
];

const fileTypeColor: Record<string, string> = {
  "Site Plan": "text-blue-600 bg-blue-50 border-blue-200",
  "Structural Drawings": "text-purple-600 bg-purple-50 border-purple-200",
  "CAD File": "text-amber-600 bg-amber-50 border-amber-200",
  "Bluebeam File": "text-emerald-600 bg-emerald-50 border-emerald-200",
};

export default function StaffDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  function handleNav(label: string) {
    if (label !== "Dashboard") {
      toast.info(`${label}`, { description: "Full module available in the complete platform." });
    }
  }

  function handleUpload() {
    toast.success("Document uploaded", {
      description: "Plans submitted for review. Bluebeam session created.",
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BFOBanner />
      <div className="flex flex-1">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#1E3A5F] text-white flex flex-col z-50 transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:z-auto`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
            <span className="text-[#1E3A5F] font-bold text-sm leading-none">M</span>
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">City of Maplewood</div>
            <div className="text-amber-400 text-[11px] font-medium">Community Development</div>
          </div>
          <button className="ml-auto md:hidden text-white/60" onClick={() => setSidebarOpen(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-3 mb-2">
            <p className="text-white/40 text-xs uppercase tracking-widest px-2 mb-1">Main Menu</p>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.label)}
                className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition-all
                  ${item.active
                    ? "bg-white/10 text-white border-l-2 border-amber-400"
                    : "text-white/65 hover:bg-white/8 hover:text-white border-l-2 border-transparent"
                  }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.label}
                {item.label === "Permit Requests" && (
                  <span className="ml-auto bg-amber-400 text-[#1E3A5F] text-xs font-bold px-1.5 py-0.5 rounded-full">12</span>
                )}
                {item.label === "Code Enforcement" && (
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">8</span>
                )}
              </button>
            );
          })}

          <div className="px-3 mt-6 mb-2">
            <p className="text-white/40 text-xs uppercase tracking-widest px-2 mb-1">Demo</p>
          </div>
          <Link href="/">
            <button className="w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-white/65 hover:bg-white/8 hover:text-white transition-all border-l-2 border-transparent">
              <User className="w-4 h-4 shrink-0" />
              Citizen Portal
            </button>
          </Link>
          <Link href="/workflow">
            <button className="w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium text-white/65 hover:bg-white/8 hover:text-white transition-all border-l-2 border-transparent">
              <TrendingUp className="w-4 h-4 shrink-0" />
              Permit Workflow
            </button>
          </Link>
        </nav>

        {/* User section */}
        <div className="border-t border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">JW</div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">Jennifer Walsh</div>
              <div className="text-xs text-white/50">Permit Administrator</div>
            </div>
            <button onClick={() => toast.info("Logged out")} className="text-white/40 hover:text-white transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-border px-6 py-3 flex items-center gap-4 sticky top-0 z-30">
          <button className="md:hidden text-muted-foreground" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search applications, cases..."
                className="pl-9 h-8 text-sm bg-muted/40 border-transparent focus:border-border"
              />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => toast.info("3 new notifications")}
              className="relative text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="text-sm text-muted-foreground hidden sm:block">Friday, March 13, 2026</div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Dashboard
            </h1>
            <p className="text-muted-foreground text-sm mt-0.5">Good morning, Jennifer. Here's what's happening today.</p>
          </div>

          {/* ── Stat Widgets ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className={`civic-card p-5 fade-up fade-up-${i + 1}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <TrendingUp className={`w-4 h-4 ${stat.trendUp === true ? "text-emerald-500" : stat.trendUp === false ? "text-red-400 rotate-180" : "text-muted-foreground"}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-0.5">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.trend}</div>
                </div>
              );
            })}
          </div>

          {/* ── Three-column row: Permits + GIS + Inspections ── */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            {/* Permit Requests */}
            <div className="xl:col-span-2 civic-card fade-up fade-up-5">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="font-semibold text-foreground text-sm">Permit Requests</h2>
                <button
                  onClick={() => toast.info("View all permits")}
                  className="text-xs text-[#1E3A5F] hover:text-amber-600 font-medium flex items-center gap-0.5 transition-colors"
                >
                  View All <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-5 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">ID</th>
                      <th className="text-left px-3 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Applicant</th>
                      <th className="text-left px-3 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Type</th>
                      <th className="text-left px-3 py-2.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-3 py-2.5" />
                    </tr>
                  </thead>
                  <tbody>
                    {permitRequests.map((p) => (
                      <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                        <td className="px-5 py-3 font-mono text-xs text-[#1E3A5F] font-semibold">{p.id}</td>
                        <td className="px-3 py-3 text-foreground text-xs">{p.applicant}</td>
                        <td className="px-3 py-3 text-muted-foreground text-xs hidden md:table-cell">{p.type}</td>
                        <td className="px-3 py-3">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge[p.status]}`}>
                            {statusLabel[p.status]}
                          </span>
                        </td>
                        <td className="px-3 py-3">
                          <button onClick={() => toast.info(`Opening ${p.id}`)} className="text-[#1E3A5F] hover:text-amber-600 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* GIS Map Preview */}
            <div className="civic-card fade-up fade-up-6 flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1E3A5F]" />
                  <h2 className="font-semibold text-foreground text-sm">GIS Map Preview</h2>
                </div>
                <Badge variant="outline" className="text-xs text-blue-700 border-blue-300 bg-blue-50">
                  ESRI
                </Badge>
              </div>
              {/* Map image */}
              <div className="relative overflow-hidden" style={{ height: 160 }}>
                <img
                  src={MAP_IMG}
                  alt="Maplewood parcel map"
                  className="w-full h-full object-cover"
                />
                {/* Map overlay pin */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span className="text-xs font-semibold text-foreground">4521 Maplewood Blvd</span>
                </div>
                <div className="absolute top-2 right-2 bg-[#1E3A5F]/80 text-white text-[10px] font-semibold px-2 py-1 rounded">
                  ArcGIS Online
                </div>
              </div>
              {/* Parcel info */}
              <div className="p-4 space-y-2 flex-1">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground mb-0.5">Parcel ID</div>
                    <div className="font-mono font-semibold text-foreground">22-12-456-789</div>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground mb-0.5">Zone</div>
                    <div className="font-semibold text-foreground">R-1-8 Res.</div>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground mb-0.5">Lot Size</div>
                    <div className="font-semibold text-foreground">0.28 acres</div>
                  </div>
                  <div className="bg-muted/40 rounded-lg p-2.5">
                    <div className="text-muted-foreground mb-0.5">Owner</div>
                    <div className="font-semibold text-foreground truncate">S. Mitchell</div>
                  </div>
                </div>
                <button
                  onClick={() => toast.info("Opening full GIS viewer", { description: "ESRI ArcGIS integration available in the full platform." })}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1E3A5F] hover:text-amber-600 transition-colors py-1.5 border border-dashed border-border rounded-lg hover:border-amber-400 mt-1"
                >
                  <Layers className="w-3.5 h-3.5" />
                  Open Full GIS Viewer
                </button>
              </div>
            </div>
          </div>

          {/* ── Document Upload + Inspections row ── */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            {/* Document Upload */}
            <div className="xl:col-span-2 civic-card fade-up fade-up-7">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-[#1E3A5F]" />
                  <h2 className="font-semibold text-foreground text-sm">Document Management</h2>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs text-emerald-700 border-emerald-300 bg-emerald-50">Bluebeam</Badge>
                  <Badge variant="outline" className="text-xs text-blue-700 border-blue-300 bg-blue-50">PDF / CAD</Badge>
                </div>
              </div>
              {/* Drop zone */}
              <div className="px-5 pt-4 pb-3">
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleUpload(); }}
                  onClick={handleUpload}
                  className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-150
                    ${dragOver ? "border-amber-400 bg-amber-50" : "border-border hover:border-[#1E3A5F] hover:bg-muted/30"}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#1E3A5F]/8 flex items-center justify-center">
                      <FileUp className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Upload Plans & Documents</p>
                      <p className="text-xs text-muted-foreground mt-0.5">PDF · CAD · DWG · Bluebeam (.bbm) — drag & drop or click</p>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <Button size="sm" className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white text-xs h-7">
                        <FilePlus2 className="w-3.5 h-3.5 mr-1" />
                        Upload Plans
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7 text-[#1E3A5F] border-[#1E3A5F]/30">
                        Open Bluebeam Session
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Recent documents */}
              <div className="px-5 pb-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recently Uploaded</p>
                <div className="space-y-2">
                  {recentDocs.map((doc) => (
                    <div key={doc.name} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/30 transition-colors group">
                      <div className={`px-2 py-0.5 rounded text-[10px] font-bold border ${fileTypeColor[doc.type] || "text-gray-600 bg-gray-50 border-gray-200"}`}>
                        {doc.name.split(".").pop()?.toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-foreground truncate">{doc.name}</div>
                        <div className="text-[10px] text-muted-foreground">
                          {doc.permit} · {doc.uploaded} · {doc.size}
                        </div>
                      </div>
                      <button
                        onClick={() => toast.info(`Opening ${doc.name}`)}
                        className="text-muted-foreground hover:text-[#1E3A5F] opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inspections Today */}
            <div className="civic-card fade-up fade-up-8">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="font-semibold text-foreground text-sm">Inspections Today</h2>
                <Badge variant="outline" className="text-xs text-amber-700 border-amber-300 bg-amber-50">5 scheduled</Badge>
              </div>
              <div className="p-4 space-y-3">
                {inspections.map((ins) => (
                  <div key={ins.time} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      {ins.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Circle className="w-4 h-4 text-muted-foreground" />
                      )}
                      <div className="text-[10px] text-muted-foreground font-mono">{ins.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-foreground truncate">{ins.address}</div>
                      <div className="text-xs text-muted-foreground">{ins.type} · {ins.inspector}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-4">
                <div className="text-xs text-muted-foreground mb-1.5 flex justify-between">
                  <span>Progress</span>
                  <span>2 / 5 complete</span>
                </div>
                <Progress value={40} className="h-1.5" />
              </div>
            </div>
          </div>

          {/* ── Bottom row: Business Licenses + Code Enforcement ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="civic-card">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="font-semibold text-foreground text-sm">Business Licenses</h2>
                <Badge variant="outline" className="text-xs text-emerald-700 border-emerald-300 bg-emerald-50">3 pending</Badge>
              </div>
              <div className="divide-y divide-border">
                {businessLicenses.map((biz) => (
                  <div key={biz.name} className="flex items-center justify-between px-5 py-3 hover:bg-muted/20 transition-colors">
                    <div>
                      <div className="text-sm font-medium text-foreground">{biz.name}</div>
                      <div className="text-xs text-muted-foreground">{biz.type} · Applied {biz.applied}</div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge[biz.status]}`}>
                      {statusLabel[biz.status]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="civic-card">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="font-semibold text-foreground text-sm">Code Enforcement Cases</h2>
                <Badge variant="outline" className="text-xs text-red-700 border-red-300 bg-red-50">8 active</Badge>
              </div>
              <div className="divide-y divide-border">
                {codeEnforcement.map((ce) => (
                  <div key={ce.id} className="flex items-center justify-between px-5 py-3 hover:bg-muted/20 transition-colors">
                    <div className="flex items-start gap-3">
                      {ce.status === "closed" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      )}
                      <div>
                        <div className="text-xs font-mono text-[#1E3A5F] font-semibold">{ce.id}</div>
                        <div className="text-sm font-medium text-foreground">{ce.address}</div>
                        <div className="text-xs text-muted-foreground">{ce.issue} · Opened {ce.opened}</div>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge[ce.status]}`}>
                      {statusLabel[ce.status]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      </div>
      <BFOFooter />
    </div>
  );
}
