export default async function request(request, result) {
    let { slug } = request.query

    let blogs = await fetch("https://blog-emirhanwsd.vercel.app/api/blogs")

    blogs = await blogs.json();

    let blog = blogs.find(blog => blog.slug === slug);

    if (blog){
        result.status(200).json(blog);
        return;
    }

    result.status(201).json([]);
}