import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components/Index'
import loadingImage from '../images/6.svg'
import { GithubContext } from '../context/context'

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext)
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} className="loading-img" alt="loding" />
      </main>
    )
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard
