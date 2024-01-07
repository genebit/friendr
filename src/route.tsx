import { createBrowserRouter } from "react-router-dom"
import FriendrPage from "@pages/friendr"

const router = createBrowserRouter([
  {
    path: "/",
    element: <FriendrPage />,
  },
])

export default router
