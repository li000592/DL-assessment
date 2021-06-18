import React from "react"
import { useFirestoreDocData, useFirestore } from "reactfire"
import "firebase/firestore"

interface Data {
  yummy: any
}
function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore().collection("tryreactfire").doc("burrito")
  //const reviewPostRef = useFirestore().collection("reviewposts").doc("post")
  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData<Data>(burritoRef)
  //const { status, data } = useFirestoreDocData<Data>(reviewPostRef)
  console.log(data)

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>
  }

  return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>
}

function App() {
  return (
    <>
      <h1>🌯</h1>
      <Burrito />
    </>
  )
}

export default App
