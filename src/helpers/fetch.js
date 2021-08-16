const baseUrl = process.env.REACT_APP_API_URL;
const baseFB='https://graph.facebook.com/v11.0';
const token = 'EAALRN2JjbsUBAK6X1jDEiXMwZA7H0IgZC8hAh8m4RtEfW7QwsUHFqMoaBmuv523GstKH5qeUPnN7R8kSWt6QD02kJvTpUZCZAYfJkzTZCoh5fHTpD584QpQKZBFReDnf5G3vZB54ZCiBZBPrQm6hziG3aaSRo0lriVZCHB2ffHEH6uMKaklM7BQIge'



const fetchSinTocken = (endpoint,data,method='GET')=>{
    const url = `${baseUrl}/${endpoint}`
    
    if(method==='GET'){
        return fetch(url)
    }else{
        return fetch(url,{
            method,
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

const fetchConTocken = (endpoint,data,method='GET')=>{
    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    
    if(method==='GET'){
        return fetch(url,{
            method,
            mode: 'cors',
            headers:{
                'x-token': token
            }
        })
    }else{
        return fetch(url,{
            method,
            mode: 'cors',
            headers:{
                'Content-type': 'application/json',
                'x-token':token
            },
            body: JSON.stringify(data)
        })
    }
}

const fetchAfiliadoFB = (data,method='GET')=>{
    const url = `${baseFB}/${data}?fields=id%2Cname%2Cposts%7Bfull_picture%2Cmessage%2Ccreated_time%2Cevent%2Cstory%2Cactions%2Cproperties%2Cshares%2Cattachments.limit(10)%7Bdescription%2Ctitle%2Ctarget%2Curl%2Cdescription_tags%2Cmedia%2Cmedia_type%2Ctype%2Csubattachments%2Cunshimmed_url%7D%7D%2Cbirthday&access_token=${token}`
    console.log(url)
    if(method==='GET'){
        return fetch(url)
    }else{
        return fetch(url,{
            method,
            mode: 'cors',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }



}



export{
    fetchSinTocken,
    fetchConTocken,
    fetchAfiliadoFB

}