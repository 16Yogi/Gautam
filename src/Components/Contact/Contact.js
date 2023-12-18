import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='container-fluid py-5'>
                <div className='container py-5'>
                    <div className='col py-3 p-0'>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <form>
                                <div class="form-group">
                                    <label for="">Your Name</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                                <div className='row'>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label for="">Mobile Number</label>
                                        <input type="text" class="form-control" id="" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Comment:</label>
                                    <textarea class="form-control" rows="5" id="comment"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 py-2">Submit</button>
                            </form>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='col'>
                                <h3>fdfkdkjh</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
