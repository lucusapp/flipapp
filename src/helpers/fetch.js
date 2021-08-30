const baseUrl = 'https://flipap.herokuapp.com/api';
const baseFB='https://graph.facebook.com/v11.0';
const token = 'EAALRN2JjbsUBAL8SsP2Ccgr4xreZCE65ZAZCSA43oGAmIxPPzcKsuHdoUJhJAgQGCp26PopmZCOOwLYNpC8cZCUgL8tj7Uk6PH2q0GwYmaWhWF0CJU3JNv3r6TuggMi8KPZAWPKNWHAOIzYsXRapESZBzZAbShjiklhkMT3aFD8nZCOa5auUYqePQ39aycw4Ojw2lmXnG4chU517CMSSxkBsuA92sDhNgiXgZD'



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