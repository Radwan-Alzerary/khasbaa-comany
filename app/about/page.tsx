import Layout from "../components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">عن شركة خصباء الخير</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">ملخص الشركة</h2>
          <p className="mb-4">
            خصباء الخير هي شركة رائدة في المقاولات العامة المدنية والكهربائية والميكانيكية والاتصالات والزراعية. تأسست
            الشركة في عام 2003، ونمت لتصبح اسمًا موثوقًا به في الصناعة.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>تأسست في عام 2003</li>
            <li>
              حاصلة على تصنيف الدرجة الخامسة في الأعمال المدنية، والدرجة الثالثة في الأعمال الكهربائية، والدرجة الثالثة
              في الأعمال الميكانيكية (2015)
            </li>
            <li>المكتب الرئيسي: العراق - الموصل - شارع النبي شيت</li>
            <li>الفرع: دهوك - شارع KRO</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">قدراتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>قيمة المشاريع السنوية</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">+2,000,000 دولار</p>
                <p>القيمة المالية التقديرية لأعمال الشركة في سنة واحدة</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>قدرة المشاريع</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-600">3,000,000 دولار</p>
                <p>القدرة على تنفيذ مشاريع تصل قيمتها إلى 3 ملايين دولار في وقت واحد</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">فريقنا</h2>
          <p className="mb-4">
            تتكون شركة خصباء الخير من 12 موظفًا دائمًا موزعين على مختلف الأقسام، بإجمالي رواتب قدرها 12,650 دولارًا،
            بالإضافة إلى نسبة من الأرباح وفقًا للمشروع.
          </p>
          <p>كما نستعين بحوالي 150 موظفًا مؤقتًا حسب الحاجة في المشاريع ومواقع العمل.</p>
        </section>
      </div>
    </Layout>
  )
}

