<script>
    import Banner from "../lib/components/Banner.svelte";
    import ProductsList from "../lib/components/ProductsList.svelte";
    let bannerTitle = "This is banner title of Home";
    let bannerText =
        " Sed do eiusmod tempor incididunt  xcepteur sint occaecat cupidatat non proident,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Esunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
</script>

<div class="content">
    <Banner {bannerTitle} {bannerText} />
    
    <ProductsList />
 </div> 


