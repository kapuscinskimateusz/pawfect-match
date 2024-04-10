import Heading from '../../../components/ui/Heading'

function HeroSection() {
    return (
        <section className="grid h-96 grid-cols-2">
            <div className="flex flex-col justify-center">
                <Heading type="h1">Find your new best friend!</Heading>
                <p>
                    Cats, dogs and other animals. Each of them needs a loving
                    home.
                </p>
            </div>
            <div className="from-madang-700 to-madang-500 relative overflow-hidden rounded-l-full bg-gradient-to-t"></div>
        </section>
    )
}

export default HeroSection
