'use client';

import React from 'react';
import { Star, MessageSquare, Heart, Sparkles } from 'lucide-react';
import CallToActionSection from '@/components/CallToActionSection';

export default function ReviewsPage() {
  const breathworkReviews = [
    {
      quote: "The most life-changing session yet. I released so much I felt as if I left a ton of weight on the mat. I felt light and changed — and still do, weeks later.",
      author: "Beata Swist",
      desc: "Toronto, Canada"
    },
    {
      quote: "It&apos;s amazing where the power of our breath can take us. I went on a deep journey, came back as a different person — knowing who I am supposed to be. My real self. It really feels like a rebirth.",
      author: "Christopher",
      desc: "Client"
    },
    {
      quote: "Liberation. Miro guides you in peace and quiet: &apos;everything is good, nothing is wrong.&apos; Just book a session and experience it.",
      author: "Ted",
      desc: "Client"
    }
  ];

  const bodyworkReviews = [
    {
      quote: "I had pain in my neck and shoulders for years and couldn&apos;t turn my head. After one session it was all gone. Every cent worth it.",
      author: "Anna",
      desc: "Client"
    },
    {
      quote: "What seems to be &apos;just a massage&apos; has been life-changing. Miro created the safest space and took all the time to be there for me. My life shifted completely in a positive way.",
      author: "Maria Johanna",
      desc: "Client"
    },
    {
      quote: "His centred presence really helped me surrender and feel safe. That balance between softness and firmness works beautifully. I felt spacious and light afterward.",
      author: "Miiska",
      desc: "Client"
    }
  ];

  const coachingReviews = [
    {
      quote: "Investing time with Miro has transformed my life on multiple levels. Stronger, healthier, happier, more fulfilled — and a better entrepreneur for it. I now consider him one of my closest friends.",
      author: "Steven",
      desc: "Entrepreneur"
    },
    {
      quote: "He made me feel seen and heard. That changed my view on things — and on myself and my self-worth.",
      author: "Fauzy",
      desc: "Client"
    },
    {
      quote: "Go if you feel you &apos;have to go.&apos; He dedicatedly supports you through the darker parts toward the light. I am very grateful I did.",
      author: "Jacqueline",
      desc: "Retreat Guest"
    },
    {
      quote: "Due to his help I am feeling much better and healing from chronic fatigue, Hashimoto&apos;s, Q-fever, endometriosis and leaky gut. Every question I had was answered in no time.",
      author: "Alina",
      desc: "Coaching Client"
    },
    {
      quote: "Our hypnotherapy sessions left me with more clarity and inner strength.",
      author: "Awa",
      desc: "Client"
    }
  ];

  return (
    <div className="bg-[#FBF8F3]">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-[#C8852E] block">
          Client Journals
        </span>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#322C2B] leading-tight">
          In their <span className="font-display italic text-[#C8852E]">own words.</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-[#6E655E] font-light leading-relaxed max-w-2xl mx-auto">
          The thing people mention most after working with me is not a singular technique. It is how they felt: safe, seen, and genuinely cared for. Here is what that has looked like.
        </p>
      </section>

      {/* Review Categories Alternating Lists */}
      <section className="py-16 bg-white border-y border-[#F2ECE3] space-y-24">
        
        {/* Category 1: Transformative Breathwork */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex items-center gap-3 border-b border-[#F2ECE3] pb-4">
            <span className="font-display text-2xl text-[#322C2B] font-light">Transformative Breathwork</span>
            <span className="h-px bg-[#F2ECE3] flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breathworkReviews.map((rev, idx) => (
              <div key={idx} className="bg-[#FBF8F3] border border-[#F2ECE3] p-8 rounded-xl flex flex-col justify-between hover:shadow-md transition-all">
                <blockquote className="font-display italic text-[#322C2B] text-base leading-relaxed mb-6 font-light">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
                <div className="text-xs font-body border-t border-[#F2ECE3]/80 pt-4">
                  <span className="font-semibold text-[#322C2B] block">{rev.author}</span>
                  <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">{rev.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Body Reset & Massage */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex items-center gap-3 border-b border-[#F2ECE3] pb-4">
            <span className="font-display text-2xl text-[#322C2B] font-light">Body Reset & Massage</span>
            <span className="h-px bg-[#F2ECE3] flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bodyworkReviews.map((rev, idx) => (
              <div key={idx} className="bg-[#FBF8F3] border border-[#F2ECE3] p-8 rounded-xl flex flex-col justify-between hover:shadow-md transition-all">
                <blockquote className="font-display italic text-[#322C2B] text-base leading-relaxed mb-6 font-light">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
                <div className="text-xs font-body border-t border-[#F2ECE3]/80 pt-4">
                  <span className="font-semibold text-[#322C2B] block">{rev.author}</span>
                  <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">{rev.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Coaching & Retreats */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex items-center gap-3 border-b border-[#F2ECE3] pb-4">
            <span className="font-display text-2xl text-[#322C2B] font-light">Coaching & Retreats</span>
            <span className="h-px bg-[#F2ECE3] flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coachingReviews.map((rev, idx) => (
              <div key={idx} className="bg-[#FBF8F3] border border-[#F2ECE3] p-8 rounded-xl flex flex-col justify-between hover:shadow-md transition-all">
                <blockquote className="font-display italic text-[#322C2B] text-base leading-relaxed mb-6 font-light">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
                <div className="text-xs font-body border-t border-[#F2ECE3]/80 pt-4">
                  <span className="font-semibold text-[#322C2B] block">{rev.author}</span>
                  <span className="text-[#6E655E] text-[10px] uppercase tracking-wider">{rev.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Final CTA Section */}
      <CallToActionSection />
    </div>
  );
}
