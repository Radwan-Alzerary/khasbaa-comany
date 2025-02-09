"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight, X, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "مواقع شركة آسيا سيل",
    description: "بناء كامل لـ 40 موقع جديد و 65 موقع على الأسطح لشركة آسيا سيل (2018-2024).",
    category: "اتصالات",
    fullDescription:
      "قمنا بتنفيذ مشروع ضخم لشركة آسيا سيل، أحد أكبر مزودي خدمات الاتصالات في العراق. تضمن المشروع بناء 40 موقعًا جديدًا لأبراج الاتصالات، بالإضافة إلى تركيب 65 موقعًا على أسطح المباني القائمة. استخدمنا أحدث التقنيات والمعدات لضمان تغطية واسعة وجودة اتصال عالية. واجهنا تحديات في العمل في مناطق نائية وظروف مناخية صعبة، لكننا نجحنا في إكمال المشروع في الوقت المحدد وبالجودة المطلوبة.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        description: "برج اتصالات حديث تم بناؤه كجزء من مشروع آسيا سيل",
      },
      {
        src: "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "فريق العمل أثناء تركيب معدات الاتصالات",
      },
      {
        src: "https://images.unsplash.com/photo-1563906267088-b029e7101114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "لوحة تحكم مركزية لإدارة شبكة الاتصالات",
      },
    ],
  },
  {
    id: 2,
    title: "البيوت الزراعية",
    description: "بناء 50 بيت زراعي في مدينتي الموصل ودهوك (2021-2023).",
    category: "زراعة",
    fullDescription:
      "نفذنا مشروعًا طموحًا لبناء 50 بيتًا زراعيًا في مدينتي الموصل ودهوك. هدف المشروع إلى تعزيز الإنتاج الزراعي المحلي وتوفير فرص عمل للمجتمعات المحلية. استخدمنا تقنيات متطورة في البناء والري وإدارة المناخ داخل البيوت الزراعية، مما يسمح بزراعة محاصيل متنوعة على مدار العام. واجهنا تحديات في توفير مصادر الطاقة المستدامة وإدارة الموارد المائية، لكننا نجحنا في إيجاد حلول مبتكرة تضمن كفاءة التشغيل واستدامة المشروع.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        description: "بيت زراعي حديث تم إنشاؤه في مدينة الموصل",
      },
      {
        src: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "داخل أحد البيوت الزراعية المجهزة بأحدث التقنيات",
      },
      {
        src: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
        description: "محاصيل خضراء نامية في أحد البيوت الزراعية",
      },
    ],
  },
  {
    id: 3,
    title: "مدرسة النور",
    description: "بناء كامل لمدرسة النور في مدينة الموصل، بالتعاون مع منظمة الحياة للإغاثة والتنمية (2013).",
    category: "بناء",
    fullDescription:
      "قمنا ببناء مدرسة النور في مدينة الموصل بالتعاون مع منظمة الحياة للإغاثة والتنمية. يهدف هذا المشروع إلى توفير بيئة تعليمية حديثة وآمنة للطلاب في المنطقة. تضمن المشروع بناء 20 فصلاً دراسيًا، مختبرات علوم وحاسوب، مكتبة، وصالة رياضية متعددة الأغراض. استخدمنا مواد بناء صديقة للبيئة وتقنيات موفرة للطاقة لضمان استدامة المبنى. واجهنا تحديات في توفير المواد وسط الظروف الأمنية الصعبة، لكننا نجحنا في إكمال المشروع بفضل التعاون الوثيق مع المجتمع المحلي والمنظمات الشريكة.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "واجهة مدرسة النور الحديثة في الموصل",
      },
      {
        src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        description: "فصل دراسي مجهز بأحدث التقنيات التعليمية",
      },
      {
        src: "https://images.unsplash.com/photo-1587554801471-37976a256db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        description: "ساحة المدرسة المجهزة لأنشطة الطلاب",
      },
    ],
  },
]

export default function FeaturedProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
    setCurrentImage(0)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImage(0)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects[currentProject].images.length)
  }

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + projects[currentProject].images.length) % projects[currentProject].images.length,
    )
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">مشاريعنا المميزة</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentProject}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={projects[currentProject].images[currentImage].src || "/placeholder.svg"}
                  alt={projects[currentProject].title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{projects[currentProject].title}</h3>
              <p className="text-gray-600 mb-4">{projects[currentProject].description}</p>
              <p className="text-sm text-gray-500 mb-4">{projects[currentProject].images[currentImage].description}</p>
              <div className="flex justify-end items-center">
                <motion.button
                  onClick={prevProject}
                  className="mr-2 text-blue-500 hover:text-blue-700 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="المشروع السابق"
                >
                  <ChevronRight size={24} />
                </motion.button>
                <motion.button
                  onClick={nextProject}
                  className="text-blue-500 hover:text-blue-700 p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="المشروع التالي"
                >
                  <ChevronLeft size={24} />
                </motion.button>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={() => setShowModal(true)} className="mt-4 w-full flex items-center justify-center">
                  <Info className="mr-2" size={20} />
                  عرض تفاصيل المشروع
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {projects[currentProject].images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-blue-500" : "bg-gray-300"}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button asChild>
            <Link href="/projects">عرض جميع المشاريع</Link>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">{projects[currentProject].title}</h3>
                <motion.button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <p className="text-gray-700 mb-4">{projects[currentProject].fullDescription}</p>
              <div className="grid grid-cols-2 gap-4">
                {projects[currentProject].images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative h-48"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.description}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

