import React from 'react'

export default function Item(props) {
    

 
    let { title, description, imgUrl, Url, source, date, author, mode } = props;
    return (
        <>
            <div>
                
                <div className="card">
                    <img className="card-img-top" src={!imgUrl ? "https://www.bleepstatic.com/content/hl-images/2022/09/16/uber.jpg" : imgUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "85%", zIndex: '1' }}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}</p>

                        <p style={{ color: "grey" }}><small>by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={Url} target='_blank' className={`btn btn-${mode === "dark" ? "primary" : "secondary"}`}>read more</a>
                    </div>
                </div>
            </div>
        </>
    )

}
