export default function MapSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">موقعنا</h2>
        <div className="aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51679.92509703!2d43.09932917910156!3d36.34960880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40079464db1a88b9%3A0x4a68977fdba19a68!2z2YXZiNi12YTYjCDZhtin2K3Zitip2Kog2YbZitmG2YjZiQ!5e0!3m2!1sar!2siq!4v1652345678901!5m2!1sar!2siq"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

