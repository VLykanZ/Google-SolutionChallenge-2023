import '../../style/about.css'
import zebra from '../../assets/images/zebra.jpeg'

const About = () => {
    return (
            <body>
                <div className='site-container'>


                    <div className='article-container'>
                        <article className='article-card'>
                            <figure className='article-image'>
                                <img src={zebra} alt="" height={200}/>
                            </figure>
                            <div className="article-content">
                                <h3 className='card-title'>Thanachot Wongmetin</h3>
                                <p className="card-exerpt">Lorem ipsum dolor sit amet.</p>
                            </div>

                        </article>

                        <article className='article-card'>
                            <figure className='article-image'>
                                <img src={zebra} alt="" height={200}/>
                            </figure>
                            <div className="article-content">
                                <h3 className='card-title'>Suphawit Chomsomsa</h3>
                                <p className="card-exerpt">Lorem ipsum dolor sit amet.</p>
                            </div>

                        </article>
                        
                        <article className='article-card'>
                            <figure className='article-image'>
                                <img src={zebra} alt="" height={200}/>
                            </figure>
                            <div className="article-content">
                                <h3 className='card-title'>Erafan Madaehoh</h3>
                                <p className="card-exerpt">Lorem ipsum dolor sit amet.</p>
                            </div>

                        </article>

                        <article className='article-card'>
                            <figure className='article-image'>
                                <img src={zebra} alt="" height={200}/>
                            </figure>
                            <div className="article-content">
                                <h3 className='card-title'>Afundy Hayeetah</h3>
                                <p className="card-exerpt">Lorem ipsum dolor sit amet.</p>
                            </div>

                        </article>
                    </div>
                    
                </div>
            </body>
    )
    }
export default About