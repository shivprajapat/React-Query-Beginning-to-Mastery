import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Home, RQSuperHeroesPage, SuperHeroesPage } from "./components"
import { QueryHome, QueryRQSuperHeroesPage, QuerySuperHeroesPage } from './query'
import { ReactQueryDevtools } from 'react-query/devtools'

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />

            {/* react query routes */}

            <Route path='/query-home' element={<QueryHome />} />
            <Route path='/query-super-heroes' element={<QuerySuperHeroesPage />} />
            <Route path='/query-rq-super-heroes' element={<QueryRQSuperHeroesPage />} />
          </Routes>
        </main>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}

export default App