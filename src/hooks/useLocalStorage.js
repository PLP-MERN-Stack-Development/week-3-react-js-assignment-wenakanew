import {useState,useEffect} from 'react'
export default function useLocalStorage(key,initialValue){
const [value,setValue]=useState(()=>{
const v=window.localStorage.getItem(key)
return v?JSON.parse(v):initialValue
})
useEffect(()=>{window.localStorage.setItem(key,JSON.stringify(value))},[key,value])
return [value,setValue]
} 