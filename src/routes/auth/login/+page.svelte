<script>
	import { enhance } from '$app/forms';
	import { Input, Button, Label } from 'flowbite-svelte';
	import { FacebookSolid, TwitterSolid, WhatsappSolid } from 'flowbite-svelte-icons';
</script>

<div class="mt-24">
	<form class="mx-auto max-w-sm" method="post" use:enhance>
		<div class="mt-5">
			<Label for="username" class="mb-2">Username</Label>
			<Input type="text" id="username" placeholder="Someuser123" name="username" required />
		</div>
		<div class="mt-5">
			<Label for="password" class="mb-2">Password</Label>
			<Input type="password" id="password" placeholder="password" name="password" required />
		</div>
		<div class="m-auto mt-5 flex w-36 justify-between">
			<FacebookSolid class="h-8 w-8" />
			<TwitterSolid class="h-8 w-8" />
			<WhatsappSolid class="h-8 w-8" />
		</div>
		<div class="mt-10 flex flex-col items-center">
			<Button type="submit">Log in</Button>
		</div>
	</form>
	<span class="mx-auto max-w-sm">
		<p class="mt-10 text-center">
			No account? <a href="/auth/register" class="underline">Register</a>
		</p>
	</span>
</div>
