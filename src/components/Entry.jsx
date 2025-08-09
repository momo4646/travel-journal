export default function Entry({place, country, date, description, img, googleMaps}) {
    return(
        <article className="journal-entry">
            <div className='main-img-container'>
                <img className='main-img' src={img.url} alt={img.alt} />
            </div>
            <div>
                <img className='marker' src='/src/assets/marker.jpg' alt='location icon' />
                <span className='country'>{country}</span>
                <a href={googleMaps}>View on Google Maps</a>

                <section className='main-description'>
                    <h2>{place}</h2>
                    <p className='date'>{date}</p>
                    <p className='description'>{description}</p>
                </section>
            </div>
        </article>
    )   
}