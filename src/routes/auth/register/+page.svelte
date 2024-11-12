<script>
	import { enhance } from '$app/forms';
	import { Input, Button, Label } from 'flowbite-svelte';
	import { FacebookSolid, TwitterSolid, WhatsappSolid } from 'flowbite-svelte-icons';
</script>

<div class="mt-24">
	<form class="mx-auto max-w-sm" method="POST" use:enhance>
		<div class="mt-5">
			<Label for="nickname" class="mb-2">Username</Label>
			<Input type="text" id="nickname" placeholder="reader123" name="username" required />
		</div>
		<div class="mt-5">
			<Label for="nickname" class="mb-2">Your name</Label>
			<Input type="text" id="name" placeholder="John Doe" name="name" required />
		</div>
		<div class="mt-5">
			<Label for="password" class="mb-2">Password</Label>
			<Input type="password" id="password" placeholder="password" name="password" required />
		</div>
		<div class="mt-5">
			<Label for="password" class="mb-2">Repeat password</Label>
			<Input type="password" id="retype-password" placeholder="retype password" required />
		</div>
		<div class="m-auto mt-5 flex w-36 justify-between">
			<FacebookSolid class="h-8 w-8" />
			<TwitterSolid class="h-8 w-8" />
			<WhatsappSolid class="h-8 w-8" />
		</div>
		<div class="mt-10 flex flex-col items-center">
			<Button type="submit">Create account</Button>
		</div>
	</form>
	<span class="mx-auto max-w-sm">
		<p class="mt-10 text-center">
			Already have account? <a href="/auth/login" class="underline">Log in</a>
		</p>
	</span>
</div>