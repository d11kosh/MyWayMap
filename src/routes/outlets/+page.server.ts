import { outlets } from '$db/outlets';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const outlets_list = await outlets.find().toArray();

    return {
        outlets_list: outlets_list.map((outlet) => ({
            ...outlet,
            _id: outlet._id.toString(),
        })),
    }
}