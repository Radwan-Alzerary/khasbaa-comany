import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

const events = [
  {
    name: "معرض البناء والإعمار 2023",
    description:
      "شاركنا في معرض البناء والإعمار السنوي، حيث عرضنا أحدث تقنياتنا وحلولنا في مجال المقاولات. تعرف على المزيد عن مشاركتنا وأهم ما قدمناه في هذا الحدث الهام.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "15-17 سبتمبر 2023",
    location: "بغداد، العراق",
  },
  {
    name: "ورشة عمل: الاستدامة في المشاريع الإنشائية",
    description:
      "نظمنا ورشة عمل لمناقشة أهمية الاستدامة في المشاريع الإنشائية وكيفية تطبيق الممارسات الصديقة للبيئة. شارك في الورشة خبراء محليون ودوليون في مجال البناء المستدام.",
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "5 أكتوبر 2023",
    location: "الموصل، العراق",
  },
  {
    name: "مؤتمر تكنولوجيا البناء 2024",
    description:
      "سنشارك في مؤتمر تكنولوجيا البناء القادم، حيث سنقدم عرضًا عن استخدام الذكاء الاصطناعي في إدارة المشاريع. تعرف على كيفية تسجيل حضورك وحضور عرضنا التقديمي.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
    date: "20-22 مارس 2024",
    location: "أربيل، العراق",
  },
]

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">الفعاليات والمعارض</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          نشارك بانتظام في المعارض والمؤتمرات الرائدة في مجال المقاولات، ونقوم بتنظيم ورش عمل لتبادل الخبرات ومواكبة
          أحدث التطورات في الصناعة.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="px-6 pb-4">
                <Button variant="outline" className="w-full">
                  عرض التفاصيل
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg">عرض جميع الفعاليات</Button>
        </div>
      </div>
    </section>
  )
}

