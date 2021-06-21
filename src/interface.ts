export interface Post {
  name: string
  username: string
  description: string
  createAt: {
    seconds: number
  }
  rating: number
}
