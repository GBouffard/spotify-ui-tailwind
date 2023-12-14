import React from "react";

export default function SongCard({ data }) {
    const {band, album, imageUrl, imageAlt} = data

    return (
        <div>
            <div>{band} - {album}</div>
            <img src={imageUrl} alt={imageAlt} />
        </div>
    );
}