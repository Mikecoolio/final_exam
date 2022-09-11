import { useEffect, useState } from 'react';
import { Auction } from '../requests';
import AuctionDetails from './AuctionDetails'

function AuctionShowPage(props) {
    const [auction, setAuction] = useState({});

    useEffect(() => {
        Auction.show(props.match.params.id)
        .then((each_auction) => {
            setAuction(each_auction);
        })
    }, []);

    return (
        <AuctionDetails
            id={auction.id}
            title={auction.title}
            body={auction.body}
            end_date={auction.end_date}
            reserve_price={auction.reserve_price}
            created_at={auction.created_at}
        />
    )
}

export default AuctionShowPage;