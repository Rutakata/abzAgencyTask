import { User } from "../../store/usersReducer";

type Props = {
    user: User
}

const UserCard = ({user}: Props) => {
    return <div className="p-5 flex gap-5 flex-col h-[15.875rem] w-[17.625rem] 
                         bg-white rounded-[0.625rem] text-center text-base
                           leading-[1.625rem] sm:w-[20.5rem] sm:box-border sm:gap-[1.25rem] 
                           sm:leading-[1.625rem] sm:truncate">
        <img src={user.photo} alt='user photo' className="w-[4.375rem] h-[4.375rem] rounded-full mx-auto"/>
        <h3>{user.name}</h3>
        <div>
            <h3>{user.position}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
        </div>
    </div>
}


export default UserCard;