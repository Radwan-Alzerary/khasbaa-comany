import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, Calendar, Award } from "lucide-react"
import ScrollAnimation from "./ScrollAnimation"

export default function AboutUsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fadeIn">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">من نحن</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              شركة خصباء الخير هي شركة مقاولات رائدة في العراق، نقدم خدمات متكاملة في مجالات المقاولات المدنية
              والكهربائية والميكانيكية والاتصالات والزراعية.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <ScrollAnimation animation="slideUp">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">قصتنا</h3>
              <p className="text-gray-700">
                تأسست شركة خصباء الخير عام 2003، وعلى مدار أكثر من عقدين، نجحنا في بناء سمعة قوية كشركة موثوقة وذات
                كفاءة عالية في مجال المقاولات. نفخر بمساهمتنا في تطوير البنية التحتية وتحسين حياة المجتمعات المحلية في
                العراق.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>أكثر من 20 عامًا من الخبرة في مجال المقاولات</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>فريق من المهندسين والفنيين ذوي الكفاءة العالية</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>التزام صارم بمعايير الجودة والسلامة</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="scale">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <ScrollAnimation animation="fadeIn" delay={0.1}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">+150</h4>
              <p className="text-gray-600">موظف ماهر</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeIn" delay={0.2}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">منذ 2003</h4>
              <p className="text-gray-600">في خدمة العملاء</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeIn" delay={0.3}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">+100</h4>
              <p className="text-gray-600">مشروع منجز</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeIn" delay={0.4}>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">100%</h4>
              <p className="text-gray-600">رضا العملاء</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeIn">
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/about">اقرأ المزيد عنا</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

