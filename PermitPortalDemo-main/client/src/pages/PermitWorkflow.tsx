/**
 * PAGE: Permit Workflow
 * DESIGN: Warm Civic Modernism — vertical timeline with step animations
 * Layout: centered max-width content, alternating detail panels per step
 * Animation: sequential step reveal on scroll + connecting line draw-down
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  CheckCircle2,
  Circle,
  Clock,
  FileText,
  Search,
  Calendar,
  Stamp,
  Award,
  ChevronRight,
  ArrowLeft,
  Info,
  User,
  Building2,
  AlertCircle,
  Upload,
  FileUp,
  FilePlus2,
  Paperclip,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import BFOBanner from "@/components/BFOBanner";
import BFOFooter from "@/components/BFOFooter";

/* ── Workflow steps ── */
const steps = [
  {
    id: 1,
    icon: FileText,
    title: "Application Submitted",
    subtitle: "Citizen submits permit request online",
    date: "March 8, 2026",
    time: "9:14 AM",
    status: "complete",
    actor: "Applicant",
    actorIcon: User,
    details: [
      "Applicant completes online form with project details",
      "Required documents uploaded (site plan, drawings)",
      "Application fee processed: $285.00",
      "Confirmation email sent to applicant",
    ],
    note: "Application ID: PRM-2026-0892 assigned automatically",
    color: "emerald",
  },
  {
    id: 2,
    icon: Search,
    title: "Staff Review",
    subtitle: "Permit administrator reviews application",
    date: "March 10, 2026",
    time: "2:30 PM",
    status: "complete",
    actor: "Jennifer Walsh",
    actorIcon: User,
    details: [
      "Zoning compliance verified against city ordinances",
      "Structural drawings reviewed by building official",
      "Completeness check passed — all documents present",
      "Application forwarded to inspection scheduling",
    ],
    note: "Review completed in 2 business days",
    color: "blue",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Inspection Scheduled",
    subtitle: "Site inspection booked with city inspector",
    date: "March 12, 2026",
    time: "11:00 AM",
    status: "active",
    actor: "D. Larsen, Inspector",
    actorIcon: Building2,
    details: [
      "Inspection scheduled for March 15 at 10:00 AM",
      "Inspector assigned: David Larsen",
      "Applicant notified via email and SMS",
      "Pre-inspection checklist sent to applicant",
    ],
    note: "Applicant must be present during inspection",
    color: "amber",
  },
  {
    id: 4,
    icon: Stamp,
    title: "Approval",
    subtitle: "Building official reviews inspection results",
    date: "Est. March 17, 2026",
    time: "Pending",
    status: "upcoming",
    actor: "Building Official",
    actorIcon: User,
    details: [
      "Inspection report reviewed by building official",
      "Any deficiencies noted and communicated to applicant",
      "Final compliance determination made",
      "Approval decision recorded in system",
    ],
    note: "Applicant may be required to address deficiencies",
    color: "purple",
  },
  {
    id: 5,
    icon: Award,
    title: "Permit Issued",
    subtitle: "Official permit document generated and delivered",
    date: "Est. March 18, 2026",
    time: "Pending",
    status: "upcoming",
    actor: "City of Maplewood",
    actorIcon: Building2,
    details: [
      "Digital permit certificate generated",
      "Physical permit placard mailed to applicant",
      "Permit posted to applicant's online account",
      "Work may commence immediately upon receipt",
    ],
    note: "Permit must be posted on-site during construction",
    color: "emerald",
  },
];

const colorMap: Record<string, { ring: string; bg: string; text: string; border: string; light: string }> = {
  emerald: {
    ring: "ring-emerald-400",
    bg: "bg-emerald-500",
    text: "text-emerald-700",
    border: "border-emerald-200",
    light: "bg-emerald-50",
  },
  blue: {
    ring: "ring-blue-400",
    bg: "bg-blue-500",
    text: "text-blue-700",
    border: "border-blue-200",
    light: "bg-blue-50",
  },
  amber: {
    ring: "ring-amber-400",
    bg: "bg-amber-500",
    text: "text-amber-700",
    border: "border-amber-200",
    light: "bg-amber-50",
  },
  purple: {
    ring: "ring-purple-400",
    bg: "bg-purple-500",
    text: "text-purple-700",
    border: "border-purple-200",
    light: "bg-purple-50",
  },
};

function StepIcon({
  status,
  color,
  Icon,
}: {
  status: string;
  color: string;
  Icon: typeof CheckCircle2;
}) {
  const c = colorMap[color];
  if (status === "complete") {
    return (
      <div className={`w-12 h-12 rounded-full ${c.bg} flex items-center justify-center ring-4 ring-white shadow-md`}>
        <CheckCircle2 className="w-6 h-6 text-white" />
      </div>
    );
  }
  if (status === "active") {
    return (
      <div className={`w-12 h-12 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center ring-4 ring-amber-100 shadow-md`}>
        <Icon className="w-6 h-6 text-amber-500" />
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center ring-4 ring-white shadow-sm">
      <Circle className="w-6 h-6 text-muted-foreground/40" />
    </div>
  );
}

const MAPLEWOOD_LOGO = null; // Using inline SVG seal
  ;

const permitDocs = [
  { name: "Mitchell_SitePlan_v2.pdf", type: "PDF", size: "4.2 MB", uploaded: "Mar 8", status: "Reviewed" },
  { name: "Structural_Drawings.pdf", type: "PDF", size: "8.1 MB", uploaded: "Mar 8", status: "Pending Review" },
  { name: "Elevation_Plans.bbm", type: "BBM", size: "3.4 MB", uploaded: "Mar 9", status: "In Bluebeam" },
];

export default function PermitWorkflow() {
  const [expandedStep, setExpandedStep] = useState<number | null>(3);
  const [docDragOver, setDocDragOver] = useState(false);

  const currentStep = steps.find((s) => s.status === "active");
  const completedCount = steps.filter((s) => s.status === "complete").length;
  const progress = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BFOBanner />
      {/* ── Top Navigation ── */}
      <header className="bg-[#1E3A5F] text-white shadow-lg sticky top-0 z-50">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
              <span className="text-[#1E3A5F] font-bold text-sm leading-none">M</span>
            </div>
            <div>
              <div className="font-bold text-sm leading-tight">City of Maplewood</div>
              <div className="text-amber-400 text-xs font-medium">Community Development Portal</div>
            </div>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent text-xs"
              >
                <ArrowLeft className="w-3 h-3 mr-1" />
                Citizen Portal
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="sm"
                className="bg-amber-400 hover:bg-amber-300 text-[#1E3A5F] font-semibold text-xs"
              >
                Staff Dashboard
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Page Header ── */}
      <div className="bg-white border-b border-border">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-amber-100 text-amber-800 border border-amber-200 text-xs font-semibold">
                  In Progress
                </Badge>
                <span className="text-muted-foreground text-xs font-mono">PRM-2026-0892</span>
              </div>
              <h1
                className="text-3xl font-bold text-foreground mb-1"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                Permit Workflow
              </h1>
              <p className="text-muted-foreground text-sm">
                Residential Addition — 4521 Maplewood Blvd · Applicant: Sarah Mitchell
              </p>
            </div>
            {/* Progress summary */}
            <div className="bg-muted/40 rounded-xl px-6 py-4 min-w-[220px]">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Overall Progress</span>
                <span className="font-semibold text-foreground">{completedCount} of {steps.length} steps</span>
              </div>
              <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#1E3A5F] to-amber-400 rounded-full transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Current:{" "}
                <span className="text-amber-600 font-semibold">
                  {currentStep?.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Info banner */}
          <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6 text-sm text-blue-800">
            <Info className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />
            <span>
              This workflow demonstrates automated permit processing. Click any step to see details.
              The system automatically advances each stage and notifies all parties.
            </span>
          </div>

          {/* ── Document Upload Panel ── */}
          <div className="civic-card mb-10">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#1E3A5F]" />
                <h2 className="font-semibold text-foreground text-sm">Plan Review &amp; Documents</h2>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs text-emerald-700 border-emerald-300 bg-emerald-50">Bluebeam</Badge>
                <Badge variant="outline" className="text-xs text-blue-700 border-blue-300 bg-blue-50">PDF / CAD</Badge>
              </div>
            </div>
            <div className="p-5">
              <div
                onDragOver={(e) => { e.preventDefault(); setDocDragOver(true); }}
                onDragLeave={() => setDocDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDocDragOver(false); toast.success("Plans uploaded", { description: "Bluebeam review session created for PRM-2026-0892." }); }}
                onClick={() => toast.success("Plans uploaded", { description: "Bluebeam review session created for PRM-2026-0892." })}
                className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-150 mb-4
                  ${docDragOver ? "border-amber-400 bg-amber-50" : "border-border hover:border-[#1E3A5F] hover:bg-muted/30"}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A5F]/8 flex items-center justify-center">
                    <FileUp className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Upload Plans &amp; Documents</p>
                    <p className="text-xs text-muted-foreground mt-0.5">PDF · CAD · DWG · Bluebeam (.bbm) — drag &amp; drop or click</p>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Button size="sm" className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white text-xs h-7">
                      <FilePlus2 className="w-3.5 h-3.5 mr-1" />
                      Upload Plans
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs h-7 text-[#1E3A5F] border-[#1E3A5F]/30"
                      onClick={(e) => { e.stopPropagation(); toast.info("Opening Bluebeam Studio Session", { description: "Bluebeam integration available in the full platform." }); }}
                    >
                      Open Bluebeam Session
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Permit Documents — PRM-2026-0892</p>
              <div className="space-y-2">
                {permitDocs.map((doc) => (
                  <div key={doc.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group">
                    <div className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      doc.type === "PDF" ? "text-red-600 bg-red-50 border-red-200" :
                      doc.type === "BBM" ? "text-emerald-600 bg-emerald-50 border-emerald-200" :
                      "text-amber-600 bg-amber-50 border-amber-200"
                    }`}>{doc.type}</div>
                    <Paperclip className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-foreground truncate">{doc.name}</div>
                      <div className="text-[10px] text-muted-foreground">{doc.size} · Uploaded {doc.uploaded}</div>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                      doc.status === "Reviewed" ? "badge-approved" :
                      doc.status === "In Bluebeam" ? "badge-review" : "badge-pending"
                    }`}>{doc.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />
            <div
              className="absolute left-6 top-6 w-0.5 bg-gradient-to-b from-emerald-400 to-amber-400 timeline-line"
              style={{ height: `${(completedCount / steps.length) * 100}%` }}
            />

            <div className="space-y-0">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const ActorIcon = step.actorIcon;
                const isExpanded = expandedStep === step.id;
                const c = colorMap[step.color];
                const isLast = idx === steps.length - 1;

                return (
                  <div key={step.id} className={`relative flex gap-6 ${isLast ? "" : "pb-0"}`}>
                    {/* Step icon */}
                    <div className="relative z-10 shrink-0">
                      <StepIcon status={step.status} color={step.color} Icon={Icon} />
                    </div>

                    {/* Step content */}
                    <div className={`flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                      <button
                        onClick={() => {
                          setExpandedStep(isExpanded ? null : step.id);
                        }}
                        className="w-full text-left"
                      >
                        <div
                          className={`rounded-xl border transition-all duration-200 ${
                            step.status === "active"
                              ? "border-amber-300 bg-white shadow-md"
                              : step.status === "complete"
                              ? "border-border bg-white hover:shadow-sm"
                              : "border-border bg-muted/30 hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-start justify-between p-5">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span
                                  className={`text-base font-bold ${
                                    step.status === "upcoming"
                                      ? "text-muted-foreground"
                                      : "text-foreground"
                                  }`}
                                >
                                  {step.title}
                                </span>
                                {step.status === "active" && (
                                  <Badge className="bg-amber-100 text-amber-800 border border-amber-300 text-xs">
                                    Current Step
                                  </Badge>
                                )}
                                {step.status === "complete" && (
                                  <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs">
                                    Complete
                                  </Badge>
                                )}
                                {step.status === "upcoming" && (
                                  <Badge variant="outline" className="text-xs text-muted-foreground">
                                    Upcoming
                                  </Badge>
                                )}
                              </div>
                              <p
                                className={`text-sm ${
                                  step.status === "upcoming"
                                    ? "text-muted-foreground/60"
                                    : "text-muted-foreground"
                                }`}
                              >
                                {step.subtitle}
                              </p>
                            </div>
                            <div className="text-right ml-4 shrink-0">
                              <div
                                className={`text-xs font-semibold ${
                                  step.status === "upcoming"
                                    ? "text-muted-foreground/50"
                                    : "text-foreground"
                                }`}
                              >
                                {step.date}
                              </div>
                              <div className="text-xs text-muted-foreground flex items-center justify-end gap-1 mt-0.5">
                                <Clock className="w-3 h-3" />
                                {step.time}
                              </div>
                            </div>
                          </div>

                          {/* Expanded details */}
                          {isExpanded && (
                            <div className={`border-t ${step.status === "active" ? "border-amber-200" : "border-border"} px-5 py-4`}>
                              {/* Actor */}
                              <div className="flex items-center gap-2 mb-4">
                                <div className={`w-7 h-7 rounded-full ${c.light} ${c.border} border flex items-center justify-center`}>
                                  <ActorIcon className={`w-3.5 h-3.5 ${c.text}`} />
                                </div>
                                <span className="text-xs text-muted-foreground">
                                  Handled by:{" "}
                                  <span className="font-semibold text-foreground">
                                    {step.actor}
                                  </span>
                                </span>
                              </div>
                              {/* Detail list */}
                              <ul className="space-y-2 mb-4">
                                {step.details.map((d) => (
                                  <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                                    <ChevronRight className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${c.text}`} />
                                    {d}
                                  </li>
                                ))}
                              </ul>
                              {/* Note */}
                              <div className={`flex items-start gap-2 ${c.light} ${c.border} border rounded-lg px-3 py-2`}>
                                <AlertCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${c.text}`} />
                                <span className={`text-xs ${c.text}`}>{step.note}</span>
                              </div>
                              {/* Action button for active step */}
                              {step.status === "active" && (
                                <div className="mt-4">
                                  <Button
                                    size="sm"
                                    className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white text-xs"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toast.success("Inspection confirmed", {
                                        description: "Inspector David Larsen notified for March 15.",
                                      });
                                    }}
                                  >
                                    Confirm Inspection
                                    <ChevronRight className="w-3 h-3 ml-1" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Workflow Automation Note ── */}
          <div className="mt-12 bg-[#1E3A5F] rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Workflow Automation</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  The full platform automatically advances each workflow stage, sends notifications to
                  applicants and staff, tracks deadlines, and generates compliance reports — eliminating
                  manual follow-up and reducing permit processing time by up to 60%.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Auto-notifications",
                    "Deadline tracking",
                    "Document management",
                    "Compliance reporting",
                    "E-signatures",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 border border-white/20 text-white/80 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Citizen Portal
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto bg-[#1E3A5F] hover:bg-[#162d4a] text-white">
                Staff Dashboard
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-[#162d4a] text-white/60 py-6 text-xs mt-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 City of Maplewood. All rights reserved.</span>
          <span>123 City Hall Drive, Maplewood, ST 00000 · (555) 000-0000</span>
        </div>
      </footer>
      <BFOFooter />
    </div>
  );
}
