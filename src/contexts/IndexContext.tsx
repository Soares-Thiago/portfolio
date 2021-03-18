import {createContext, ReactNode, useState} from 'react'

interface IndexContextData{
  hasAboutPage: boolean,
  hasNavBar: boolean,
  hasPortfolioPage: boolean,
  hasExperiencePage: boolean,
  hasSkilsPage: boolean,
  hasContactPage: boolean,
  handleNavBav: () => void,
  handleAboutPage: () => void,
  handlePortfolioPage: () => void,
  handleExperiencePage: () => void,
  handleSkilsPage: () => void,
  handleContactPage: () => void
}

interface IndexProviderProps{
  children: ReactNode
}

export const IndexContext = createContext({} as IndexContextData)

export function IndexProvider({children}: IndexProviderProps){
  const [hasAboutPage, setHasAboutPage] = useState(true)
  const [hasPortfolioPage, setHasPortfolioPage] = useState(false)
  const [hasExperiencePage, setHasExperiencePage] = useState(false)
  const [hasSkilsPage, setHasSkilsPage] = useState(false)
  const [hasContactPage, setHasContactPage] = useState(false)
  const [hasNavBar, setHasNavBar] = useState(true)

  function handleNavBav(){

    if(hasNavBar){
      setHasNavBar(false)
      return
    } 

    setHasNavBar(true)
  }

  function handleContactPage(){
    setHasAboutPage(false)
    setHasPortfolioPage(false)
    setHasExperiencePage(false)
    setHasSkilsPage(false)
    if(hasContactPage){
      return
    }
    setHasContactPage(true)
  }

  function handleSkilsPage(){
    setHasAboutPage(false)
    setHasPortfolioPage(false)
    setHasExperiencePage(false)
    setHasContactPage(false)
    if(hasSkilsPage){
      return
    }
    
    setHasSkilsPage(true)
  }

  function handleExperiencePage(){
    setHasAboutPage(false)
    setHasPortfolioPage(false)
    setHasSkilsPage(false)
    setHasContactPage(false)
    if(hasExperiencePage){
      return
    }
    setHasExperiencePage(true)
  }

  function handlePortfolioPage(){
    setHasAboutPage(false)
    setHasExperiencePage(false)
    setHasSkilsPage(false)
    setHasContactPage(false)
    if(hasPortfolioPage){
      return
    }
    setHasPortfolioPage(true)

  }

  function handleAboutPage(){
    setHasPortfolioPage(false)
    setHasExperiencePage(false)
    setHasSkilsPage(false)
    setHasContactPage(false)
    if(hasAboutPage){
      return
    }
    setHasAboutPage(true)
  }
  return(
    <IndexContext.Provider value={{
      hasAboutPage,
      hasNavBar,
      hasPortfolioPage,
      hasExperiencePage,
      hasSkilsPage,
      hasContactPage,
      handleNavBav,
      handleAboutPage,
      handlePortfolioPage,
      handleExperiencePage,
      handleSkilsPage,
      handleContactPage
    }}>
      {children}
    </IndexContext.Provider>
  );

}