const collection = document.querySelector('.collection')
const collections = document.querySelector('.collections')
const collectionPage = document.querySelector('.collectionPage')
const close = document.querySelectorAll('.close')
const lockboxBackground = document.querySelector('.lockboxBackground')
const threeLockboxes = document.querySelector('.threeLockboxes')
const viewCollection = document.querySelector('.textCollections')
const openLockbox = document.querySelector('.textOpen')
const team = document.querySelector('.team')
const teamPage = document.querySelector('.teamPage')

collection.addEventListener('click', (e)=>{
    collectionPage.classList.remove('hidden')
})
team.addEventListener('click', (e)=>{
    teamPage.classList.remove('hidden')
})
for(let i=0; i<close.length; i++){
    close[i].addEventListener('click', (e)=>{
        collectionPage.classList.add('hidden');
        teamPage.classList.add('hidden');
    })
}


viewCollection.addEventListener('click', (e)=>{
    threeLockboxes.classList.add('hidden')
    collections.classList.remove('hidden')
    viewCollection.classList.remove('unclick')
    viewCollection.classList.add('click')
   lockboxBackground.classList.add('hidden')
   openLockbox.classList.add("unclick")

})
openLockbox.addEventListener('click', (e)=>{
    threeLockboxes.classList.remove('hidden')
    collections.classList.add('hidden')
    openLockbox.classList.remove("unclick")
    lockboxBackground.classList.remove('hidden')
    viewCollection.classList.add("unclick")
 })
