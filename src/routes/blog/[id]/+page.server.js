export const load = async ({ fetch, params: { id } }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        const error = new Error(`Failed to fetch post with id ${id}`);
        error.status = res.status;
        throw error;
    }

    const post = await res.json();
    return {
        post,
    }
}
