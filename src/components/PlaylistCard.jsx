import React from "react";

export default function PlaylistCard({ albumInfo }) {
    const {band, album, imageUrl, imageAlt} = albumInfo

    return (
        <div>
            <div>{band} - {album}</div>
            <img src={imageUrl} alt={imageAlt} />
        </div>
    );
}