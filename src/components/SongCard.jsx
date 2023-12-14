import React from "react";

export default function SongCard({ data }) {
    const {band, album, imageUrl} = data

    return (
        <div className="flex">
            <img className="w-10 h-10" src={imageUrl} />
            <div>
                <div>SONG</div>
                <div>{band}</div>
            </div>
            <div>{album}</div>
            <div>DATE ADDED</div>
            <div>DURATION</div>
        </div>
    );
}