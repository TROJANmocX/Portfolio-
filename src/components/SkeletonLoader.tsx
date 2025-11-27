import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div className="py-20 container mx-auto px-4">
            {/* Header Skeleton */}
            <div className="flex flex-col items-center mb-16">
                <div className="w-48 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-4"></div>
                <div className="w-24 h-1 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-6"></div>
                <div className="w-full max-w-2xl h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white dark:bg-[#111] border-2 border-gray-200 dark:border-white/10 rounded-2xl p-6 h-96 flex flex-col">
                        <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-6"></div>
                        <div className="w-3/4 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4"></div>
                        <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
                        <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
                        <div className="w-2/3 h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-6"></div>
                        <div className="mt-auto flex gap-2">
                            <div className="w-20 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                            <div className="w-20 h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoader;
