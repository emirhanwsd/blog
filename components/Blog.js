import Link from "next/link";

const Blog = props => {
    return (
        <div className="w-2/4 h-2/4">
            <h6 className="text-gray-400 mb-2">{props.date}</h6>
            <h3 className="text-xl font-bold mb-4">{props.title}</h3>
            <p className="text-gray-400 mb-4 max-w-2xl">{props.text}</p>
            <Link href={props.slug}>
                <a className="text-indigo-500 hover:text-indigo-600 font-bold transition-colors">Read full article</a>
            </Link>
        </div>
    )
}

export default Blog;