import { Card } from "@/components/ui/card";

export function BlogSidebar() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">Contents Overview</h3>
        <nav className="space-y-2">
          <a href="#scheduling-importance" className="block text-navy/70 hover:text-navy">
            Scheduling Importance
          </a>
          <a href="#booking-tips" className="block text-navy/70 hover:text-navy">
            Booking Tips
          </a>
          <a href="#technology-role" className="block text-navy/70 hover:text-navy">
            Technology Role
          </a>
          <a href="#platform-benefits" className="block text-navy/70 hover:text-navy">
            Platform Benefits
          </a>
          <a href="#client-needs" className="block text-navy/70 hover:text-navy">
            Client Needs
          </a>
        </nav>
      </Card>
    </div>
  );
}