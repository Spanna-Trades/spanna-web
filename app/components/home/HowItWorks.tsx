"use client";

import { motion } from "motion/react"

import Section from "@/app/elements/layout/Section";
import SectionHeader from "@/app/elements/layout/SectionHeading";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { useEffect, useRef } from "react";


const steps = [
  {
    title: "Tell us what's broken",
    text: "Post your job in two minutes. Add photos, describe the problem, say when you need someone. That's it from you for now.",
  },
  {
    title: "Compare verified pros",
    text: "Verified electricians and plumbers send you a call-out fee, a rough price, and when they can be there. Their ratings and track record sit right next to their quote.",
  },
  {
    title: "The real price gets locked in",
    text: "Your pro arrives, inspects the job, and sets the final price. That price is locked. We hold your money until you're happy. If you don't like the price, you walk away and only pay the call-out fee.",
  },
  {
    title: "Your pro gets paid when the job is done",
    text: "Approve the work and your pro gets paid. Not happy? Tell us within 7 days. Your money doesn't move until it's sorted.",
  },
];

function StepCard({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-88 w-full rounded-xl border border-slate-200 bg-paper p-6 shadow-lg flex flex-col gap-4">
      <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden">
        <Image
          src={`/mockups/mockup-step-${number}.png`}
          alt={`Step ${number} user journey mockup`}
          width={300}
          height={400}
          sizes="(max-width: 576px) 90vw, (max-width: 768px) 40vw, 25vw"
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <span className="inline-block rounded-full border border-blue-line bg-blue-soft px-2.5 py-1 text-xs font-extrabold tracking-widest text-blue">
          STEP {number}
        </span>
        <h3 className="text-md font-bold text-ink">{title}</h3>
        <p className="text-sm leading-6 text-grey">{text}</p>
      </div>
    </div>
  );
}

const HowItWorks = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiper = new Swiper('.swiper',
        {
          modules: [Navigation, Pagination],
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
            disabledClass: 'text-grey hover:text-grey',
            hiddenClass: 'hidden',
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1.2
            },
            // when window width is >= 480px
            576: {
              slidesPerView: 2.5
            },
            // when window width is >= 640px
            840: {
              slidesPerView: 3.5
            },
            1150: {
              slidesPerView: 4
            }
          }
        } as SwiperOptions
      );

      return () => {
        swiper.destroy(true, true);
      }
    }
  }, [])


  return (
    <Section id="how-it-works" background="white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 items-end justify-between">
          <SectionHeader subheading="How it works" heading="Four steps. Zero stress." description="No WhatsApp chasing. No cash-in-hand ambiguity. No waking up the next day wondering if the job was actually done right." />

          <div className="mb-12 hidden sm:flex gap-2 items-center">
            <button ref={prevRef} className="swiper-button-prev-custom cursor-pointer hover:text-blue">
              Prev
            </button>
            <button ref={nextRef} className="swiper-button-next-custom cursor-pointer transition-colors hover:text-blue">
              Next
            </button>
          </div>
        </div>
        <div className="swiper overflow-visible!">
          <div className="swiper-wrapper pb-5">
            {steps.map((step, index) => (
              <motion.div
                key={`${step.title}-${index}`}
                className="swiper-slide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                viewport={{ amount: 0.4, once: true }}
              >
                <StepCard number={index + 1} title={step.title} text={step.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default HowItWorks;