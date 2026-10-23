import React from 'react';
import GymCard from './GymCard';
const getLibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}
const Library = async () => {
    const libraryData = await getLibrary();
    // console.log(LibraryData);
    return (
        <div className="min-h-screen bg-[#090a0c] px-4 py-6">

            <div className="container mx-auto w-full max-w-[1240px]">

                <div className="mb-5">
                    <h1 className="text-[30px] font-extrabold uppercase leading-none tracking-tight text-white">
                        THE LIBRARY
                    </h1>

                    <p className="mt-1 text-[14px] font-medium tracking-[0.01em] text-[#686b72]">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="grid h-367 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {libraryData.map(( gym, ind ) => {
                        return <GymCard key={ind} gym={gym} />
                    }

                    )}
                </div>
            </div>
        </div>
    );
};

export default Library;