import React from "react";

export default function PlaylistCard({ data }) {
    const {name, imageUrl, creator} = data

    return (
        <div>
            <img className="w-12 h-12" src={imageUrl} />
            <div>{name} - {creator}</div>
        </div>
    );
}