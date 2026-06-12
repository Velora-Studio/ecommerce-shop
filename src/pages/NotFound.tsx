import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-8xl font-bold text-primary mb-4">۴۰۴</h1>
        <h2 className="font-heading text-3xl font-bold tracking-wide mb-4">صفحه پیدا نشد</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="h-4 w-4 ml-2" />
              صفحه اصلی
            </Link>
          </Button>
          <Button asChild>
            <Link to="/products">
              مشاهده محصولات
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;