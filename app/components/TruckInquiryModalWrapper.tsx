"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import TruckInquiryModal from "./TruckInquiryModal";
import type { Truck } from "../data/trucks";

interface TruckInquiryModalWrapperProps {
  truck: Truck;
}

export default function TruckInquiryModalWrapper({
  truck,
}: TruckInquiryModalWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors"
      >
        <Phone size={16} />
        Contact Us About This Truck
      </button>

      <TruckInquiryModal
        truck={truck}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
