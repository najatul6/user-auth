
const UserList = () => {
  return (
    <div className="py-5 flex flex-col justify-center items-center px-3">
        <h1 className="text-2xl font-bold underline capitalize text-center py-2">All Users Here</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* User data will be fetched here */}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList