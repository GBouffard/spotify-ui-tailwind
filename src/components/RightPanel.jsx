import React from "react";

const defaultData = {
    playlist: `Boubou's playlist`,
    band: 'Metallica',
    song: "Battery",
    imageUrl: '/img/m1.jpg',
    artistImage: '/img/abouttheartist.avif',
}

export default function Rightpanel({ data = defaultData }) {
    const {playlist, band, song, imageUrl, artistImage} = data

    return (
        <div className="bg-green-200 grow w-1/4 px-3">
            <div className="flex justify-between">
                <span>{playlist}</span>
                <span>+</span>
            </div>
            <img className="" src={imageUrl} />
            <div className="flex justify-between">
                <div>
                    <div>{song}</div>
                    <div>{band}</div>
                </div>
                <div className="flex items-center">+ +</div>
            </div>
            <div className="relative">
                <img className="" src={artistImage} />
                <div className="absolute top-2 left-3 text-white text-md tracking-wide">About the Artist</div>
            </div>
        </div>
    );
}