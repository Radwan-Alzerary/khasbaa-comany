import "./globals.css"
import { Noto_Kufi_Arabic } from "next/font/google"
import type React from "react" // Import React

const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ["arabic"] })

export const metadata = {
  title: "خصباء الخير",
  description: "المقاولات العامة المدنية والكهربائية والميكانيكية والاتصالات والزراعية",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoKufiArabic.className}>{children}</body>
    </html>
  )
}

