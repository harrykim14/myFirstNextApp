import Layout from '../components/Layout';
import { getAllPostsData } from '../lib/posts';
import Post from '../components/Post'

const Blog = ({ posts }) => {
    return (
        <Layout title="Blog">
            <ul className="">
            {posts && posts.map(posts => (
                <Post key = {posts.id} post = {posts} />
            ))}
            </ul>
        </Layout>
    )
}

export default Blog

export async function getStaticProps() {
    const posts = await getAllPostsData();
    return {
        props : { posts }
    }
}