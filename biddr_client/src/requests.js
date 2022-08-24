const baseUrl = "http://localhost:3000/api/v1";

export const Auction = {
    index(){
        return fetch(`${baseUrl}/auctions`)
        .then(res => {
            console.log(res);
            return res.json();
        })
    },
    create(params){
        return fetch(`${baseUrl}/auctions`, {
            method: 'POST',
            credentials: 'include', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then((res) => res.json());
    },
    show(id){
        return fetch(`${baseUrl}/auctions/${id}`)
        .then(res => res.json());
    },
    destroy(id) {
        return fetch(`${baseUrl}/auctions/${id}`, {
          method: 'DELETE',
          credentials: 'include',
        })
    }
}

export const Session = {
    create(params){
        return fetch(`${baseUrl}/session`, {
            method: 'POST',
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    destroy(){
        return fetch(`${baseUrl}/session`, {
            method: 'DELETE',
            credentials: 'include' //need for cookies to be allowed to be sent cross-origin
        }).then(res => res.json());
    }
}

export const User = {
    current(){
        return fetch(`${baseUrl}/users/current`, {
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
        }).then(res => res.json());
    },
    create(params){
        return fetch(`${baseUrl}/users`, {
            method: 'POST',
            credentials: 'include', //need for cookies to be allowed to be sent cross-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json());  
    }
}