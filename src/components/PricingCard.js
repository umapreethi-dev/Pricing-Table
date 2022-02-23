import "../App.css"

function PricingCard(props){
    return(
        <div className="card">
            <p className="heading h-1"> {props.plan}</p>
            <p className="heading"> <span className="cost">{props.cost}</span>/month</p>
            <hr />
            <p> &#10004; {props.users}</p>
            <p>&#10004; {props.storage} Storage</p>
            <p>&#10004; Unlimited Public Projects</p>
            <p>&#10004; Community Access</p>
            <p className={`${props.i1}`}>{props.icon1} Unlimited Private Projects</p>
            <p className={`${props.i1}`}>{props.icon2} Dedicated Phone Support</p>
            <p className={`${props.i1}`}>{props.icon3} Free Subdomain</p>
            <p className={`${props.i2}`}>{props.icon4} Monthly Status Reports</p>
            <button className="button">BUTTON</button>
        </div>
    )
}

export default PricingCard;