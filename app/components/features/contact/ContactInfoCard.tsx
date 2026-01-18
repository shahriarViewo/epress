import React from "react";
import { LucideIcon } from "lucide-react";

type ContactInfoCardProps = {
  icon: LucideIcon;
  title: string;
  details: string[] | string; // Can accept a single string or an array of lines
};

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  details,
}) => {
  const detailLines = Array.isArray(details) ? details : [details];

  return (
    <div className="flex items-start gap-4 bg-[#FFF5F0] p-6 rounded-2xl">
      {/* Icon Box */}
      <div className="shrink-0 w-12 h-12 bg-[#EF5A2B] rounded-lg flex items-center justify-center text-white shadow-sm">
        <Icon className="w-6 h-6" />
      </div>

      {/* Text Content */}
      <div>
        {/* H3: Card Titles -> text-2xl */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        
        {/* Body: Section descriptions -> text-lg */}
        <div className="text-lg text-gray-600 leading-relaxed">
          {detailLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;