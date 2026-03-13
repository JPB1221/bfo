import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CitizenPortal from "./pages/CitizenPortal";
import StaffDashboard from "./pages/StaffDashboard";
import PermitWorkflow from "./pages/PermitWorkflow";
import NotFound from "./pages/NotFound";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={CitizenPortal} />
      <Route path="/dashboard" component={StaffDashboard} />
      <Route path="/workflow" component={PermitWorkflow} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base="/demo/permit-portal">
            <AppRouter />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
