import { useAuth } from "../../auth/hooks/useAuth"


export const Home = () => {
  const { logoutUser } = useAuth()
  return (
    <>
      <h1>home</h1>
      <hr />
      <button onClick={logoutUser}>logout</button>
    </>
  )
}
