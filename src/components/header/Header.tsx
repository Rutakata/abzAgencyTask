import Logo from '../../assets/Logo.svg';
import Button from '../../common/Button';

const Header = () => {
    return <header className="h-[3.75rem] lg:px-[3.75rem] lg:py-3.5 flex justify-between bg-white 
                              sm:px-4 sm:py-[0.813rem] md:px-8 md:py-[0.813rem]">
            <img src={Logo} alt='logo' className='sm:w-28' />
            <div className='flex gap-x-2.5'>
                <Button>Users</Button>
                <Button>Sign Up</Button>
            </div>
    </header>
}

export default Header;