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
                    Created At: {props.created_at ? props.created_at.toLocaleString() : null}
                </small>
            </p>
        </>
    )
}

export default AuctionDetails;