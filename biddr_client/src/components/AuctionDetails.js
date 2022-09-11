function AuctionDetails(props) {
    return(
        <>
            <h2>{props.title}</h2>
            <p>
              {props.body}
              <br />
            </p>
            <p>
                <small>
                    <span>Created At: {props.created_at ? props.created_at.toLocaleString() : null}</span>
                    <span>End_date: {props.end_date}</span>
                    <span>reserve_price: {props.reserve_price}</span>
                    {/* <span>current_user: {props.currentUser}</span> */}
                </small>
            </p>
        </>
    )
}

export default AuctionDetails;