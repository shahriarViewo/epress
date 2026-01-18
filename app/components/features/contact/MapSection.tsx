import React from "react";

export default function MapSection() {
  return (
    <section className="w-full py-8 lg:py-12">
      <div className="max-w-[1600px] mx-auto px-4 md:px-16">
        
        {/* Map Container
            - aspect-video: Short rectangle on mobile (16:9)
            - lg:h-[500px]: Fixed tall height on Desktop for visibility
            - rounded-3xl: Matches your other sections
            - overflow-hidden: Ensures the map corners are clipped perfectly
            - shadow-sm: Subtle depth
        */}
        <div className="relative w-full aspect-square sm:aspect-video lg:h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm">
          
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=10937%20Sutphin%20Blvd%20Jamaica%20NY%2011435&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            title="OnePrint Location"
            className="absolute inset-0 grayscale-[20%] contrast-[0.9]" 
            // ^ Added slight grayscale/contrast filter to blend better with a clean UI
          ></iframe>
          
        </div>
      </div>
    </section>
  );
}