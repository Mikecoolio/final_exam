import AuctionDetails from "./AuctionDetails";

export default function BidList(props) {
    const bids = props.list

    return(
        <div>
            <h1>Bid List</h1>
            <ul>
                {
                    bids ?
                    bids.map((bid, index) => {
                        return <AuctionDetails key={index}
                        title={bid.title}
                        body={bid.body}
                        end_date={bid.end_date}
                        reserve_price={bid.reserve_price}
                        />
                    })
                    :
                    null
                }
            </ul>
        </div>
    )
}