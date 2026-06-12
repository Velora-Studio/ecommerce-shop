import { useState } from 'react';
import { Package, Store, Truck, Home, Search, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TrackingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'pending';
  time?: string;
}

const TrackingPage = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [trackingResult, setTrackingResult] = useState<TrackingStep[] | null>(null);

  const handleTrack = () => {
    if (!trackingCode.trim()) return;
    
    setIsTracking(true);
    
    // Simulate tracking result
    setTimeout(() => {
      setTrackingResult([
        {
          id: 1,
          title: 'سفارش ثبت شد',
          description: 'سفارش شما در فروشگاه ثبت و تایید شد',
          icon: <Store className="h-6 w-6" />,
          status: 'completed',
          time: '۱۴۰۳/۰۹/۱۵ - ۱۰:۳۰'
        },
        {
          id: 2,
          title: 'آماده‌سازی سفارش',
          description: 'سفارش شما در حال بسته‌بندی است',
          icon: <Package className="h-6 w-6" />,
          status: 'completed',
          time: '۱۴۰۳/۰۹/۱۵ - ۱۴:۰۰'
        },
        {
          id: 3,
          title: 'تحویل به پیک',
          description: 'بسته شما به پیک تحویل داده شد',
          icon: <Truck className="h-6 w-6" />,
          status: 'current',
          time: '۱۴۰۳/۰۹/۱۶ - ۰۹:۱۵'
        },
        {
          id: 4,
          title: 'در مسیر ارسال',
          description: 'پیک در حال حرکت به سمت آدرس شماست',
          icon: <MapPin className="h-6 w-6" />,
          status: 'pending'
        },
        {
          id: 5,
          title: 'تحویل به مشتری',
          description: 'سفارش به دست شما رسید',
          icon: <Home className="h-6 w-6" />,
          status: 'pending'
        }
      ]);
      setIsTracking(false);
    }, 1500);
  };

  const getStepStyles = (status: TrackingStep['status']) => {
    switch (status) {
      case 'completed':
        return {
          bg: 'bg-primary',
          text: 'text-primary-foreground',
          line: 'bg-primary',
          badge: 'bg-primary/10 text-primary'
        };
      case 'current':
        return {
          bg: 'bg-amber-500',
          text: 'text-white',
          line: 'bg-border',
          badge: 'bg-amber-500/10 text-amber-600'
        };
      case 'pending':
        return {
          bg: 'bg-muted',
          text: 'text-muted-foreground',
          line: 'bg-border',
          badge: 'bg-muted text-muted-foreground'
        };
    }
  };

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">پیگیری سفارش</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          با وارد کردن کد پیگیری، وضعیت سفارش خود را مشاهده کنید
        </p>
      </div>

      {/* Tracking Code Input */}
      <Card className="max-w-xl mx-auto mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            کد پیگیری را وارد کنید
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="مثال: ORD-123456789"
              className="flex-1 text-left"
              dir="ltr"
              onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
            />
            <Button onClick={handleTrack} disabled={isTracking || !trackingCode.trim()}>
              {isTracking ? (
                <Clock className="h-4 w-4 animate-spin" />
              ) : (
                'پیگیری'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tracking Result */}
      {trackingResult && (
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>وضعیت سفارش</span>
              <span className="text-sm font-normal text-muted-foreground" dir="ltr">
                {trackingCode}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Visual Journey Route */}
            <div className="relative">
              {trackingResult.map((step, index) => {
                const styles = getStepStyles(step.status);
                const isLast = index === trackingResult.length - 1;

                return (
                  <div key={step.id} className="flex gap-4 relative">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${styles.bg} ${styles.text} transition-all duration-300`}>
                        {step.status === 'completed' ? (
                          <CheckCircle2 className="h-6 w-6" />
                        ) : (
                          step.icon
                        )}
                      </div>
                      {!isLast && (
                        <div className={`w-1 flex-1 min-h-[60px] ${styles.line} transition-all duration-300`} />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pb-8 ${isLast ? 'pb-0' : ''}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                        {step.time && (
                          <span className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${styles.badge}`}>
                            {step.time}
                          </span>
                        )}
                      </div>
                      {step.status === 'current' && (
                        <div className="mt-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                          <p className="text-sm text-amber-700 dark:text-amber-400 flex items-center gap-2">
                            <Truck className="h-4 w-4 animate-pulse" />
                            سفارش شما در این مرحله قرار دارد
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Route Summary */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-semibold mb-4 text-center">مسیر ارسال</h4>
              <div className="flex items-center justify-between max-w-md mx-auto">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Store className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">فروشگاه</span>
                </div>
                
                <div className="flex-1 h-1 bg-gradient-to-l from-amber-500 via-primary to-primary mx-2 rounded-full relative">
                  <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-3 h-3 bg-amber-500 rounded-full animate-pulse shadow-lg shadow-amber-500/50" />
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Truck className="h-7 w-7 text-amber-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">پیک</span>
                </div>
                
                <div className="flex-1 h-1 bg-muted mx-2 rounded-full" />
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <Home className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">مشتری</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TrackingPage;
