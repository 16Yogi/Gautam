import React from 'react'
import './Banner.css'
export default function Banner() {
    return (
        <>
            <div className='container-fluid p-0' id='banner-cf'>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner text-center">
                        <div class="carousel-item active" id='bn-img'>
                            <div className='container'>
                                <div className='col'>
                                    <h3>Sparks dance</h3>
                                    <p>An electrician, a wizard of wires, navigates the currents, bringing illumination where darkness once reigned, power where there was none. They are the silent heroes, the architects of light, ensuring our spaces hum with energy, safety, and possibility. With their expertise, they stitch together the invisible threads that power our lives, illuminating our homes, charging our devices, and connecting us to the pulse of innovation. Their skill sparks a brighter, safer future in a world powered by their expertise.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" id='bn-img'>
                            <div className='container'>
                                <div className='col'>
                                    <h3>Sparks dance</h3>
                                    <p>An electrician, a wizard of wires, navigates the currents, bringing illumination where darkness once reigned, power where there was none. They are the silent heroes, the architects of light, ensuring our spaces hum with energy, safety, and possibility. With their expertise, they stitch together the invisible threads that power our lives, illuminating our homes, charging our devices, and connecting us to the pulse of innovation. Their skill sparks a brighter, safer future in a world powered by their expertise.</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" id='bn-img'>
                            <div className='container'>
                                <div className='col'>
                                    <h3>Sparks dance</h3>
                                    <p>An electrician, a wizard of wires, navigates the currents, bringing illumination where darkness once reigned, power where there was none</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}
