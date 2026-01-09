'use client';

import { useState } from 'react';

// Import manifest (empty initially, populated after first build)
let imageManifest: Record<string, any> = {};
try {
    imageManifest = require('@/public/images/image-manifest.json');
} catch {
    // Manifest doesn't exist yet
}

interface OptimizedImageProps {
    src: string;              // Relative path from source folder (e.g., "rooms/deluxe.jpg")
    alt: string;              // Required for accessibility
    width?: number;           // Intrinsic width
    height?: number;          // Intrinsic height
    priority?: boolean;       // Load immediately (for above-fold images)
    className?: string;       // Tailwind/CSS classes
    objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    className = '',
    objectFit = 'cover'
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const imageData = imageManifest[src];

    // Fallback if image not in manifest
    if (!imageData) {
        return (
            <img
                src={`/images/source/${src}`}
                alt={alt}
                className={className}
                style={{ objectFit }}
                loading={priority ? 'eager' : 'lazy'}
                onError={() => setHasError(true)}
            />
        );
    }

    // Error state
    if (hasError) {
        return (
            <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
                <span className="text-gray-500 text-sm">Image unavailable</span>
            </div>
        );
    }

    return (
        <div
            className={`relative overflow-hidden ${className}`}
        >
            <picture>
                {/* AVIF (best compression, modern browsers) */}
                <source srcSet={imageData.avif} type="image/avif" />

                {/* WebP (wide browser support) */}
                <source srcSet={imageData.webp} type="image/webp" />

                {/* Original fallback (JPEG/PNG) */}
                <img
                    src={imageData.original}
                    alt={alt}
                    width={width || imageData.width}
                    height={height || imageData.height}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    style={{
                        objectFit,
                        width: '100%',
                        height: '100%',
                        transition: priority ? 'none' : 'opacity 0.3s ease-in-out',
                        opacity: (priority || isLoaded) ? 1 : 0
                    }}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                />
            </picture>
        </div>
    );
}
