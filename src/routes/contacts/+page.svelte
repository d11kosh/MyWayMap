<script>
	// You can add contact details here
	const contactDetails = [
		{
			method: 'Email',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 13.5c-1.47 0-2.83-.53-3.91-1.5L3.5 16.29V5.7l4.59 4.59C9.17 11.2 10.54 11.7 12 11.7s2.83-.5 3.91-1.41l4.59-4.59v10.59l-4.59-4.59C14.83 12.97 13.47 13.5 12 13.5zM12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16.5c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5 19.5 7.86 19.5 12 16.14 19.5 12 19.5z"></path></svg>',
			info: 'contact@yourcompany.com'
		},
		{
			method: 'Phone',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M6.62 10.79a15.717 15.717 0 006.59 6.59l2.2-2.2c.27-.27.67-.35 1.01-.23 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C7.26 20 3 15.74 3 10.5c0-.55.45-1 1-1H7.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.13.34.05.73-.23 1.01l-2.2 2.2z"></path></svg>',
			info: '+123 456 7890'
		},
		{
			method: 'Location',
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 12.75 7 12.75S19 14.25 19 9c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"></path></svg>',
			info: '1234 Street Name, City, Country'
		}
	];
</script>

<section class="flex min-h-screen items-center justify-center bg-gray-50 p-6 text-gray-800">
	<div class="container mx-auto max-w-3xl text-center">
		<h1 class="mb-4 text-4xl font-extrabold text-gray-900">Get in Touch</h1>
		<p class="mb-10 text-lg text-gray-600">
			Want to add your commercial or residential property to our platform? Have a question or feedback? We would love to hear from you.
		</p>

		<div class="space-y-8">
			{#each contactDetails as contact}
				<div class="flex items-center justify-center space-x-4">
					{@html contact.icon}
					<div>
						<p class="text-xl font-semibold">{contact.method}</p>
						<p class="text-gray-600">{contact.info}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16">
			<img
				src="/img/undraw_contact.png"
				alt="Contact Us"
				class="h-auto w-full rounded-lg shadow-lg"
			/>
		</div>
	</div>
</section>
