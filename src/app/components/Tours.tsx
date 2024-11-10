import React from 'react';
import Image from 'next/image';

const Tours = () => {
  return (
    <section className="tours">
        <div className="row">
            <div className="col content-col">
                <h1>UPCOMING TOURS & DESTINATION</h1>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In soluta consequuntur provident odit dolorem voluptas dignissimos, molestiae numquam adipisci fugiat ipsa perferendis nostrum itaque possimus quidem illo at quod! Saepe.</p>
                <a href="#" className="ctn">Learn More</a>
            </div>
            <div className="col image-col">
                <div className="img-gallery">
                    <Image className="img" src="/img5.png" alt="" height={200} width={100}/>
                    <Image className="img" src="/img4.png" alt="" height={200} width={100}/>
                    <Image className="img" src="/img3.png" alt="" height={200} width={100}/>
                    <Image className="img" src="/img6.png" alt="" height={200} width={100}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tours