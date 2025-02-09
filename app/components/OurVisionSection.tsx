"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Lightbulb, Target, TrendingUp } from "lucide-react"

const visionPoints = [
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "نسعى دائمًا لتقديم حلول مبتكرة في مجال المقاولات",
  },
  {
    icon: Target,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا",
  },
  {
    icon: TrendingUp,
    title: "النمو المستدام",
    description: "نهدف إلى تحقيق نمو مستدام يفيد مجتمعنا وبيئتنا",
  },
]

export default function OurVisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">رؤيتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نسعى لأن نكون الشركة الرائدة في مجال المقاولات في العراق، من خلال تقديم خدمات عالية الجودة وحلول مبتكرة
            تساهم في تطوير البنية التحتية وتحسين حياة المجتمعات المحلية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105"
            >
              <point.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="relative h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Our Vision"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-75"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl font-bold text-center max-w-2xl px-4">
              نحن نبني المستقبل، مشروعًا تلو الآخر، ملتزمين بالتميز والابتكار في كل خطوة نخطوها
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

