import React, { useState } from 'react';
import { Sun } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackSrc?: string;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Solar energy visual',
  className = '',
  fallbackText,
  fallbackSrc,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Update currentSrc if src prop changes
  React.useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !currentSrc) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 text-blue-900 p-4 ${className}`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
            <Sun className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-xs font-semibold text-blue-950 max-w-[200px] truncate">
            {fallbackText || alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-sky-50/80 animate-pulse flex items-center justify-center">
          <Sun className="w-6 h-6 text-blue-500/40 animate-spin" style={{ animationDuration: '6s' }} />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
