import React,{useState,useEffect} from 'react'
import fetchPosts from '../api/fetchPosts'
import Card from '../components/Card'
export default function PostsList(){
const [posts,setPosts]=useState([])
const [loading,setLoading]=useState(false)
const [error,setError]=useState('')
const [page,setPage]=useState(1)
const [search,setSearch]=useState('')
useEffect(()=>{
setLoading(true)
fetchPosts(page,10).then(d=>{setPosts(d);setError('')}).catch(()=>setError('Error')).finally(()=>setLoading(false))
},[page])
const filtered=posts.filter(p=>p.title.toLowerCase().includes(search.toLowerCase())||p.body.toLowerCase().includes(search.toLowerCase()))
return(
<div>
<div className="mb-2 flex"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search posts..." className="border rounded px-2 py-1 flex-1"/></div>
{loading?<div>Loading...</div>:error?<div>{error}</div>:
<div className="grid gap-2">{filtered.map(p=><Card key={p.id}><div className="font-bold capitalize">{p.title}</div><div>{p.body}</div></Card>)}</div>}
<div className="flex gap-2 mt-2"><button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50">Prev</button><span>Page {page}</span><button onClick={()=>setPage(p=>p+1)} className="px-2 py-1 bg-gray-200 rounded">Next</button></div>
</div>
)
} 