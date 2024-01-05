<script>
    import Header from "../lib/components/Header.svelte";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import '../styles/style.css';
    import '../styles/responsive.css';

    import { onMount } from 'svelte';
	onMount(async () => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js');
	}); 
</script>
<main>
<Header/>

<slot/>
 
</main>

<svelte:head>
    <title>Frontend bootstrap svelteKit example</title>
 </svelte:head>
 