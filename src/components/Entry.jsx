export default function Entry({entry}) {
    return(
        <article className="journal-entry">
            <div className='main-img-container'>
                <img className='main-img' src={entry.img.url} alt={entry.img.alt} />
            </div>
            <div>
                <img className='marker' src='/src/assets/marker.jpg' alt='location icon' />
                <span className='country'>{entry.country}</span>
                <a href={entry.googleMaps}>View on Google Maps</a>

                <section className='main-description'>
                    <h2>{entry.place}</h2>
                    <p className='date'>{entry.date}</p>
                    <p className='description'>{entry.description}</p>
                </section>
            </div>
        </article>
    )   
}