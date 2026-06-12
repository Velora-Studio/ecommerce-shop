import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Shield, CreditCard, RotateCcw, Package, HelpCircle } from 'lucide-react';

const faqCategories = [
  {
    id: 'shipping',
    title: 'ارسال و حمل‌ونقل',
    icon: Truck,
    questions: [
      {
        q: 'هزینه ارسال چقدر است؟',
        a: 'ارسال برای سفارش‌های بالای ۵۰۰ هزار تومان رایگان است. برای سفارش‌های کمتر از این مبلغ، هزینه ارسال بر اساس وزن و مقصد محاسبه می‌شود و در زمان تکمیل سفارش نمایش داده می‌شود.',
      },
      {
        q: 'مدت زمان ارسال چقدر است؟',
        a: 'برای تهران معمولاً ۱ تا ۲ روز کاری و برای شهرستان‌ها ۲ تا ۵ روز کاری زمان می‌برد. در ایام پرترافیک ممکن است کمی بیشتر طول بکشد.',
      },
      {
        q: 'آیا امکان ارسال به تمام نقاط کشور وجود دارد؟',
        a: 'بله، ما به تمام نقاط ایران ارسال داریم. ارسال از طریق پست پیشتاز، تیپاکس و اسنپ‌باکس انجام می‌شود.',
      },
      {
        q: 'چگونه سفارش خود را پیگیری کنم؟',
        a: 'پس از ارسال سفارش، کد پیگیری از طریق پیامک برای شما ارسال می‌شود. همچنین می‌توانید از بخش "پیگیری سفارش" در سایت، وضعیت سفارش خود را مشاهده کنید.',
      },
    ],
  },
  {
    id: 'warranty',
    title: 'گارانتی و خدمات پس از فروش',
    icon: Shield,
    questions: [
      {
        q: 'محصولات شما گارانتی دارند؟',
        a: 'بله، تمام محصولات دارای گارانتی اصالت و سلامت فیزیکی کالا هستند. محصولات برندهای معتبر مانند بوش، ماکیتا و دیوالت دارای گارانتی رسمی شرکتی هستند.',
      },
      {
        q: 'مدت گارانتی چقدر است؟',
        a: 'مدت گارانتی بسته به نوع محصول و برند متفاوت است. معمولاً بین ۶ ماه تا ۲ سال گارانتی ارائه می‌شود که جزئیات آن در صفحه هر محصول ذکر شده است.',
      },
      {
        q: 'برای استفاده از گارانتی چه کاری باید انجام دهم؟',
        a: 'کافیست با شماره پشتیبانی تماس بگیرید یا از طریق واتساپ اطلاع دهید. کارشناسان ما راهنمایی لازم را ارائه می‌دهند و در صورت نیاز، محصول برای بررسی به مرکز خدمات ارسال می‌شود.',
      },
    ],
  },
  {
    id: 'payment',
    title: 'پرداخت و فاکتور',
    icon: CreditCard,
    questions: [
      {
        q: 'روش‌های پرداخت چیست؟',
        a: 'پرداخت آنلاین از طریق درگاه بانکی، پرداخت در محل (فقط تهران)، و انتقال کارت به کارت امکان‌پذیر است.',
      },
      {
        q: 'آیا امکان خرید اقساطی وجود دارد؟',
        a: 'بله، برای خریدهای بالای ۵ میلیون تومان امکان خرید اقساطی با چک یا اقساط بانکی وجود دارد. برای اطلاعات بیشتر با پشتیبانی تماس بگیرید.',
      },
      {
        q: 'آیا فاکتور رسمی صادر می‌شود؟',
        a: 'بله، فاکتور رسمی همراه با کالا ارسال می‌شود. اگر نیاز به فاکتور با مشخصات شرکتی دارید، هنگام ثبت سفارش اطلاعات شرکت را وارد کنید.',
      },
    ],
  },
  {
    id: 'returns',
    title: 'مرجوعی و تعویض',
    icon: RotateCcw,
    questions: [
      {
        q: 'شرایط مرجوع کردن کالا چیست؟',
        a: 'شما تا ۷ روز پس از دریافت کالا فرصت دارید در صورت عدم رضایت، کالا را مرجوع کنید. کالا باید در بسته‌بندی اصلی و بدون استفاده باشد.',
      },
      {
        q: 'هزینه مرجوعی به عهده کیست؟',
        a: 'اگر کالا معیوب یا اشتباه ارسال شده باشد، هزینه مرجوعی به عهده ماست. در غیر این صورت، هزینه ارسال مرجوعی به عهده مشتری است.',
      },
      {
        q: 'چقدر طول می‌کشد تا پول مرجوعی به حسابم برگردد؟',
        a: 'پس از دریافت و بررسی کالای مرجوعی، مبلغ ظرف ۳ تا ۵ روز کاری به حساب شما واریز می‌شود.',
      },
    ],
  },
  {
    id: 'products',
    title: 'محصولات',
    icon: Package,
    questions: [
      {
        q: 'آیا محصولات شما اصل هستند؟',
        a: 'بله، تمام محصولات ما اصل و دارای ضمانت اصالت کالا هستند. ما نمایندگی رسمی برندهای معتبر جهانی هستیم.',
      },
      {
        q: 'اگر محصولی موجود نبود چه کنم؟',
        a: 'می‌توانید از گزینه "اطلاع از موجود شدن" استفاده کنید تا به محض موجود شدن محصول، پیامک دریافت کنید. همچنین می‌توانید با پشتیبانی تماس بگیرید.',
      },
      {
        q: 'آیا مشاوره خرید ارائه می‌دهید؟',
        a: 'بله، کارشناسان ما آماده مشاوره رایگان برای انتخاب بهترین ابزار متناسب با نیاز شما هستند. از طریق تلفن یا واتساپ تماس بگیرید.',
      },
    ],
  },
  {
    id: 'other',
    title: 'سایر سوالات',
    icon: HelpCircle,
    questions: [
      {
        q: 'ساعات کاری پشتیبانی چگونه است؟',
        a: 'پشتیبانی آنلاین از شنبه تا پنج‌شنبه، ساعت ۹ صبح تا ۶ عصر فعال است. در روزهای تعطیل می‌توانید پیام واتساپ بگذارید.',
      },
      {
        q: 'آیا فروشگاه حضوری دارید؟',
        a: 'بله، فروشگاه ما در تهران، خیابان ولیعصر واقع شده و از شنبه تا پنج‌شنبه، ۹ صبح تا ۸ شب پذیرای شماست.',
      },
      {
        q: 'چگونه از تخفیف‌ها باخبر شوم؟',
        a: 'با عضویت در خبرنامه ما از طریق وارد کردن ایمیل در فوتر سایت، از تخفیف‌های ویژه و حراج‌ها مطلع می‌شوید. همچنین ما را در اینستاگرام دنبال کنید.',
      },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">سوالات متداول</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          پاسخ سوالات رایج درباره خرید، ارسال، گارانتی و خدمات ابزارسازان را در اینجا بیابید.
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="grid gap-8">
        {faqCategories.map((category) => (
          <Card key={category.id} className="border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-heading font-bold">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`}>
                    <AccordionTrigger className="text-start hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Still have questions */}
      <Card className="mt-12 border-border bg-primary/5">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-heading font-bold mb-2">هنوز سوالی دارید؟</h3>
          <p className="text-muted-foreground mb-4">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
              تماس با ما ←
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQPage;
