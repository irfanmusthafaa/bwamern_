import React from 'react'
import { Fade } from "react-awesome-reveal";
import TestimonyAccent from 'assets/images/testimonial-landingpages-frame.jpg'
import Star from 'elements/Star'
import Button from 'elements/Button'

export default function Testimony({ data }) {
    return (
        <section className="container">
            <Fade>
            <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 60}}>
                    <div className="testimonial-hero" style={{ margin: `30px 0 0 30px`}}>

                    <img src={TestimonyAccent} alt="Testimonial frame" className="position-absolute" style={{ margin: `-30px 0 0 -30px` }} />
                        <img src={data.imageUrl} alt="Testimonial" className="position-absolute" style={{ zindex: 1 }} />
                       
                    </div>
                </div>

                <div className="col">
                    <h4 style={{ marginButton: 40}}>{data.name}</h4>
                    <Star value={data.rate} width={35} height={35} spacing={4} />
                    <h5 className="h2 font-weight-light line-height my-3">
                        {data.content}
                    </h5>
                    <span className="text=gray-500">
                        {data.familyName}, {data.familyOccupation}
                    </span>

                    <div>
                        <Button className="btn px-5" style={{ marginTop: 40}} hasShadow isPrimary type="link" href={'/testimonial/${data.id}'}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
                
            </div>
            </Fade>
        </section>
    )
}
