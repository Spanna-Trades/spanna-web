"use client"

import { motion } from "motion/react"

import Section from "@/app/elements/layout/Section"
import Icon, { IconKey } from "@/app/elements/Icon";

type Stat = {
  icon: IconKey,
  label: string
}

const stats: Stat[] = [
  { icon: "stopwatch", label: "Get quotes on household repairs in minutes" },
  { icon: "user-check", label: "A safe & secure marketplace where all pros are verified" },
  { icon: "clock", label: "7 Days to flag a problem before your pro gets paid" },
];

const CalloutCards = () => {
  return (
    <Section background="deep-blue" extendedClasses="px-4 py-12 sm:px-6 lg:px-8 -mt-8!">
      <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="space-y-1.5 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 1) }}
            viewport={{ amount: 0.5, once: true }}
          >
            <Icon icon={stat.icon} width={50} fill="#ffffff" />
            <p className="text-[13px] font-semibold leading-5 text-blue-line max-w-48">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default CalloutCards;