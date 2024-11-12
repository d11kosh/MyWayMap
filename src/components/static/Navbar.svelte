<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-bold dark:text-white"> MyWayMap </span>
	</NavBrand>
	<NavUl {hidden}>
		<NavLi href="/" activeClass = {""}>Home</NavLi>
		<NavLi href="/outlets">Outlets</NavLi>
		<NavLi href="/events">Events</NavLi>
		<NavLi href="/contacts">Contact us</NavLi>
	</NavUl>
	<a href="/auth/login">
		<Button>Account</Button>
	</a>
	<NavHamburger on:click={toggle} />
</Navbar>
