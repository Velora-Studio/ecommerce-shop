export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  brand: string;
  description: string;
  specifications: Record<string, string>;
  features: string[];
  tags: string[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentCategory: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  subcategories: Subcategory[];
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

// Power Tools Subcategories
const powerToolsSubcategories: Subcategory[] = [
  {
    id: "cordless",
    name: "ابزار شارژی",
    slug: "cordless",
    description: "ابزارهای بی‌سیم و شارژی با باتری لیتیوم-یون",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
    parentCategory: "power-tools",
  },
  {
    id: "corded",
    name: "ابزار برقی",
    slug: "corded",
    description: "ابزارهای برقی سیمی با قدرت بالا",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600",
    parentCategory: "power-tools",
  },
];

export const categories: Category[] = [
  {
    id: "1",
    name: "ابزار برقی",
    slug: "power-tools",
    description: "ابزار برقی با کارایی بالا برای کاربردهای سنگین",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
    productCount: 189,
    subcategories: powerToolsSubcategories,
  },
  {
    id: "2",
    name: "ابزار شارژی",
    slug: "cordless-tools",
    description: "ابزارهای بی‌سیم و شارژی با باتری لیتیوم-یون",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
    productCount: 156,
    subcategories: [],
  },
  {
    id: "3",
    name: "ابزار اندازه‌گیری",
    slug: "measuring-tools",
    description: "ابزارهای دقیق اندازه‌گیری و کنترل کیفیت",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    productCount: 98,
    subcategories: [],
  },
  {
    id: "4",
    name: "ابزار دستی",
    slug: "hand-tools",
    description: "ابزار دستی با کیفیت برتر برای صنعتگران حرفه‌ای",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600",
    productCount: 245,
    subcategories: [
      { id: "wrenches", name: "آچار", slug: "wrenches", description: "انواع آچار", image: "", parentCategory: "hand-tools" },
      { id: "screwdrivers", name: "پیچ‌گوشتی", slug: "screwdrivers", description: "انواع پیچ‌گوشتی", image: "", parentCategory: "hand-tools" },
      { id: "pliers", name: "انبردست", slug: "pliers", description: "انواع انبردست", image: "", parentCategory: "hand-tools" },
      { id: "hammers", name: "چکش", slug: "hammers", description: "انواع چکش", image: "", parentCategory: "hand-tools" },
    ],
  },
  {
    id: "5",
    name: "تجهیزات",
    slug: "equipment",
    description: "تجهیزات صنعتی و کارگاهی حرفه‌ای",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
    productCount: 178,
    subcategories: [
      { id: "welding", name: "جوشکاری", slug: "welding", description: "تجهیزات جوشکاری", image: "", parentCategory: "equipment" },
      { id: "pneumatic", name: "پنوماتیک", slug: "pneumatic", description: "ابزار بادی", image: "", parentCategory: "equipment" },
      { id: "hydraulic", name: "هیدرولیک", slug: "hydraulic", description: "تجهیزات هیدرولیکی", image: "", parentCategory: "equipment" },
    ],
  },
  {
    id: "6",
    name: "باتری و شارژر",
    slug: "batteries-chargers",
    description: "باتری‌ها و شارژرهای ابزار شارژی",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600",
    productCount: 67,
    subcategories: [],
  },
  {
    id: "7",
    name: "برندها",
    slug: "brands",
    description: "محصولات بر اساس برندهای معتبر",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600",
    productCount: 450,
    subcategories: [],
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "دریل شارژی حرفه‌ای ۲۰ ولت",
    slug: "professional-20v-max-cordless-drill",
    category: "power-tools",
    subcategory: "cordless",
    price: 4500000,
    originalPrice: 5900000,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600",
    ],
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    stockCount: 45,
    brand: "پروفورس",
    description: "دریل شارژی حرفه‌ای ۲۰ ولت با موتور بدون ذغال و کارایی عالی. دارای دو سرعته برای کاربردهای مختلف سوراخ‌کاری و پیچ‌کاری.",
    specifications: {
      "ولتاژ": "۲۰ ولت",
      "سه‌نظام": "۱/۲ اینچ",
      "سرعت": "۰-۵۵۰ / ۰-۲۰۰۰ دور",
      "گشتاور": "۷۰ نیوتن‌متر",
      "باتری": "لیتیوم-یون ۵ آمپر",
      "وزن": "۱.۶ کیلوگرم",
    },
    features: [
      "موتور بدون ذغال برای عمر بیشتر",
      "چراغ LED کاری",
      "سه‌نظام فلزی ۱/۲ اینچ",
      "گیره کمربند",
    ],
    tags: ["bestseller", "featured"],
  },
  {
    id: "2",
    name: "اره گردبر صنعتی ۱۸۵ میلی‌متری",
    slug: "heavy-duty-circular-saw",
    category: "power-tools",
    subcategory: "corded",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600",
    images: [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600",
    ],
    rating: 4.6,
    reviewCount: 186,
    inStock: true,
    stockCount: 28,
    brand: "پروفورس",
    description: "اره گردبر صنعتی با موتور قدرتمند ۱۵ آمپر برای برش‌های سنگین. بدنه منیزیمی برای استحکام و وزن کمتر.",
    specifications: {
      "موتور": "۱۵ آمپر",
      "قطر تیغه": "۱۸۵ میلی‌متر",
      "سرعت": "۵,۸۰۰ دور در دقیقه",
      "زاویه": "۰-۵۶ درجه",
      "عمق برش": "۶۲ میلی‌متر در ۹۰ درجه",
      "وزن": "۴ کیلوگرم",
    },
    features: [
      "ترمز الکترونیکی برای توقف سریع",
      "دمنده گرد و غبار",
      "قفل اسپیندل برای تعویض آسان تیغه",
    ],
    tags: ["featured"],
  },
  {
    id: "3",
    name: "ست آچار حرفه‌ای ۲۴ پارچه",
    slug: "24-piece-professional-wrench-set",
    category: "hand-tools",
    subcategory: "wrenches",
    price: 3100000,
    originalPrice: 4000000,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600",
    images: [
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600",
    ],
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    stockCount: 62,
    brand: "آیرون‌گریپ",
    description: "ست کامل آچار حرفه‌ای با ساخت فولاد کروم وانادیوم. شامل سایزهای متریک و اینچی در کیف حمل مقاوم.",
    specifications: {
      "جنس": "فولاد کروم وانادیوم",
      "پوشش": "کروم آینه‌ای",
      "سایزهای متریک": "۸ تا ۲۴ میلی‌متر",
      "سایزهای اینچی": "۵/۱۶ تا ۱ اینچ",
      "کیف": "پلاستیک فشرده",
    },
    features: [
      "گارانتی مادام‌العمر",
      "طراحی ۱۲ پر",
      "فشار خارج از مرکز برای کاهش لیس‌خوردن",
      "کیف حمل منظم",
    ],
    tags: ["bestseller", "sale"],
  },
  {
    id: "4",
    name: "دستگاه جوش MIG صنعتی ۲۰۰ آمپر",
    slug: "industrial-mig-welder-200a",
    category: "industrial-tools",
    subcategory: "welding",
    price: 20000000,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600",
    ],
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockCount: 12,
    brand: "ولدمستر",
    description: "دستگاه جوش MIG حرفه‌ای با فناوری سینرژیک برای تنظیم آسان. قابلیت جوشکاری فولاد، استیل و آلومینیوم با کیفیت بالا.",
    specifications: {
      "محدوده آمپراژ": "۳۰-۲۰۰ آمپر",
      "ولتاژ ورودی": "۲۲۰ ولت تک‌فاز",
      "سیکل کار": "۶۰٪ در ۲۰۰ آمپر",
      "سرعت سیم": "۵۰-۵۰۰ اینچ در دقیقه",
      "وزن": "۳۱ کیلوگرم",
    },
    features: [
      "کنترل سینرژیک تک‌دکمه",
      "نمایشگر دیجیتال",
      "آماده اتصال تفنگ اسپول",
      "حفاظت حرارتی",
    ],
    tags: ["featured", "professional"],
  },
  {
    id: "5",
    name: "ست آچار تورک دیجیتال",
    slug: "precision-torque-wrench-set",
    category: "hand-tools",
    subcategory: "wrenches",
    price: 4700000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    ],
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    stockCount: 34,
    brand: "تورک‌پرو",
    description: "آچار تورک دقیق برای کاربردهای حساس. شامل سه سایز ۱/۴، ۳/۸ و ۱/۲ اینچ با گواهی کالیبراسیون.",
    specifications: {
      "دقت": "±۳٪",
      "سایز درایو": "۱/۴، ۳/۸، ۱/۲ اینچ",
      "محدوده": "۲۷ تا ۲۰۳ نیوتن‌متر",
      "مکانیزم": "کلیکی",
      "استاندارد": "ISO 6789",
    },
    features: [
      "شامل گواهی کالیبراسیون",
      "سر جغجغه قابل برگشت",
      "نمایش دوگانه (فوت‌پوند و نیوتن‌متر)",
      "کیف نگهداری",
    ],
    tags: ["professional"],
  },
  {
    id: "6",
    name: "بکس شارژی ۱/۲ اینچ حرفه‌ای",
    slug: "half-inch-impact-wrench-kit",
    category: "power-tools",
    subcategory: "cordless",
    price: 6600000,
    originalPrice: 8300000,
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600",
    images: [
      "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600",
    ],
    rating: 4.9,
    reviewCount: 256,
    inStock: true,
    stockCount: 19,
    brand: "پروفورس",
    description: "بکس شارژی پرقدرت با گشتاور ۱۶۰۰ نیوتن‌متر. ایده‌آل برای کاربردهای خودرویی و ساختمانی.",
    specifications: {
      "حداکثر گشتاور": "۱۶۰۰ نیوتن‌متر",
      "ولتاژ": "۲۰ ولت",
      "سرعت": "۰-۲,۴۰۰ دور",
      "ضربه": "۰-۲,۸۰۰ در دقیقه",
      "درایو": "۱/۲ اینچ",
      "وزن": "۲.۸ کیلوگرم",
    },
    features: [
      "سلکتور ۳ سرعته",
      "چراغ LED با تأخیر",
      "شامل ۲ عدد باتری ۵ آمپر",
      "روکش محافظ",
    ],
    tags: ["bestseller", "sale"],
  },
  {
    id: "7",
    name: "سنگ‌فرز بادی صنعتی",
    slug: "pneumatic-angle-grinder",
    category: "industrial-tools",
    subcategory: "pneumatic",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
    images: [],
    rating: 4.5,
    reviewCount: 78,
    inStock: true,
    stockCount: 24,
    brand: "ایرپاور",
    description: "سنگ‌فرز بادی صنعتی برای سنگ‌زنی و برش سنگین. بدنه کامپوزیت برای کاهش وزن.",
    specifications: {
      "سایز دیسک": "۱۱۵ میلی‌متر",
      "سرعت": "۱۱,۰۰۰ دور در دقیقه",
      "مصرف هوا": "۱۷۰ لیتر در دقیقه",
      "ورودی هوا": "۱/۴ اینچ NPT",
      "وزن": "۱.۳ کیلوگرم",
    },
    features: [
      "اهرم ایمنی",
      "گارد قابل تنظیم",
      "تنظیم سرعت داخلی",
    ],
    tags: [],
  },
  {
    id: "8",
    name: "کولیس دیجیتال دقیق",
    slug: "digital-caliper-set",
    category: "hand-tools",
    subcategory: "measuring",
    price: 1900000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: [],
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    stockCount: 87,
    brand: "پرسیژن‌مکس",
    description: "کولیس دیجیتال با ساخت استیل ضد زنگ. دارای نمایشگر LCD بزرگ و پورت خروجی داده برای کاربردهای SPC.",
    specifications: {
      "محدوده": "۰-۱۵۰ میلی‌متر",
      "رزولوشن": "۰.۰۱ میلی‌متر",
      "دقت": "±۰.۰۲ میلی‌متر",
      "جنس": "استیل ضدزنگ سخت‌کاری شده",
      "نمایشگر": "LCD دیجیتال",
    },
    features: [
      "صفر در هر موقعیت",
      "تبدیل اینچ/میلی‌متر",
      "خاموشی خودکار",
      "پورت خروجی داده",
    ],
    tags: ["featured"],
  },
  {
    id: "9",
    name: "فرز برقی صنعتی ۸۵۰ وات",
    slug: "corded-angle-grinder-850w",
    category: "power-tools",
    subcategory: "corded",
    price: 2200000,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
    images: [],
    rating: 4.6,
    reviewCount: 145,
    inStock: true,
    stockCount: 56,
    brand: "پروفورس",
    description: "فرز برقی قدرتمند با موتور ۸۵۰ وات برای سنگ‌زنی، برش و پرداخت. مناسب استفاده حرفه‌ای.",
    specifications: {
      "توان": "۸۵۰ وات",
      "سایز دیسک": "۱۱۵ میلی‌متر",
      "سرعت": "۱۱,۰۰۰ دور در دقیقه",
      "وزن": "۱.۸ کیلوگرم",
    },
    features: [
      "دستگیره جانبی قابل تنظیم",
      "قفل اسپیندل",
      "سیستم خنک‌کننده پیشرفته",
    ],
    tags: ["featured"],
  },
  {
    id: "10",
    name: "پیچ‌گوشتی شارژی ۴ ولت",
    slug: "cordless-screwdriver-4v",
    category: "power-tools",
    subcategory: "cordless",
    price: 890000,
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600",
    images: [],
    rating: 4.5,
    reviewCount: 298,
    inStock: true,
    stockCount: 120,
    brand: "پروفورس",
    description: "پیچ‌گوشتی شارژی کوچک و کارآمد برای مونتاژ و کارهای سبک. باتری لیتیومی داخلی.",
    specifications: {
      "ولتاژ": "۴ ولت",
      "گشتاور": "۵ نیوتن‌متر",
      "سرعت": "۲۵۰ دور در دقیقه",
      "وزن": "۰.۳ کیلوگرم",
    },
    features: [
      "چراغ LED",
      "شارژر USB",
      "نشانگر باتری",
      "طراحی ارگونومیک",
    ],
    tags: ["bestseller"],
  },
  {
    id: "11",
    name: "تراز لیزری ۳۶۰ درجه",
    slug: "360-laser-level",
    category: "measuring-tools",
    subcategory: "levels",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    images: [],
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    stockCount: 25,
    brand: "پرسیژن‌مکس",
    description: "تراز لیزری حرفه‌ای با قابلیت تابش ۳۶۰ درجه. مناسب برای کارهای ساختمانی و نصب.",
    specifications: {
      "برد": "۳۰ متر",
      "دقت": "±۱ میلی‌متر در ۱۰ متر",
      "باتری": "لیتیوم-یون قابل شارژ",
    },
    features: [
      "تراز خودکار",
      "پایه مغناطیسی",
      "کیف حمل",
    ],
    tags: ["new", "featured"],
  },
  {
    id: "12",
    name: "دستگاه پولیش شارژی ۱۲ ولت",
    slug: "cordless-polisher-12v",
    category: "power-tools",
    subcategory: "cordless",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600",
    images: [],
    rating: 4.6,
    reviewCount: 56,
    inStock: true,
    stockCount: 18,
    brand: "پروفورس",
    description: "پولیش شارژی با سرعت متغیر برای پرداخت خودرو و سطوح مختلف.",
    specifications: {
      "ولتاژ": "۱۲ ولت",
      "سرعت": "۲۰۰۰-۴۵۰۰ دور",
      "قطر پد": "۱۲۵ میلی‌متر",
    },
    features: [
      "سرعت متغیر",
      "دستگیره ارگونومیک",
      "باتری ۲ آمپر",
    ],
    tags: ["new"],
  },
  {
    id: "13",
    name: "ست سوکت ۱۵۰ پارچه حرفه‌ای",
    slug: "150-piece-socket-set",
    category: "hand-tools",
    subcategory: "sockets",
    price: 5200000,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600",
    images: [],
    rating: 4.9,
    reviewCount: 134,
    inStock: true,
    stockCount: 22,
    brand: "آیرون‌گریپ",
    description: "ست کامل سوکت و بکس با کیفیت صنعتی شامل سایزهای متریک و اینچی.",
    specifications: {
      "تعداد قطعات": "۱۵۰ عدد",
      "جنس": "فولاد کروم وانادیوم",
      "درایوها": "۱/۴، ۳/۸، ۱/۲ اینچ",
    },
    features: [
      "کیف آلومینیومی",
      "گارانتی مادام‌العمر",
      "سر بیت‌های متنوع",
    ],
    tags: ["new", "bestseller"],
  },
  {
    id: "14",
    name: "باتری لیتیوم ۲۰ ولت ۶ آمپر",
    slug: "20v-6ah-battery",
    category: "batteries-chargers",
    subcategory: "batteries",
    price: 1800000,
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600",
    images: [],
    rating: 4.7,
    reviewCount: 210,
    inStock: true,
    stockCount: 65,
    brand: "پروفورس",
    description: "باتری پرظرفیت ۶ آمپر ساعت سازگار با تمام ابزارهای سری ۲۰ ولت.",
    specifications: {
      "ولتاژ": "۲۰ ولت",
      "ظرفیت": "۶ آمپر ساعت",
      "نوع سلول": "لیتیوم-یون",
    },
    features: [
      "نشانگر شارژ LED",
      "محافظت حرارتی",
      "سازگار با شارژر سریع",
    ],
    tags: ["new"],
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "محمد ر.",
    rating: 5,
    title: "بهترین دریل که تا حالا داشتم",
    comment: "این دریل قدرت فوق‌العاده‌ای دارد و عمر باتری باورنکردنی است. ۳ ماه است هر روز در کارگاه ازش استفاده می‌کنم.",
    date: "۱۴۰۳/۱۰/۲۵",
    verified: true,
    helpful: 24,
  },
  {
    id: "2",
    productId: "1",
    userName: "سارا ک.",
    rating: 4,
    title: "کیفیت عالی، کمی سنگین",
    comment: "کیفیت ساخت و عملکرد عالی است. تنها ایراد کوچکش وزن بالاست برای کار طولانی در ارتفاع.",
    date: "۱۴۰۳/۱۰/۲۰",
    verified: true,
    helpful: 12,
  },
  {
    id: "3",
    productId: "1",
    userName: "علی ب.",
    rating: 5,
    title: "ابزار حرفه‌ای واقعی",
    comment: "ارزش هر تومانش را دارد. موتور بدون ذغال تفاوت بزرگی در عمر باتری و قدرت ایجاد می‌کند.",
    date: "۱۴۰۳/۱۰/۱۸",
    verified: true,
    helpful: 18,
  },
];

export const brands = ["Milwaukee", "AEG"];

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(p => p.category === categorySlug);
};

export const getProductsBySubcategory = (categorySlug: string, subcategorySlug: string) => {
  return products.filter(p => p.category === categorySlug && p.subcategory === subcategorySlug);
};

export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.tags.includes("featured"));
};

export const getBestsellers = () => {
  return products.filter(p => p.tags.includes("bestseller"));
};

export const getNewestProducts = () => {
  return products.filter(p => p.tags.includes("new")).slice(0, 4);
};

export const getReviewsByProduct = (productId: string) => {
  return reviews.filter(r => r.productId === productId);
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(c => c.slug === slug);
};

export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(s => s.slug === subcategorySlug);
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
};