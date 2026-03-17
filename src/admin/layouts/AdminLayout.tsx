import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div className="bg-green-400">
      <Outlet />
    </div>
  )
}

export default AdminLayout
