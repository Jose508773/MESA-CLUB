import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, ExternalLink, MessageCircle } from "lucide-react";
import { useState } from "react";

/**
 * MESA Club Website - Home Page
 * Design: Bold Academic Modernism
 * Colors: Warrior Red (#C10230) & Warrior Gold (#FFD100)
 * Typography: Poppins (bold headlines), Inter (body)
 */

export default function Home() {
  const [nextMeeting, setNextMeeting] = useState({
    date: "Wednesday, May 15, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Science Building, Room S120",
  });

  const meetings = [
    {
      date: "Wednesday, May 15, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Science Building, Room S120",
      title: "STEM Career Panel Discussion",
    },
    {
      date: "Wednesday, May 22, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Science Building, Room S120",
      title: "Internship Opportunities Workshop",
    },
    {
      date: "Wednesday, May 29, 2026",
      time: "3:00 PM - 5:00 PM",
      location: "Science Building, Room S120",
      title: "Social Mixer & Game Night",
    },
  ];

  const handleEditMeeting = () => {
    const newDate = prompt("Enter new meeting date (e.g., 'Wednesday, May 22, 2026'):");
    const newTime = prompt("Enter new meeting time (e.g., '3:00 PM - 5:00 PM'):");
    const newLocation = prompt("Enter new location (e.g., 'Science Building, Room S120'):");
    
    if (newDate && newTime && newLocation) {
      setNextMeeting({
        date: newDate,
        time: newTime,
        location: newLocation,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            {/* MESA building logo — inline SVG recreation of the dissolving-tower motif.
                Why inline SVG: no network fetch, scales crisp at any size, theme-aware.
                Palette mirrors the official mark: magenta + pink + red + orange + gold. */}
            <svg
              viewBox="0 0 100 100"               // logical coordinate space (square)
              className="w-12 h-12"               // displayed size — tweak here to resize
              xmlns="http://www.w3.org/2000/svg"
              aria-label="MESA building logo"     // a11y: screen reader description
            >
              {/* SINGLE STAIR-STEP SILHOUETTE drawn as one polygon so the building
                  reads as one structure (tall on left, stepping down to the right)
                  instead of two disconnected boxes. */}
              <polygon
                points="20,8 36,8 36,30 68,30 68,86 20,86"   // outline of the building
                fill="#E63946"                                // base red — body color
              />

              {/* YELLOW VERTICAL STRIPE along the upper-left edge — the signature
                  bright accent that runs partway down the tall portion of the tower. */}
              <rect x="20" y="8" width="6" height="40" fill="#FFD100" />

              {/* DARKER RED inner shadow to give the body depth (subtle). */}
              <rect x="36" y="30" width="32" height="56" fill="#D62828" />

              {/* "DISSOLVING" WHITE PIXEL CUTOUTS — small white squares punched into
                  the body to make the building look like it's breaking apart into
                  pixels. White (not gray) so it reads as transparent against the
                  light navbar background. */}
              <rect x="26" y="14" width="4" height="4" fill="#FFFFFF" />
              <rect x="32" y="20" width="4" height="4" fill="#FFFFFF" />
              <rect x="28" y="28" width="4" height="4" fill="#FFFFFF" />
              <rect x="40" y="36" width="4" height="4" fill="#FFFFFF" />
              <rect x="48" y="42" width="4" height="4" fill="#FFFFFF" />
              <rect x="56" y="38" width="4" height="4" fill="#FFFFFF" />
              <rect x="60" y="50" width="4" height="4" fill="#FFFFFF" />
              <rect x="44" y="54" width="4" height="4" fill="#FFFFFF" />
              <rect x="52" y="62" width="4" height="4" fill="#FFFFFF" />
              <rect x="38" y="68" width="4" height="4" fill="#FFFFFF" />
              <rect x="58" y="72" width="4" height="4" fill="#FFFFFF" />
              <rect x="46" y="78" width="4" height="4" fill="#FFFFFF" />

              {/* FALLING PIXEL CASCADE — the signature MESA detail. Pixels cascade
                  off the lower-left corner using the FULL palette: magenta, pink,
                  red, orange, and gold (this was the missing color range before). */}
              {/* Row 1 — close to the building, mostly red/orange */}
              <rect x="14" y="80" width="4" height="4" fill="#E63946" />  {/* red */}
              <rect x="8"  y="84" width="4" height="4" fill="#FF7A1A" />  {/* orange */}
              {/* Row 2 — pink and magenta enter the cascade */}
              <rect x="16" y="88" width="4" height="4" fill="#FF4D8D" />  {/* pink */}
              <rect x="4"  y="86" width="3" height="3" fill="#C71585" />  {/* magenta */}
              <rect x="10" y="90" width="3" height="3" fill="#FFD100" />  {/* gold */}
              {/* Row 3 — far edge of the cascade, smallest scattered pixels */}
              <rect x="0"  y="92" width="3" height="3" fill="#C71585" />  {/* magenta */}
              <rect x="6"  y="94" width="3" height="3" fill="#E63946" />  {/* red */}
              <rect x="14" y="94" width="3" height="3" fill="#FF7A1A" />  {/* orange */}
              <rect x="2"  y="96" width="2" height="2" fill="#FF4D8D" />  {/* pink */}
              <rect x="10" y="97" width="2" height="2" fill="#FFD100" />  {/* gold */}
            </svg>

            {/* Wordmark — kept next to the icon, same warrior red as before */}
            <h1 className="text-xl font-bold text-[#C10230]">MESA Club</h1>
          </div>
          <div className="flex gap-4 items-center">
            <a href="#meetings" className="text-gray-700 hover:text-[#C10230] font-medium transition">
              Meetings
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#C10230] font-medium transition">
              About
            </a>
            <a href="#connect" className="text-gray-700 hover:text-[#C10230] font-medium transition">
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C10230] via-[#8B0000] to-[#C10230] opacity-95"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/mesa_hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Diagonal Cut SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <polygon points="0,40 1200,0 1200,120 0,120" fill="white" />
        </svg>

        <div className="relative container py-32 md:py-48">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#FFD100] text-black px-4 py-2 rounded-lg font-bold mb-6">
              CSU Stanislaus
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Math, Engineering, Science Achievement
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Join our community of STEM students dedicated to academic excellence, internship opportunities, and building lasting connections.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                className="bg-[#FFD100] text-black hover:bg-yellow-400 font-bold text-lg px-8 py-6 rounded-lg transition transform hover:scale-105"
                onClick={() => document.getElementById("meetings")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Meetings
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#C10230] font-bold text-lg px-8 py-6 rounded-lg transition"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Next Meeting Section */}
      <section id="meetings" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#C10230] mb-12">Next Meeting</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="p-8 border-2 border-[#C10230] shadow-lg hover:shadow-xl transition">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-[#C10230] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">DATE & TIME</p>
                    <p className="text-lg font-bold text-gray-900">{nextMeeting.date}</p>
                    <p className="text-lg font-bold text-[#C10230]">{nextMeeting.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-[#C10230] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">LOCATION</p>
                    <p className="text-lg font-bold text-gray-900">{nextMeeting.location}</p>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-200">
                  <Button
                    onClick={handleEditMeeting}
                    className="w-full bg-[#C10230] hover:bg-[#8B0000] text-white font-bold py-3 rounded-lg transition"
                  >
                    Update Meeting Details
                  </Button>
                </div>
              </div>
            </Card>

            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#FFD100] rounded-full opacity-20"></div>
              <img
                src="/mesa_community.png"
                alt="MESA Community"
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#C10230] mb-12">Upcoming Meetings</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {meetings.map((meeting, idx) => (
              <Card
                key={idx}
                className="p-6 border-l-4 border-l-[#FFD100] hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{meeting.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar className="w-4 h-4 text-[#C10230]" />
                    <span>{meeting.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#C10230] font-bold">⏰</span>
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-[#C10230]" />
                    <span>{meeting.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#C10230] mb-12">About MESA</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Math, Engineering, Science Achievement (MESA) club at CSU Stanislaus is dedicated to supporting students pursuing STEM majors. We provide academic guidance, internship opportunities, and a welcoming community for all students.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to help students succeed academically while building meaningful connections with peers who share their passion for science and engineering.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-l-[#C10230] shadow-md">
                <h4 className="text-lg font-bold text-[#C10230] mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community
                </h4>
                <p className="text-gray-700">Connect with fellow STEM students and build lasting friendships.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-l-[#FFD100] shadow-md">
                <h4 className="text-lg font-bold text-[#C10230] mb-2 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Opportunities
                </h4>
                <p className="text-gray-700">Access internship leads, career workshops, and professional development.</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-l-[#C10230] shadow-md">
                <h4 className="text-lg font-bold text-[#C10230] mb-2 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Support
                </h4>
                <p className="text-gray-700">Get academic guidance and peer support from experienced STEM students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 bg-gradient-to-r from-[#C10230] to-[#8B0000]">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Stay Connected</h2>
          <p className="text-xl text-gray-100 text-center mb-12 max-w-2xl mx-auto">
            Follow us on social media and join our Discord community to stay updated on meetings, events, and opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.instagram.com/mesa_club_stanstate_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#C10230] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD100] transition transform hover:scale-105 shadow-lg"
            >
              📸 Instagram
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Discord link coming soon! Check Instagram for updates.");
              }}
              className="bg-white text-[#C10230] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD100] transition transform hover:scale-105 shadow-lg"
            >
              💬 Discord
            </a>
            <a
              href="mailto:mesa@csustan.edu"
              className="bg-white text-[#C10230] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD100] transition transform hover:scale-105 shadow-lg"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">MESA Club</h3>
              <p className="text-gray-400">California State University, Stanislaus</p>
              <p className="text-gray-400">Math, Engineering, Science Achievement</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#meetings" className="hover:text-[#FFD100] transition">Meetings</a></li>
                <li><a href="#about" className="hover:text-[#FFD100] transition">About</a></li>
                <li><a href="#connect" className="hover:text-[#FFD100] transition">Connect</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/mesa_club_stanstate_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD100] transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 MESA Club at CSU Stanislaus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
