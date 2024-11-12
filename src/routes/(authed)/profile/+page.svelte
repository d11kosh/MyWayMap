<script lang="ts">
    import { Avatar, Button, ButtonGroup } from "flowbite-svelte";
    import EventCard from "$components/dynamic/EventCard.svelte";

    export let data;
</script>

<section class="max-w-5xl m-auto mt-12">
    <div class=" max-w-md m-auto flex flex-wrap justify-between">
        <Avatar size="xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s" />
        <div class="mt-3">
            <h1 class="text-3xl font-medium">Hello, {data.name}!</h1>
            <div class="mt-3 flex">
                <p class="font-medium">Account status:&nbsp;</p>
                <p class="text-green-600">Active</p>
            </div>
            <form action="/logout" method="post">
                <ButtonGroup divClass = "mt-3">
                    <Button href="/profile/edit">Edit profile</Button>
                    <Button type="submit">Log out</Button>
                </ButtonGroup>
            </form>
        </div>
    </div>
    <div class="mt-20">
        <h2 class="text-2xl font-semibold text-center">Your bookmarks 📚</h2>
        <div class="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard event_info = {
                {
                    title: "Test event",
                    date: "2021-12-12",
                    location: "Location 1",
                    description: "Description 1",
                }
            }/>
            <EventCard event_info = {
                {
                    title: "Test event",
                    date: "2021-12-12",
                    location: "Location 1",
                    description: "Description 1",
                }
            }/>
            <EventCard event_info = {
                {
                    title: "Test event",
                    date: "2021-12-12",
                    location: "Location 1",
                    description: "Description 1",
                }
            }/>
        </div>
</section>