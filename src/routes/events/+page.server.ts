import { events } from '$db/events';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const events_list = await events.find().toArray();
    return {
        events_list: events_list.map((eventlet) => ({
            ...eventlet,
            _id: eventlet._id.toString(),
        })),
    }
}