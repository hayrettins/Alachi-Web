import OptimizedImage from '@/components/OptimizedImage';

export default function TestImagesPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl mb-8">Image System Test</h1>

            <h2 className="text-xl mb-4">Hero Image (Priority)</h2>
            <OptimizedImage
                src="hero-home.jpg"
                alt="Test hero"
                className="w-full h-96 mb-8 rounded-lg"
                priority={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl mb-4">Standard Room</h2>
                    <OptimizedImage
                        src="rooms/standard-ground-1.jpg"
                        alt="Test room"
                        className="w-full h-64 rounded-lg"
                    />
                </div>
                <div>
                    <h2 className="text-xl mb-4">Turkish Bath</h2>
                    <OptimizedImage
                        src="amenities/hamam.jpg"
                        alt="Turkish Bath"
                        className="w-full h-64 rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}
