"use client";

import React from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import ContactInfoCard from "../components/features/contact/ContactInfoCard";
import FeaturesSection from "../components/features/home/FeaturesSection";
import { Button } from "@/components/ui/button"; // Using your existing Shadcn button
import MapSection from "../components/features/contact/MapSection";
import { typography } from "../config/typography";
import { colors } from "../config/colors";

export default function ContactPage() {
  return (
    <div className={`min-h-screen ${colors.backgroundSecondary} p-4 lg:p-8 ${typography.fontFamily}`}>
      {/* Main Container */}
      <main className="max-w-[1400px] mx-auto">
        
        {/* Responsive Layout Wrapper 
          - Flex column on mobile
          - Flex row on large screens (lg:)
          - Large gap on desktop for breathing room
        */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ================= LEFT COLUMN: Contact Info ================= */}
          <div className="flex-1 lg:max-w-[480px] space-y-8 lg:sticky lg:top-8">
            <div>
              {/* H1: Section Headings -> text-5xl */}
              <h1 className={`${typography.sectionTitle} ${colors.textStrong} mb-4`}>
                Get in touch
              </h1>
              {/* Body: text-lg */}
              <p className={`${typography.body} ${colors.textMuted}`}>
                For technical support or any urgent issues, our support team is available 24/7. Simply reach out via the methods above, and we'll be happy to assist.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoCard
                icon={Phone}
                title="Talk To Us Directly"
                details="+1 718-663-2848"
              />
              <ContactInfoCard
                icon={MapPin}
                title="Address"
                details="10937 Sutphin Blvd Jamaica, NY-11435"
              />
              <ContactInfoCard
                icon={Mail}
                title="Contact by Email"
                details="info@oneprint.ai"
              />
            </div>
          </div>


          {/* ================= RIGHT COLUMN: Contact Form ================= */}
          <div className={`flex-1 w-full ${colors.cardBackground} p-6 sm:p-8 lg:p-10 rounded-3xl border ${colors.border} shadow-lg`}>
            <div className="mb-8">
              {/* H2/H3 equivalent for form title -> Let's use H2 (text-4xl) for weight */}
              <h2 className={`${typography.sectionTitle} ${colors.textStrong} mb-3`}>
                Let's Talk
              </h2>
              {/* Body: text-lg */}
              <p className={`${typography.body} ${colors.textMuted}`}>
                How Can OnePrint Be Of Assistance To You? We'd Love To Hear From You.
              </p>
            </div>

            <form className="space-y-6">
              {/* Row 1: Name Fields (Stacks on mobile, side-by-side on tablet+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className={`${typography.label} ${colors.textStrong}`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className={`w-full p-4 ${colors.backgroundSecondary} border ${colors.border} rounded-xl ${typography.body} outline-none focus:border-[${colors.button}] focus:ring-1 focus:ring-[${colors.button}] transition-all`}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className={`${typography.label} ${colors.textStrong}`}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className={`w-full p-4 ${colors.backgroundSecondary} border ${colors.border} rounded-xl ${typography.body} outline-none focus:border-[${colors.button}] focus:ring-1 focus:ring-[${colors.button}] transition-all`}
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className={`${typography.label} ${colors.textStrong}`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className={`w-full p-4 ${colors.backgroundSecondary} border ${colors.border} rounded-xl ${typography.body} outline-none focus:border-[${colors.button}] focus:ring-1 focus:ring-[${colors.button}] transition-all`}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={`${typography.label} ${colors.textStrong}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className={`w-full p-4 ${colors.backgroundSecondary} border ${colors.border} rounded-xl ${typography.body} outline-none focus:border-[${colors.button}] focus:ring-1 focus:ring-[${colors.button}] transition-all`}
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className={`${typography.label} ${colors.textStrong}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className={`w-full p-4 ${colors.backgroundSecondary} border ${colors.border} rounded-xl ${typography.body} outline-none focus:border-[${colors.button}] focus:ring-1 focus:ring-[${colors.button}] transition-all`}
                />
              </div>

              {/* Row 4: Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className={`${typography.label} ${colors.textStrong}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className={`w-full p-4 ${colors.backgroundSecondary} border ${colors.border} rounded-xl ${typography.body} outline-none resize-none focus:border-[${colors.button}] focus:ring-1 focus:ring-[${colors.button}] transition-all`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button 
                className={`w-full h-14 ${typography.buttonText} font-bold ${colors.button} hover:${colors.buttonHover} text-white rounded-xl gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]`}
              >
                Send Message
                <Send className="w-5 h-5" />
              </Button>

            </form>
          </div>

        </div>
      </main>
      
      {/* Features Section */}
      <div >
        <FeaturesSection />
        <MapSection />
      </div>
    </div>
  );
}