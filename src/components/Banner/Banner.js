import './Banner.css'

export default function Banner(options) {
    return (
        <section className='main-banner'>
            <div className='main-banner-ornament'>
                <img src="/images/ornament_banner.png" alt="ornament"/>
            </div>
            <div className='main-banner-container'>
                <div className='main-banner-text'>                    
                    <h2>Melhores ofertas personalizadas</h2>
                    <h1>Queima de estoque Nike 🔥</h1>
                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do
                        do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className='main-banner-button'>
                        ver ofertas
                    </button>
                </div>
                <div className='main-banner-imagem'>
                    <img src="/images/tenis_banner.png" alt="tenis"/>   
                </div>
        </div>
        </section>
    )
}