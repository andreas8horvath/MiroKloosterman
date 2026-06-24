'use client';

import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function PrivacyPage() {
  return (
    <div className="bg-[#FBF8F3] min-h-[70vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
      <ScrollReveal variant="up" duration={0.8}>
        <div className="max-w-2xl bg-white border border-[#F2ECE3] shadow-md rounded-2xl p-8 md:p-12 space-y-6 text-[#322C2B]">
          <h1 className="font-display text-3xl font-light text-[#322C2B] border-b border-[#F2ECE3] pb-4">
            Privacy Policy
          </h1>
          
          <div className="font-body text-sm font-light text-[#6E655E] space-y-4 leading-relaxed">
            <p>
              Effective date: October 2024 / Netherlands & EU business compliance standard.
            </p>
            <p>
              We respect your privacy under the General Data Protection Regulation (GDPR). Information submitted via our free discovery call scheduler (including your name, email, and WhatsApp number) is strictly and solely utilized to contact you directly for coordinating discovery calls.
            </p>
            <p>
              We do not share, sell, or license any client health narratives or personal details with third-party networks. All communication remains strictly confidential, secure, and personal to Miro Kloosterman.
            </p>
            <p>
              Should you have any inquiries regarding data deletion or adjustments of your stored communication coordinates, please email: <a href="mailto:miro@mirokloosterman.com" className="text-[#C08264] font-medium underline">miro@mirokloosterman.com</a>.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
