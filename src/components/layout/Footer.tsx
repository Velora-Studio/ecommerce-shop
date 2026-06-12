import { Link } from 'react-router-dom';
import { Wrench, Mail, Phone, MapPin, Instagram, Send } from 'lucide-react';
import { categories } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-primary">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-wide">ابزارسازان</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              منبع قابل اعتماد شما برای ابزارآلات حرفه‌ای کارگاهی. تجهیزات با کیفیت برای صنعتگرانی که بهترین را می‌خواهند.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg font-bold tracking-wide mb-4">دسته‌بندی‌ها</h4>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.slug}`}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products?sale=true"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  پیشنهاد ویژه
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-heading text-lg font-bold tracking-wide mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-muted-foreground hover:text-foreground transition-colors">
                  پیگیری سفارش
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold tracking-wide mb-4">تماس با ما</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>تهران، خیابان ولیعصر<br />پلاک ۱۲۳۴</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@abzarsazan.ir</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>&copy; ۱۴۰۳ ابزارسازان. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;