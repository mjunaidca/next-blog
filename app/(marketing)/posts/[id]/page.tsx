import { posts } from "@/data/post";
import Link from "next/link";
import styles from "./page.module.css";


export async function generateStaticParams() {
    const ids: string[] = ['1', '2', '3']
    return ids.map(id => ({id: id}))
}

async function getPost(id: string) {
    const post = posts.find((post) => post.id = id)
    return post
}

export default async function Post({ params }: { params: { id: string } }) {
    const { id } = params;
    const post = await getPost(id);
    return (
        <main className={styles.main}>
            <div className={styles.center}>

                <h1>{post!.title}</h1>
                {post!.date}
            </div>
            <Link href='/'>Back To Home</Link>
        </main>
    );
}