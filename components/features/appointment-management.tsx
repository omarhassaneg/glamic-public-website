import { Button } from "@/components/ui/button";
import { Calendar, Smartphone } from "lucide-react";

export function AppointmentManagement() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-gold text-sm font-medium mb-2">Flexibility</div>
            <h2 className="text-3xl font-bold text-navy">
              Effortless Management of Your Appointments
            </h2>
            <p className="text-navy/70">
              Glamic empowers beauty professionals to efficiently manage both mobile and studio bookings. Our platform ensures you never miss an appointment, no matter where you are.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <Smartphone className="h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-semibold text-navy">Mobile Appointments</h3>
                  <p className="text-sm text-navy/70">Easily schedule and manage on-the-go appointments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-semibold text-navy">Studio Appointments</h3>
                  <p className="text-sm text-navy/70">Streamline your studio bookings hassle-free</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-navy hover:bg-navy/90 text-white">Learn More</Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
                Sign Up
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}