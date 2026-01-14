export default function Loading() {
  return (
    <div className="container mx-auto p-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column: Image Skeleton */}
        <div className="h-96 w-full bg-gray-200 rounded-xl animate-pulse border-gray-100 border"></div>

        {/* Right Column: Text Details Skeleton */}
        <div className="space-y-6">
          {/* Category Badge */}
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>

          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse"></div>

          {/* Description Block */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Price */}
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>

          {/* Button */}
          <div className="h-12 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
