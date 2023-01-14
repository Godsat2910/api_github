import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { PostsContextProvider } from './context/PostsContext'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextProvider>
          <GlobalStyle />
          <Header />
          <Router />
        </PostsContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
