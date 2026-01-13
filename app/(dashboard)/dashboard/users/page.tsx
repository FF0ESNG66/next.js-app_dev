import Link from "next/link";

const Users = () => {
    
  return (
    <div>
        <h1>Dashboard Users</h1>


        <u className="mt-10">
            <li><Link href="/dashboard/users/juan">User 1</Link></li>
            <li><Link href="/dashboard/users/2">User 2</Link></li>
            <li><Link href="/dashboard/users/3">User 3</Link></li>
            <li><Link href="/dashboard/users/4">User 4</Link></li>
        </u>
    </div>

  )
}

export default Users
