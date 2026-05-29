import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Details() {

    const { vansData } = useOutletContext()

    return (
        <section className="host-van-details">

            <p>
                <span>Name:</span> {vansData.name}
            </p>

            <p>
                <span>Category:</span> {vansData.type}
            </p>

            <p>
                <span>Description:</span> {vansData.description}
            </p>

            <p>
                <span>Visibility:</span> Public
            </p>

        </section>
    )
}