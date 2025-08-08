

export default function Contact(props) {
    console.log(typeof props.country)
    return(
        <article className='contact'>
            <div className='main-img-container'>
                <img className='main-img' src={props.img} alt={props.imgAlt} />
            </div>
            <h3>{props.location}</h3>
            <div className='info-group'>
                <img className="marker" src='/src/assets/marker.jpg' alt='location icon' />
                <span>{props.country}</span>
            </div>
        </article>
    )
}