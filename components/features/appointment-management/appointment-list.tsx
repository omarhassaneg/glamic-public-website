"use client";

import { MapPin, Clock } from "lucide-react";

const appointments = [
  {
    client: "Sarah M.",
    service: "Hair Styling",
    time: "10:00 AM",
    type: "studio",
    status: "upcoming"
  },
  {
    client: "Emma R.",
    service: "Makeup",
    time: "2:00 PM",
    type: "mobile",
    location: "Client's Location",
    status: "confirmed"
  },
  {
    client: "Jessica K.",
    service: "Nail Art",
    time: "4:30 PM",
    type: "studio",
    status: "pending"
  }
];

export function AppointmentList() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-navy dark:text-white">
        Today's Appointments
      </h3>
      <div className="space-y-3">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="p-4 bg-white/50 dark:bg-white/5 rounded-lg space-y-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-navy dark:text-white">{appointment.client}</p>
                <p className="text-sm text-navy/60 dark:text-white/60">{appointment.service}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                appointment.status === 'upcoming'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  : appointment.status === 'confirmed'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {appointment.status}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-navy/70 dark:text-white/70">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {appointment.time}
              </div>
              {appointment.type === 'mobile' && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {appointment.location}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}