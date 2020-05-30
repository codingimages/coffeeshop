import React from 'react'
import { Link } from "gatsby"
import Title from "../globals/Title"

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title
                    title="Our Story"
                />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est dolor nemo corporis doloremque excepturi nulla sed, consectetur beatae nesciunt labore incidunt optio, ratione illo explicabo! Explicabo iste cupiditate obcaecati eos nam, asperiores ea quo, magnam est eaque fuga possimus facere architecto inventore enim ducimus reprehenderit in molestiae voluptates illo.</p>
                        <Link
                            to="/about"
                        >
                            <button className="btn text-uppercase btn-yellow">About Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
