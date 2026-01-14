export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Breadcrumbs Skeleton */}
        <div className="flex items-center mb-8 space-x-2">
          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
          <span className="text-gray-300">/</span>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
          <span className="text-gray-300">/</span>
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Left Column: Image Area Skeleton */}
            <div className="relative h-[50vh] md:h-auto bg-white p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="w-full h-64 md:h-96 bg-gray-100 rounded-xl animate-pulse"></div>
            </div>
            
            {/* Right Column: Product Info Skeleton */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
              
              {/* Category Badge */}
              <div className="h-6 w-24 bg-blue-50 rounded-full animate-pulse mb-6"></div>

              {/* Title */}
              <div className="space-y-3 mb-6">
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-2/3 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-5 w-32 bg-gray-100 rounded animate-pulse"></div>
                <div className="h-5 w-24 bg-gray-100 rounded animate-pulse"></div>
              </div>

              {/* Price */}
              <div className="h-12 w-40 bg-gray-200 rounded animate-pulse mb-8"></div>

              {/* Description Lines */}
              <div className="space-y-3 mb-10">
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse"></div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto mb-8">
                <div className="h-14 flex-1 bg-slate-100 rounded-xl animate-pulse"></div>
                <div className="h-14 flex-1 bg-gray-100 rounded-xl animate-pulse"></div>
              </div>
              
              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}