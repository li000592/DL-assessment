import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CircularProgress from "@material-ui/core/CircularProgress"
import Container from "@material-ui/core/Container"
import { useFirestoreDocData, useFirestore } from "reactfire"
import "firebase/firestore"

import Header from "./components/Header"
import PostList from "./components/PostList"
import { isDay } from "./utils/convertTools"
import { light, dark } from "./styles/theme"

function App() {
  const foodReviewsRef = useFirestore().collection("foodreview").doc("reviews")
  const { status, data } = useFirestoreDocData<any>(foodReviewsRef)
  const [query, setQuery] = useState("")
  const [theme, setTheme] = useState<boolean>(true)
  const appliedTheme = createMuiTheme(theme ? light : dark)

  React.useEffect(() => {
    setTheme(isDay())
  }, [])

  if (status === "error")
    <Typography align='center' variant='h5'>
      Some errors while fetching data...
    </Typography>
  return (
    <ThemeProvider theme={appliedTheme}>
      <Header setTheme={setTheme} theme={theme} setQuery={setQuery} />
      <Container maxWidth='md'>
        {status === "loading" ? (
          <CircularProgress className='loader' />
        ) : (
          <PostList query={query} reviewData={data.posts} />
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
