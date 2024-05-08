import Heading from '../../../components/ui/Heading'
import LazyImage from '../../../components/ui/LazyImage'

function HeroSection() {
    return (
        <section className="relative -mx-4 flex h-96 justify-end overflow-hidden sm:mx-0 sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-madang-700 from-50% to-transparent to-60%">
                <div className="flex h-full w-3/5 items-center justify-center">
                    <div className="px-4 text-madang-50">
                        <Heading type="h1">
                            Find your{' '}
                            <span className="text-madang-200">
                                best friend!
                            </span>
                        </Heading>
                        <p>
                            Cats, dogs and other animals. Each of them needs a{' '}
                            <span className="text-madang-200">
                                loving home.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex h-full basis-1/2 items-center justify-center">
                <LazyImage
                    src="src/assets/img/cuddly-dog.jpg"
                    alt="Cuddly dog"
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    )
}

export default HeroSection
