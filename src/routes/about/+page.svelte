<script>
    import Banner from "../../lib/components/Banner.svelte";
    let bannerText =
    "irure dolor in reprehenderit in  um dolore eu Ullamco laboris nisi ut aliquip ex ea  s a atur. Esunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt  ";
    let bannerTitle = "This is banner title of About";
    export let data;
    const { posts } = data;
    console.log("posts", posts);
</script>

<div>
    <Banner bannerTitle={bannerTitle} {bannerText}/>
    <div class="autoContent">
        <h2>This posts is getting from local api's</h2>
        <ul>
            {#each posts as post}
                <li>
                    <div class="postImg">
                        <img src={post.image} alt={post.title} />
                    </div>
                    <div class="postData">
                        <h3>{post.title.substring(0, 50)}</h3>
                        <p>{post.body.substring(0, 100)}</p>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
<style>
    h2{ padding-top: 30px;}
    ul{ display: flex; flex-wrap: wrap; align-items: flex-start; padding: 0px; margin: 0px -20px; }
    li{ width: 33.33%; padding: 20px; list-style: none; min-width: 300px; margin:0px auto;}
    .postImg{ width: 100%; height: 250px; }
    .postImg img{ display: block; width: 100%; height: 100%; object-fit: cover; object-position: center center;  }
    .postData h3{ min-height: 70px; margin-bottom: 10px;}
</style>
