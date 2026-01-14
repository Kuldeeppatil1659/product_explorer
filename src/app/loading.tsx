export default function Loading() {
  return (
    <div className="container mx-auto p-4 py-8">
      {/* Search Header Skeleton */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="h-12 w-full md:max-w-md bg-gray-200 rounded-xl animate-pulse"></div>
        <div className="h-12 w-full md:w-48 bg-gray-200 rounded-xl animate-pulse"></div>
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden">
            
            {/* Image Area Skeleton */}
            <div className="relative h-64 w-full bg-gray-100 p-8 flex items-center justify-center">
              <div className="h-40 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            {/* Content Area Skeleton */}
            <div className="p-5 flex flex-col flex-grow bg-gray-50/50">
              {/* Category Badge */}
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse mb-3"></div>
              
              {/* Title (2 lines) */}
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
              </div>
              
              {/* Bottom Row: Price & Rating */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}