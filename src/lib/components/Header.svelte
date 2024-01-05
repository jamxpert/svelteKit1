<script>
    import { page } from "$app/stores";

    // $: console.log($page);
     $: pageId = $page.route.id;
    // $: console.log(pageId);

    $: url = $page.url.href;
    $: routeId = $page.url.pathname;

    const menu = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        // {
        //     title: "Services",
        //     href: "/services",
        // },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        
    ];

    
</script>

<header>
    <div class="">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid autoContent">
                <a class="navbar-brand" href="/">Logo</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {#each menu as menus}
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    href={menus.href}
                                    class:active={menus.href === "/" ? routeId === "/" : url.includes(menus.href)}
                                    >{menus.title}</a
                                >
                            </li>
                          
                        {/each}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>

<style>
    a.active {
        color: red !important;
    }
    .navbar-nav {
        margin-left: auto;
    }
</style>
