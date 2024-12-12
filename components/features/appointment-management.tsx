import { Button } from "@/components/ui/button";
import { Calendar, Smartphone } from "lucide-react";

export function AppointmentManagement() {
  return (
    <section className="w-full py-20 bg-background dark:bg-navy">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-gold text-sm font-medium mb-2">Flexibility</div>
            <h2 className="text-3xl font-bold text-navy dark:text-white">
              Effortless Management of Your Appointments
            </h2>
            <p className="text-navy/70 dark:text-white/70">
              Glamic empowers beauty professionals to efficiently manage both mobile and studio bookings. Our platform ensures you never miss an appointment, no matter where you are.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <Smartphone className="h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-semibold text-navy dark:text-white">Mobile Appointments</h3>
                  <p className="text-sm text-navy/70 dark:text-white/70">Easily schedule and manage on-the-go appointments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-gold" />
                <div>
                  <h3 className="font-semibold text-navy dark:text-white">Studio Appointments</h3>
                  <p className="text-sm text-navy/70 dark:text-white/70">Streamline your studio bookings hassle-free</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white">
                Get Started
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] bg-gradient-to-br from-navy/10 to-gold/10 dark:from-white/10 dark:to-gold/10 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
