import Layout from "../components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">اتصل بنا</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  الاسم
                </label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  البريد الإلكتروني
                </label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  الرسالة
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit">إرسال الرسالة</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">معلومات الاتصال</h2>
            <p className="mb-2">
              <strong>العنوان:</strong> العراق - الموصل - شارع النبي شيت
            </p>
            <p className="mb-2">
              <strong>الفرع:</strong> دهوك - شارع KRO
            </p>
            <p className="mb-2">
              <strong>البريد الإلكتروني:</strong> khasbaa.16@gmail.com
            </p>
            <p className="mb-2">
              <strong>الهاتف:</strong> 000964-7701618157
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

