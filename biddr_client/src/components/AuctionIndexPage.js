import { useState, useEffect } from 'react';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';

export default function AuctionIndexPage() {
    const [auctionsState, setAuctionsState] = useState([])

    useEffect(() => {
        Auction.index()
        .then((auctionsData) => {
            setAuctionsState(auctionsData)
        })
    }, [])

    const deleteAuction = (id) => {
        console.log(id)

        setAuctionsState(
            auctionsState.filter(a => a.id !== id)
        )
    }

    return(
        <>
            <ul>
                {
                    auctionsState.map((a, index) => {
                        return <li key={index}>{a.id} - 
                        <Link to={`/auctions/${a.id}`}>{a.title}</Link>
                        <button onClick={() => { deleteAuction(a.id)}}>Delete</button>
                        </li>
                    })
                }
            </ul>

        </>
    )
}


