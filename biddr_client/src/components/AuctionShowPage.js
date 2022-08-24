import { useState, useEffect, Component } from 'react';
import { Auction } from '../requests';

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auction: {}
        };
    }

    fetchAuction() {
        Auction.show(this.props.match.params.id) //no more hard copy - display the first that matches. Have access o the params ant the match method through our router
        .then((fetchedAPIAuction) => {
            this.setState(() => {
            return {
                stateAuction : fetchedAPIAuction
                };
            });
        })
    }

    // delete(){

    //     this.setState({
    //       auction: null
    //     })
    // }

    render() {
        const auction = this.state.stateAuction
        return(
            <div>
                <AuctionDetails
                    title={auction.title}
                    body={auction.body}
                    end_date={auction.end_date}
                    reserve_price={auction.reserve_price}
                />

                
            </div>
        )
    }
}


// export default function AuctionShowPage() {
//     const [auction, setAuction] = useState(null);

//     useEffect(() => {
//         Auction.show()
//         .then((data) => {
//             setAuction(data);
//         })
//     }, null)

//     return(
//         <>
//             <ul>
//                 {
//                     auction.map((a, index) => {
//                    return  <li key={index}>{a.id} 
//                     <p>{a.title}</p>
//                     </li>
//                     })
//                 }
//             </ul>
//         </>
//     )
// }