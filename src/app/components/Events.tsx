import React from 'react';
import Image from 'next/image';

const Events = () => {
  return (
    <section className="events">
        <div className="title">
            <h1>Upcoming Events</h1>
            <div className="line"></div>
        </div>
        <div className="row">
            <div className="col">
                <Image src="/img1.png" alt="img" height={300} width={400}/>
                <h4>Everest Camp Trek</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perferendis maiores doloribus obcaecati rerum ipsam.</p>
                <a href="#" className="ctn">Learn More</a>
            </div>
            <div className="col">
                <Image className="img" src="/img2.png" alt="img" height={300} width={400}/>
                <h4>Waliking Holidays</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perferendis maiores doloribus obcaecati rerum ipsam.</p>
                <a href="#" className="ctn">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Events