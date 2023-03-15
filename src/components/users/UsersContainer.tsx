import {useEffect, MouseEvent} from 'react';
import Button from '../../common/Button';
import Preloader from '../../common/Preloader';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { requestUsers } from '../../store/usersReducer';
import Users from './Users';


const UsersContainer = () => {
    const { users, loading, success, page, links, total_pages } = useAppSelector(state => state.usersReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(requestUsers(page));
    }, [])

    const handleUsersRequest = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (links.next_url) {
            dispatch(requestUsers(page+1));
        }
    }

    const UserComp = 
    <div className='mt-[8.75rem] xl:w-[73.125rem] xl:mx-auto'>
        <h1 className='text-[2.5rem] text-center mb-[3.125rem] sm:leading-10 sm:mb-[4.375rem]
                       md:mb-[3.125rem]'>
            Working with GET request
        </h1>
        <Users users={users} />
        {
            page !== total_pages ? 
            <div className='mx-auto w-min'>
                <Button handler={handleUsersRequest}>Show more</Button>
            </div>
            : null
        }
    </div>

    if (!loading && success) {
        return UserComp
    }else if (loading) {
        return UserComp
    }else if (!loading && !success) {
        return <div>Some error</div>
    }else {
        return <Preloader />
    }
}

export default UsersContainer;