import React from 'react'
import { Link } from "gatsby"
import Title from "../globals/Title"

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title
                    title="We will get back to you shortly"
                />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">In the meantime, please keep enjoyng navigating our site and let us know if there is anything else that we can help with.</p>
                        <Link
                            to="/"
                        >
                            <button className="btn text-uppercase btn-yellow">Home Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
