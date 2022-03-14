fetch(tvUrl)
.then(res => res.json())
.then(res => 
    
    console.log('success!', res)).catch(err => console.log('something went wrong', err)),

