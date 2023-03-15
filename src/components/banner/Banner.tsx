import Button from "../../common/Button";


const Banner = () => {
    return <div className="h-[31.25rem] bg-[url('./assets/banner.jpeg')] 
                           bg-cover bg-no-repeat bg-center sm:px-4 sm:pt-10 sm:pb-[4.438rem] 
                           md:px-[12.125rem] md:py-[5.5rem] lg:py-[5.5rem] lg:px-[12.125rem] xl:w-[73.125rem] xl:mx-auto">
        <h1 className="font-normal text-[2.5rem] text-center text-white mb-[1.313rem] sm:leading-10
                       md:mb-[1.313rem]">
            Test assignment for front-end developer
        </h1>
        <p className="text-white text-base text-center mb-[2rem] sm:mb-8 md:mb-8">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <div className="mx-auto w-min">
            <Button>Sign Up</Button>
        </div>
        
    </div>
}

export default Banner;