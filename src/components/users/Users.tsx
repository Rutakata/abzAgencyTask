import { User } from "../../store/usersReducer";
import UserCard from "./UserCard";


type Props = {
    users: User[]
}

const Users = ({users}: Props) => {
    return <div className="flex flex-wrap gap-[1.813rem] justify-center mb-[3.375rem] 
                           sm:gap-y-[1.25rem] sm:mb-[3.125rem] md:gap-4">
        {users.map(user => <UserCard user={user} key={user.id} />)}
    </div>
}

export default Users;