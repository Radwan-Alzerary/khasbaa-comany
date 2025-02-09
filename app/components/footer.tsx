import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">خصباء الخير</h3>
            <p className="text-sm sm:text-base">
              شركة رائدة في المقاولات العامة المدنية والكهربائية والميكانيكية والاتصالات والزراعية.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>المقاولات المدنية</li>
              <li>الأعمال الكهربائية</li>
              <li>الأعمال الميكانيكية</li>
              <li>الاتصالات</li>
              <li>المشاريع الزراعية</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4">اتصل بنا</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 ml-2 flex-shrink-0" />
                <span>العراق – الموصل – شارع النبي شيت</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 ml-2 flex-shrink-0" />
                <span className="break-all">khasbaa.16@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 ml-2 flex-shrink-0" />
                <span dir="ltr">000964-7701618157</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} شركة خصباء الخير. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

