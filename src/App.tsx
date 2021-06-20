import React, { useState } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { useFirestoreDocData, useFirestore } from "reactfire"
import "firebase/firestore"

import Header from "./components/Header"
import Post from "./components/Posts"
import { isDay } from "./utils/convertTools"

function App() {
  const foodReviewsRef = useFirestore().collection("foodreview").doc("reviews")
  const { status, data } = useFirestoreDocData<any>(foodReviewsRef)

  const [theme, setTheme] = useState<boolean>(true)
  const appliedTheme = createMuiTheme(theme ? light : dark)

  React.useEffect(() => {
    setTheme(isDay())
  }, [])

  if (status === "error") <h5>Some errors while fetching data...</h5>
  return (
    <ThemeProvider theme={appliedTheme}>
      <Header setTheme={setTheme} theme={theme} />
      {status === "loading" ? (
        <Typography align='center' variant='h5'>
          Loading...
        </Typography>
      ) : (
        <Post reviewData={data.posts} />
      )}
    </ThemeProvider>
  )
}

export default App

export const light: object = {
  palette: {
    type: "light",
  },
}
export const dark: object = {
  palette: {
    type: "dark",
  },
}
