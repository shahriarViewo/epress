"use client";

import React from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import ContactInfoCard from "../components/features/contact/ContactInfoCard";
import FeaturesSection from "../components/features/home/FeaturesSection";
import { Button } from "@/components/ui/button"; // Using your existing Shadcn button
import MapSection from "../components/features/contact/MapSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-4 lg:p-8 font-sans">
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
              {/* H2: Section Headings -> text-4xl */}
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get in touch
              </h2>
              {/* Body: text-lg */}
              <p className="text-lg text-gray-600 leading-relaxed">
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
          <div className="flex-1 w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-lg">
            <div className="mb-8">
              {/* H2/H3 equivalent for form title -> Let's use H2 (text-4xl) for weight */}
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                Let's Talk
              </h2>
              {/* Body: text-lg */}
              <p className="text-lg text-gray-600">
                How Can OnePrint Be Of Assistance To You? We'd Love To Hear From You.
              </p>
            </div>

            <form className="space-y-6">
              {/* Row 1: Name Fields (Stacks on mobile, side-by-side on tablet+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-base font-semibold text-gray-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none focus:border-[#EF5A2B] focus:ring-1 focus:ring-[#EF5A2B] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-base font-semibold text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none focus:border-[#EF5A2B] focus:ring-1 focus:ring-[#EF5A2B] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-base font-semibold text-gray-900">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none focus:border-[#EF5A2B] focus:ring-1 focus:ring-[#EF5A2B] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-base font-semibold text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none focus:border-[#EF5A2B] focus:ring-1 focus:ring-[#EF5A2B] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-base font-semibold text-gray-900">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none focus:border-[#EF5A2B] focus:ring-1 focus:ring-[#EF5A2B] transition-all"
                />
              </div>

              {/* Row 4: Message Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-base font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl text-base outline-none resize-none focus:border-[#EF5A2B] focus:ring-1 focus:ring-[#EF5A2B] transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button 
                className="w-full h-14 text-lg font-bold bg-[#EF5A2B] hover:bg-[#d94a1f] text-white rounded-xl gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
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