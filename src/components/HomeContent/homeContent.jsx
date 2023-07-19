import './homeContent.css'

function HomeContent(){
    return(
        <div className='bodyHomeContent'>
            <div>
                <h2>Encuentra tu brillo interior</h2>
            </div>
            <div className="row">
                <div className="col cardHome1">
                    <div>
                        <img src="https://i.pinimg.com/236x/a3/cf/2d/a3cf2da508b89d3e4c5cd6eef721ed4c.jpg"></img>
                    </div>
                    <div className='cardContent'>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing.</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                        <a>Leer más</a>
                    </div>
                </div>
                <div className="col cardHome2">
                    <div>
                        <img src="https://i.pinimg.com/236x/48/89/94/4889941154a9e83d935b420c41431bff.jpg"></img>
                    </div>
                    <div className='cardContent'>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                        <a>Leer más</a>
                    </div>
                </div>
                <div className="col cardHome3">
                    <div>
                        <img src="https://i.pinimg.com/236x/f4/dd/9f/f4dd9f105db1d75f4055f51a58ef9cfe.jpg"></img>
                    </div>
                    <div className='cardContent'>
                        <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, consequatur aliquam illo ducimus fugit distinctio!</p>
                        <a>Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomeContent