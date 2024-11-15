import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
    if (event.cookies.get("token")) {
        throw redirect(303, "/profile");
    }
}