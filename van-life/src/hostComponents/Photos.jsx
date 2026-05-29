import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Photos() {

    const { vansData } = useOutletContext()

    return (
        <section className="host-van-photos">

            <img
                src={vansData.imageUrl}
                alt={`Photo of ${vansData.name}`}
            />

        </section>
    )
}