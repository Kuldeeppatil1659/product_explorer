export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>

      {/* Search Bar Skeleton */}
      <div className="h-12 w-full bg-gray-200 rounded animate-pulse mb-8"></div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
            <div className="h-48 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
