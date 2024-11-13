// search movies site
const movieForm=document.querySelector('#movieForm')
const inputForm=document.querySelector('#inputForm')
const search=document.querySelector('#search')
async function getMovie(query){
    const url=`https://api.tvmaze.com/search/shows?q=${query}`
    const response=await axios.get(url)
    return response
}
const container=document.querySelector('#container')

movieForm.addEventListener('submit',async (event)=>{
    event.preventDefault()
    container.innerHTML=''

    const query=inputForm.value
    const res=await getMovie(query)
    for(let sho of res.data){
try{
    const show=sho.show
    const genres=show['genres']
    const status=show['status']
    const img=show['image']['medium']
    const rating=show['rating']['average']
    const summary=show['summary']
    const name=show.name

    const showName=document.createElement('p')
    showName.innerText=name

    container.append(showName)
    const showGenres=document.createElement('p')
    showGenres.innerText=genres
    container.append(showGenres)
    
    const showImg=document.createElement('img')
    showImg.src=img
    container.append(showImg)
    const showSummary=document.createElement('div')
    showSummary.innerHTML=summary //innnerHTML cos the summary comes with its tags for formatting
    container.append(showSummary)


    const showRating=document.createElement('p')
    showRating.innerText=rating
    container.append(showRating)
    const showStatus=document.createElement('p')
    showStatus.innerText=`Status: ${status}`
    container.append(showStatus)

}catch(error){
    const showerror=document.createElement('p')
    showerror.innerText=`error: ${error}`
    container.append(showerror)
}    
    }
})
