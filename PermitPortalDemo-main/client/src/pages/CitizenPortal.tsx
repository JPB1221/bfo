/**
 * PAGE: Citizen Portal
 * DESIGN: Warm Civic Modernism — slate navy + amber gold, IBM Plex Sans
 * Updates: Maplewood city seal, "Community Development Portal" subtitle,
 *          Login role selector modal (Resident / Contractor / Staff)
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  FileText,
  ClipboardCheck,
  Building2,
  MessageSquare,
  Search,
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle,
  Menu,
  X,
  LogIn,
  User,
  HardHat,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import BFOBanner from "@/components/BFOBanner";
import BFOFooter from "@/components/BFOFooter";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663421545679/ErhD5cGXGmCbe2jBuvHgzd/holladay-hero-AkjtFq7vsm2gyRySgJ3AGw.webp";
const MAPLEWOOD_LOGO = null; // Using inline SVG seal
  ;

const services = [
  {
    icon: FileText,
    title: "Submit Permit Application",
    description:
      "Apply for building, electrical, plumbing, or mechanical permits online.",
    tag: "Building",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: ClipboardCheck,
    title: "Request Inspection",
    description:
      "Schedule a property or construction inspection with city inspectors.",
    tag: "Inspections",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Building2,
    title: "Apply for Business License",
    description:
      "Register a new business or renew an existing license in Maplewood.",
    tag: "Business",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: MessageSquare,
    title: "Submit Citizen Request",
    description:
      "Report a concern, request a service, or contact city departments.",
    tag: "General",
    color: "text-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

const recentApplications = [
  {
    id: "PRM-2024-0892",
    type: "Building Permit",
    submitted: "Mar 8, 2026",
    status: "Under Review",
    statusType: "review",
  },
  {
    id: "BIZ-2024-0341",
    type: "Business License",
    submitted: "Mar 1, 2026",
    status: "Approved",
    statusType: "approved",
  },
  {
    id: "INS-2024-1204",
    type: "Inspection Request",
    submitted: "Feb 22, 2026",
    status: "Scheduled",
    statusType: "pending",
  },
];

const statusConfig: Record<
  string,
  { icon: typeof CheckCircle2; label: string; className: string }
> = {
  approved: {
    icon: CheckCircle2,
    label: "Approved",
    className: "badge-approved",
  },
  review: {
    icon: AlertCircle,
    label: "Under Review",
    className: "badge-review",
  },
  pending: { icon: Circle, label: "Scheduled", className: "badge-pending" },
};

const loginRoles = [
  {
    icon: User,
    title: "Resident Login",
    description: "Access your permit applications, inspection requests, and city service history.",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
  },
  {
    icon: HardHat,
    title: "Contractor Login",
    description: "Manage active permits, upload plans, schedule inspections, and track project status.",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    hoverBorder: "hover:border-amber-400",
  },
  {
    icon: Shield,
    title: "Staff Login",
    description: "Access the staff dashboard, review applications, and manage city workflows.",
    color: "text-[#1E3A5F]",
    bg: "bg-slate-50",
    border: "border-slate-200",
    hoverBorder: "hover:border-slate-400",
    staffLink: true,
  },
];

export default function CitizenPortal() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [trackId, setTrackId] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  function handleServiceClick(title: string) {
    toast.success(`${title}`, {
      description: "This feature is part of the full platform.",
    });
  }

  function handleTrack(e: React.FormEvent) {
    e.preventDefault();
    if (!trackId.trim()) return;
    toast.info(`Tracking application ${trackId}`, {
      description: "Application found — see status below.",
    });
  }

  function handleLoginRole(title: string) {
    setLoginOpen(false);
    toast.success(`${title}`, {
      description: "Authentication module available in the full platform.",
    });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BFOBanner />
      {/* ── Top Navigation ── */}
      <header className="bg-[#1E3A5F] text-white shadow-lg sticky top-0 z-50">
        {/* Utility bar */}
        <div className="border-b border-white/10 text-xs">
          <div className="container flex items-center justify-between py-1.5">
            <div className="flex items-center gap-4 text-white/70">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> 123 City Hall Drive, Maplewood, ST 00000
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <Phone className="w-3 h-3" /> (555) 000-0000
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <Clock className="w-3 h-3" /> Mon–Fri 8am–5pm
              </span>
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              <LogIn className="w-3 h-3" />
              Sign In
            </button>
          </div>
        </div>
        {/* Main nav */}
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
              <span className="text-[#1E3A5F] font-bold text-sm leading-none">M</span>
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                City of Maplewood
              </div>
              <div className="text-amber-400 text-xs font-medium">Community Development Portal</div>
            </div>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="text-white/80 hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#status" className="text-white/80 hover:text-amber-400 transition-colors">
              Track Application
            </a>
            <button
              onClick={() => setLoginOpen(true)}
              className="flex items-center gap-1.5 text-white/80 hover:text-amber-400 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
            <Link href="/dashboard">
              <Button
                size="sm"
                className="bg-amber-400 hover:bg-amber-300 text-[#1E3A5F] font-semibold border-0"
              >
                Staff Dashboard
              </Button>
            </Link>
            <Link href="/workflow">
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                View Workflow
              </Button>
            </Link>
          </nav>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#1E3A5F] px-4 pb-4 flex flex-col gap-3 text-sm">
            <a href="#services" className="text-white/80 py-2" onClick={() => setMobileOpen(false)}>
              Services
            </a>
            <a href="#status" className="text-white/80 py-2" onClick={() => setMobileOpen(false)}>
              Track Application
            </a>
            <button
              onClick={() => { setMobileOpen(false); setLoginOpen(true); }}
              className="text-amber-400 py-2 text-left flex items-center gap-1.5"
            >
              <LogIn className="w-4 h-4" /> Sign In
            </button>
            <Link href="/dashboard" onClick={() => setMobileOpen(false)}>
              <span className="text-amber-400 py-2 block">Staff Dashboard →</span>
            </Link>
            <Link href="/workflow" onClick={() => setMobileOpen(false)}>
              <span className="text-white/70 py-2 block">View Workflow →</span>
            </Link>
          </div>
        )}
      </header>

      {/* ── Login Role Modal ── */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-lg bg-amber-400 flex items-center justify-center shrink-0">
                    <span className="text-[#1E3A5F] font-bold text-sm leading-none">M</span>
                  </div>
              <div>
                <DialogTitle className="text-base font-bold text-foreground">Sign In to Maplewood Portal</DialogTitle>
                <p className="text-xs text-muted-foreground">Select your account type to continue</p>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {loginRoles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.title}
                  onClick={() => role.staffLink
                    ? (setLoginOpen(false))
                    : handleLoginRole(role.title)
                  }
                  className={`w-full text-left flex items-start gap-4 p-4 rounded-lg border-2 ${role.border} ${role.hoverBorder} ${role.bg} transition-all duration-150 group`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-white border ${role.border} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-5 h-5 ${role.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${role.color} mb-0.5`}>{role.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{role.description}</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 shrink-0 ${role.color} opacity-60`} />
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Authentication module available in the full platform.
          </p>
        </DialogContent>
      </Dialog>

      {/* ── Hero Section ── */}
      <section
        className="relative min-h-[420px] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 via-[#1E3A5F]/70 to-[#1E3A5F]/30" />
        <div className="relative container py-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Community Development Portal
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              City of Maplewood
              <br />
              <span className="text-amber-400">Service Portal</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Submit permits, request inspections, apply for business licenses,
              and track your applications — all in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#services">
                <Button className="bg-amber-400 hover:bg-amber-300 text-[#1E3A5F] font-semibold px-6">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 bg-transparent px-6"
                onClick={() => setLoginOpen(true)}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Login Role Cards (below hero) ── */}
      <section className="bg-white border-b border-border py-6">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {loginRoles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.title}
                  onClick={() => role.staffLink ? undefined : setLoginOpen(true)}
                  className={`flex items-center gap-3 p-4 rounded-lg border ${role.border} ${role.bg} ${role.hoverBorder} hover:shadow-sm transition-all text-left group`}
                >
                  <div className={`w-9 h-9 rounded-lg bg-white border ${role.border} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${role.color}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${role.color}`}>{role.title}</div>
                    <div className="text-xs text-muted-foreground">Click to sign in</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ml-auto ${role.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="py-14 container">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
            City Services
          </h2>
          <div className="h-1 w-12 bg-amber-400 rounded-full" />
          <p className="text-muted-foreground mt-3 text-sm">
            Select a service below to begin your application or request.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <button
                key={svc.title}
                onClick={() => handleServiceClick(svc.title)}
                className="civic-card text-left p-6 group w-full"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${svc.bg} ${svc.border} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`w-6 h-6 ${svc.color}`} />
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs mb-3 ${svc.color} border-current bg-transparent`}
                >
                  {svc.tag}
                </Badge>
                <h3 className="font-semibold text-foreground text-sm mb-2 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {svc.description}
                </p>
                <div className={`flex items-center gap-1 mt-4 text-xs font-semibold ${svc.color}`}>
                  Start Application
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Track Application Status ── */}
      <section id="status" className="py-14 bg-white border-t border-border">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Track Application Status
            </h2>
            <div className="h-1 w-12 bg-amber-400 rounded-full" />
          </div>
          <form onSubmit={handleTrack} className="flex gap-2 max-w-lg mb-10">
            <Input
              placeholder="Enter application ID (e.g. PRM-2024-0892)"
              value={trackId}
              onChange={(e) => setTrackId(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white">
              <Search className="w-4 h-4 mr-2" />
              Track
            </Button>
          </form>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Recent Applications
            </h3>
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Application ID</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Submitted</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((app, i) => {
                    const cfg = statusConfig[app.statusType];
                    const StatusIcon = cfg.icon;
                    return (
                      <tr
                        key={app.id}
                        className={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-muted/10"}`}
                      >
                        <td className="px-4 py-3 font-mono text-xs text-[#1E3A5F] font-semibold">{app.id}</td>
                        <td className="px-4 py-3 text-foreground">{app.type}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{app.submitted}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.className}`}>
                            <StatusIcon className="w-3 h-3" />
                            {cfg.label}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => toast.info(`Viewing details for ${app.id}`)}
                            className="text-[#1E3A5F] hover:text-amber-600 text-xs font-medium flex items-center gap-0.5 transition-colors"
                          >
                            Details <ChevronRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo Navigation Banner ── */}
      <section className="bg-[#1E3A5F] py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm">Explore the Demo</p>
            <p className="text-white/60 text-xs">Three screens showing the full platform concept</p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard">
              <Button className="bg-amber-400 hover:bg-amber-300 text-[#1E3A5F] font-semibold text-sm">
                Staff Dashboard →
              </Button>
            </Link>
            <Link href="/workflow">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent text-sm">
                Permit Workflow →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#162d4a] text-white/60 py-6 text-xs">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 City of Maplewood. All rights reserved.</span>
          <span>123 City Hall Drive, Maplewood, ST 00000 · (555) 000-0000</span>
        </div>
      </footer>
      <BFOFooter />
    </div>
  );
}
