import { Shield, Users, Lightbulb, Recycle } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "الجودة والأمان",
    description: "نلتزم بأعلى معايير الجودة والسلامة في جميع مشاريعنا، مما يضمن نتائج موثوقة وآمنة.",
  },
  {
    icon: Users,
    title: "العمل الجماعي",
    description: "نؤمن بقوة العمل الجماعي ونشجع التعاون بين فرقنا لتحقيق أفضل النتائج.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "نسعى دائمًا لتبني أحدث التقنيات والأساليب المبتكرة لتقديم حلول متطورة لعملائنا.",
  },
  {
    icon: Recycle,
    title: "الاستدامة",
    description: "نلتزم بممارسات الاستدامة في جميع مشاريعنا، مع مراعاة البيئة والمجتمع.",
  },
]

export default function OurValuesSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">قيمنا</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          تشكل قيمنا الأساسية جوهر عملنا وتوجه كل قرار نتخذه. نحن ملتزمون بهذه المبادئ في كل مشروع نقوم به.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <value.icon className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

