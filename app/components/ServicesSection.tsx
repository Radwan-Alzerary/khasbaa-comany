"use client"

import { Building2, Zap, Wrench, Radio, Leaf } from "lucide-react"
import Image from "next/image"
import { BackgroundShapes } from "./BackgroundShapes"
import ScrollAnimation from "./ScrollAnimation"

const services = [
  {
    icon: Building2,
    title: "الأعمال المدنية",
    description: "خبرة في مختلف مشاريع الهندسة المدنية، من المباني السكنية إلى التجارية والصناعية.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: Zap,
    title: "الأعمال الكهربائية",
    description: "حلول كهربائية شاملة لمتطلبات المشاريع المتنوعة، من التركيب إلى الصيانة.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    icon: Wrench,
    title: "الأعمال الميكانيكية",
    description: "خدمات ميكانيكية متكاملة تشمل التصميم والتركيب والصيانة لمختلف الأنظمة.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    icon: Radio,
    title: "الاتصالات",
    description: "بنية تحتية وخدمات اتصالات متطورة لتلبية احتياجات الاتصال الحديثة.",
    image:
      "https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    icon: Leaf,
    title: "المشاريع الزراعية",
    description: "تنفيذ وإدارة المشاريع الزراعية بما يتوافق مع أحدث التقنيات والممارسات المستدامة.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  },
]

export default function ServicesSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <BackgroundShapes className="z-0" color="#60A5FA" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">خدماتنا</h2>
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn" delay={0.2}>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات في مجالات المقاولات المختلفة، مع التركيز على الجودة والابتكار في كل مشروع نقوم
            به.
          </p>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

