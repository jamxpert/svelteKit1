<script>
    export let data;
    const { post } = data;
</script>

<div class="autoContent">
    <h2>Post Detail</h2>
    <div class="post_detail">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
</div>

<style>
    h2 {
        padding: 20px 0px;
    }
    .post_detail {
        padding-left: 50px;
    }
</style>
