const collection = document.querySelector('.collection')
const collections = document.querySelector('.collections')
const collectionPage = document.querySelector('.collectionPage')
const close = document.querySelector('.close')
const lockboxBackground = document.querySelector('.lockboxBackground')
const threeLockboxes = document.querySelector('.threeLockboxes')
const viewCollection = document.querySelector('.textCollections')
const openLockbox = document.querySelector('.textOpen')

collection.addEventListener('click', (e)=>{
    collectionPage.classList.remove('hidden')
})
close.addEventListener('click', (e)=>{
    collectionPage.classList.add('hidden')
})
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
