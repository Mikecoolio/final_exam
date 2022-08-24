// AuctionDetails.js
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

// AuctionIndexPage.js
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

// AuctionShowPage.js
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

// BidList.js
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

// Navbar.js
import React from 'react';
import {NavLink} from 'react-router-dom';
import { Session } from '../requests';

const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }

    return(
        <nav>
            <NavLink to='/auctions'>Auction Index</NavLink>
            |
            {
                currentUser? (
                    <>
                        <NavLink to='/auctions/new'>Auction New</NavLink>
                        _
                        <span>Welcome, { currentUser.first_name }</span>
                        -
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <NavLink to='/sign_in'>Sign In</NavLink>
                        |
                        <NavLink to='/sign_up'>Sign Up</NavLink>
                    </>
                )
            }
        </nav>
    )

}

export default NavBar

// SignUpPage.js
import React from 'react';
import { User } from '../requests';

const SignUpPage = (props) => {
    const { onSignUp } = props;
    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = { user: {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        }
        User.create(params).then(user => {
            if(user?.id){
                onSignUp() // store the user in the App state
                props.history.push('/questions') //navigate to index
            }
        })
    }

    return(
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First name</label>
                    <input type="text" name="first_name" id="first_name" />
                </div>
                <div>
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" name="last_name" id="last_name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </main>
    )
}

// export default SignUpPage;

// WelcomePage.js
import React from 'react';

function WelcomePage() {
    return (
        <div className="welcome_page">
            <p className="welcome_text">Going Twice.  Going Once.</p>
            <p className="welcome_text">Sold to Biddr! </p>
        </div>
    )
}

export default WelcomePage;