import type { Handle } from '@sveltejs/kit';
import { start_mongo } from '$db';

// Connect to MongoDB
start_mongo().then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error(err);
});

export const handle: Handle = async ({ event, resolve }) => {
    return await resolve(event);
}