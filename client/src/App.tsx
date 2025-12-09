import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppSidebar } from "@/components/AppSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

import Dashboard from "@/pages/Dashboard";
import Sales from "@/pages/Sales";
import Parts from "@/pages/Parts";
import Service from "@/pages/Service";
import Inventory from "@/pages/Inventory";
import Finance from "@/pages/Finance";
import Members from "@/pages/Members";
import Users from "@/pages/Users";
import Branches from "@/pages/Branches";
import Settings from "@/pages/Settings";
import MemberLogin from "@/pages/MemberLogin";
import MemberPortal from "@/pages/MemberPortal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/sales" component={Sales} />
      <Route path="/parts" component={Parts} />
      <Route path="/service" component={Service} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/finance" component={Finance} />
      <Route path="/members" component={Members} />
      <Route path="/users" component={Users} />
      <Route path="/branches" component={Branches} />
      <Route path="/settings" component={Settings} />
      <Route path="/member-login" component={MemberLogin} />
      <Route path="/member-portal" component={MemberPortal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 min-w-0">
                <header className="flex items-center justify-between gap-2 px-4 h-14 border-b bg-background sticky top-0 z-50">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <ThemeToggle />
                </header>
                <ScrollArea className="flex-1">
                  <main>
                    <Router />
                  </main>
                </ScrollArea>
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
