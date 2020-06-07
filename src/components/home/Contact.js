import React from 'react'
import Title from "../globals/Title"

export default function Contact() {
    return (
        <div className="contact py-5">
            <Title title="Contact Form" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/codingimages@outlook.com" method="POST">
                        {/* hidden redirect */}
                        <input type="hidden" name="_next" value="http://localhost:8000/thanks" />

                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className="form-control" id="name" placeholder="i.e. John Doe" />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" className="form-control" id="email" placeholder="i.e. email@email.com" />
                        </div>
                        {/* text area */}
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name="description" className="form-control" id="description" placeholder="Your comments here" row="10" />
                        </div>
                        <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
