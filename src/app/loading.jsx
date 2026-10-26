import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#090a0c] text-white">

            {/* Animated Spinner */}
            <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border-4 border-gray-700 border-t-emerald-400 animate-spin"></div>

                <div className="absolute h-8 w-8 rounded-full bg-emerald-400/10"></div>
            </div>

            {/* Loading Text */}
            <h2 className="mt-6 text-xl font-semibold tracking-wide">
                Loading FitLog
            </h2>

            <p className="mt-2 text-sm text-gray-400">
                Getting everything ready for you...
            </p>

            {/* Animated Dots */}
            <div className="mt-4 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0ms]"></span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]"></span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]"></span>
            </div>

        </div>
    );
};

export default Loading;