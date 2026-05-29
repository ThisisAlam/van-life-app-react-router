import React from "react"
import { useOutletContext } from "react-router-dom"

export default function Pricing() {

    const { vansData } = useOutletContext()

    return (
        <section className="host-van-pricing">

            <h2>
                ${vansData.price}
                <span>/day</span>
            </h2>

        </section>
    )
}