
<script>
    export let data;
    const {posts} = data;
</script>
 

<div class="autoContent">
     <h2>Blog post from Load function page server file</h2>
     <ul>
        {#each posts as post}
        <li>
            <a href='blog/{post.id}'>{post.title}</a>
        </li>
        {/each}
     </ul>
</div>

<style>
    h2{ padding: 15px 0px;}
    li{ padding-bottom: 6px;}
    a:hover{ text-decoration: none;}
</style>