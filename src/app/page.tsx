import Navigation from '@/components/Navigation'
import Search from '@/components/Search'

const Home = () => {
    return (
        <div className="flex flex-col w-full max-w-screen-2xl">
            <Navigation />
            <Search />
        </div>
    )
}

export default Home
