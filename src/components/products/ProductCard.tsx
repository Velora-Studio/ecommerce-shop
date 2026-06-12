import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product, formatPrice } from '@/lib/data';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Badges */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
        {discount > 0 && (
          <Badge className="bg-destructive text-destructive-foreground font-bold">
            {discount}٪-
          </Badge>
        )}
        {product.tags.includes('bestseller') && (
          <Badge className="bg-workshop-warning text-primary-foreground font-bold">
            پرفروش
          </Badge>
        )}
        {product.tags.includes('new') && (
          <Badge className="bg-green-600 text-white font-bold">
            جدید
          </Badge>
        )}
      </div>

      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block aspect-square overflow-hidden bg-secondary">
        {!imageLoaded && (
          <div className="w-full h-full animate-pulse bg-muted" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {product.brand}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-medium text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-workshop-warning text-workshop-warning'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price & Add to cart */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="font-heading text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="block text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button
            variant="default"
            size="icon"
            onClick={() => addToCart(product)}
            className="shrink-0"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>

        {/* Stock status */}
        {!product.inStock && (
          <p className="text-xs text-destructive mt-2">ناموجود</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;