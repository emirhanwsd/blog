import Head from 'next/head'
import Blog from "../components/Blog";

const Home = () => {
    return (
        <div className="w-full h-full px-8 py-16 text-gray-900">
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>

            <header className="mb-6">
                <h3 className="text-3xl font-bold mb-3">Blog</h3>
                <p className="text-xl text-gray-400">Let's read my articles and learn some more things from me.</p>
            </header>

            <div className="min-w-full h-px bg-gray-300 mb-9"/>
            
            <div className="w-full pb-12 md:h-3/4 flex flex-col gap-y-12 md:flex-wrap md:gap-y-0">
                <Blog title="Boost your conversation rate" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta error eum fugit id nam necessitatibus nesciunt quos repudiandae. Dolores laboriosam, quasi quod sed soluta tenetur unde veritatis voluptatum!" slug="test" date="18 Dec, 2021"/>
                <Blog title="Boost your conversation rate" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta error eum fugit id nam necessitatibus nesciunt quos repudiandae. Dolores laboriosam, quasi quod sed soluta tenetur unde veritatis voluptatum!" slug="test" date="18 Dec, 2021"/>
                <Blog title="Boost your conversation rate" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta error eum fugit id nam necessitatibus nesciunt quos repudiandae. Dolores laboriosam, quasi quod sed soluta tenetur unde veritatis voluptatum!" slug="test" date="18 Dec, 2021"/>
                <Blog title="Boost your conversation rate" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta error eum fugit id nam necessitatibus nesciunt quos repudiandae. Dolores laboriosam, quasi quod sed soluta tenetur unde veritatis voluptatum!" slug="test" date="18 Dec, 2021"/>
            </div>
        </div>
    )
}

export default Home;
