"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const stats = [
  { value: 20, label: "سنوات من الخبرة", prefix: "+" },
  { value: 150, label: "موظف ماهر", prefix: "+" },
  { value: 2, label: "قيمة المشاريع السنوية", prefix: "+", suffix: " مليون$" },
  { value: 6, label: "مناطق مغطاة", prefix: "+" },
]

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = Number.parseInt(value)
      const incrementTime = (duration / end) * 1000

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [value, duration, inView])

  return <span ref={ref}>{count}</span>
}

export default function WhyChooseUsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">لماذا تختارنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.prefix}
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

