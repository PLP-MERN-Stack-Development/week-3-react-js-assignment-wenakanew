export default async function fetchPosts(page=1,limit=10){
const r=await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
if(!r.ok)throw new Error('Error')
return await r.json()
} 