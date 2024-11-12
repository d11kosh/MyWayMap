import { users } from '$db/users.js';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ parent }) => {
    await parent();
}

export const actions = {
    default: async ({ request, cookies }) => {
        const form_data = await request.formData();

        const req_body = {
            username: form_data.get('username'),
            password: form_data.get('password'),
            name: form_data.get('name')
        }

        const user = await users.findOne({ username: req_body.username });
        if (user) {
            return {
                status: 400,
                body: 'Username already exists'
            }
        }

        const { insertedId } = await users.insertOne(req_body);
        if (insertedId) {
            cookies.set("token", "gj", {path: "/", secure: true, httpOnly: true, maxAge: 60 * 60});
            cookies.set("user", JSON.stringify(req_body), {path: "/"});
            throw redirect(303, "/profile");
        }

        return {
            success: false,
            message: "Bruh"
        }
    }
}