import type { PageServerLoad } from "./$types.js";
import { users } from '$db/users.js';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ parent }) => {
    await parent();
}

export const actions = {
    default: async ({ request, cookies }) => {
        const form_data = await request.formData();

        const req_body = {
            username: form_data.get('username'),
            password: form_data.get('password'),
        }

        const user = await users.findOne({ username: req_body.username });
        if (!user) {
            return {
                status: 404,
                body: 'No user found'
            }
        }
        
        if (user.password === req_body.password) {
            cookies.set("token", "gj", {path: "/", secure: true, httpOnly: true, maxAge: 60 * 60});
            cookies.set("user", JSON.stringify(user), {path: "/"});
            throw redirect(303, "/profile");
        }

        return {
            success: false,
            message: "Bruh"
        }
    }
}