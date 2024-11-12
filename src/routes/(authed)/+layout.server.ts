import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
    if (!event.cookies.get("token")) {
        throw redirect(303, "/auth/login");
    }
}