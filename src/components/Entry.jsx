export default function Entry() {
    return(
        <article className="journal-entry">
            <div className='main-img-container'>
                <img className='main-img' src='/src/assets/mountain.png' alt='sunset by mount fuji' />
            </div>
            <div>
                <img className='marker' src='/src/assets/marker.jpg' alt='location icon' />
                <span className='country'>JAPAN</span>
                <a href='https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>View on Google Maps</a>

                <section className='main-description'>
                    <h2>Mount Fuji</h2>
                    <p className='date'>12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className='description'> Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet) the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </section>
            </div>
        </article>
    )   
}