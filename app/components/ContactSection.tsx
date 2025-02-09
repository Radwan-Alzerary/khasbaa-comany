import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">اتصل بنا</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <Input type="text" placeholder="الاسم" />
              <Input type="email" placeholder="البريد الإلكتروني" />
              <Input type="tel" placeholder="رقم الهاتف" />
              <Textarea placeholder="رسالتك" rows={4} />
              <Button type="submit" className="w-full">
                إرسال الرسالة
              </Button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">معلومات الاتصال</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-500 mr-2" />
                  <span>000964-7701618157</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500 mr-2" />
                  <span>khasbaa.16@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                  <span>العراق - الموصل - شارع النبي شيت</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

