export const load = async ({fetch}) => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
   const allPosts = await res.json();
   const posts = allPosts.slice(0, 20);
 
   return{
      posts,
   }
}