<!-- PhotoList.svelte -->
<script>
    import { onMount } from "svelte";


    let photos = [];
    let isloading = true;
    async function fetchPhotos() {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/photos",
            );
            const data = await response.json();
            const spliceData = data.splice(0, 10);
            photos = spliceData;
            console.log('photos', photos)
        } catch (error) {
            console.error("Error fetching photos:", error);
        } finally {
            isloading = false;
        }
    }
   
    // Use onMount to fetch data when the component is mounted
    onMount(() => {
        fetchPhotos();
       
    });

  
</script>

<div class="photosGallery">
    <div class="autoContent">
        <h2>List Data from internal onMount fetch api function</h2>
        {#if isloading}
            <p>Loading...</p>
        {/if}
        <div class="photosList">
            <ul>
                {#each photos as photo}
                    <li>
                        <div>
                            <img src={photo.thumbnailUrl} alt="#">
                        </div>
                        {photo.title}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
    .photosGallery {
        padding: 50px 0px;
    }
    h2 {
        padding-bottom: 30px;
    }

    ul{ display: flex; flex-wrap: wrap; align-items: flex-start; padding: 0px; margin: 0px -15px;}

    li{ list-style: none; width: 20%; min-width: 250px; margin:0px auto; padding: 15px;}
    img{ width: 100%; height: auto; display: block;}


</style>
