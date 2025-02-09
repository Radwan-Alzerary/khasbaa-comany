import Layout from "../components/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "مواقع شركة آسيا سيل",
    description: "بناء كامل لـ 40 موقع جديد و 65 موقع على الأسطح لشركة آسيا سيل في مدن الموصل وتكريت وأربيل ودهوك.",
    year: "2018-2024",
  },
  {
    title: "البيوت الزراعية",
    description: "بناء 50 بيت زراعي في مدينتي الموصل ودهوك، بما في ذلك الإشراف على التشغيل والإنتاج والتسويق والصيانة.",
    year: "2021-2023",
  },
  {
    title: "قاعات الدواجن",
    description:
      "بناء كامل لـ 3 قاعات دواجن في مدينة دهوك، كل منها بمساحة 85×14 متر، بما في ذلك الإشراف على التشغيل والإنتاج والتسويق والصيانة.",
    year: "2019-2022",
  },
  {
    title: "مدرسة النور",
    description: "بناء كامل لمدرسة النور في مدينة الموصل، بالتعاون مع منظمة الحياة للإغاثة والتنمية.",
    year: "2013",
  },
  {
    title: "مشروع تربية الشعير الأخضر",
    description:
      "تنفيذ مشروع تربية الشعير الأخضر في الموصل لصالح مستثمر عراقي من القطاع الخاص، بما في ذلك جميع احتياجات البناء والمعدات، وكذلك الإشراف الفني والإداري.",
    year: "2022",
  },
  {
    title: "إعادة تأهيل مدرسة عين مانع",
    description: "أعمال إعادة تأهيل مدرسة عين مانع في زمار، نينوى، بالتعاون مع منظمة WHH (المنظمة الألمانية).",
    year: "2020",
  },
  {
    title: "مشروع خزان الخرسانة",
    description:
      "بناء خزان خرساني بسعة 300 متر مكعب مع أنابيب توصيل من الآبار إلى الخزان ومن الخزان إلى المدينة في منطقة القوش، شمال مدينة الموصل.",
    year: "2023",
  },
  {
    title: "إعادة تأهيل الشبكة الكهربائية",
    description: "تطوير وإعادة تأهيل الشبكة الكهربائية للقرى شمال قضاء القيارة، محافظة نينوى.",
    year: "2023",
  },
]

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">مشاريعنا</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.year}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}

