import React from 'react'
import Layout from '../components/Layout'
import TaskManager from '../components/TaskManager'
import PostsList from './PostsList'
export default function Home(){
return <Layout><div className="my-8 grid gap-8 md:grid-cols-2"><TaskManager/><PostsList/></div></Layout>
} 