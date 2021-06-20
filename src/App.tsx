import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useFirestoreDocData, useFirestore } from "reactfire"
import "firebase/firestore"

import Header from "./components/Header"
import PostList from "./components/PostList"
import { isDay } from "./utils/convertTools"
import { light, dark } from "./styles/theme"

function App() {
  const foodReviewsRef = useFirestore().collection("foodreview").doc("reviews")
  const { status, data } = useFirestoreDocData<any>(foodReviewsRef)

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
      <Header setTheme={setTheme} theme={theme} />
      {status === "loading" ? (
        <Typography align='center' variant='h5'>
          Loading...
        </Typography>
      ) : (
        <PostList reviewData={data.posts} />
      )}
    </ThemeProvider>
  )
}

export default App
