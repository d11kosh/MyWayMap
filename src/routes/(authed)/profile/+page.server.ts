import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ parent, cookies }) => {
    await parent();
    return JSON.parse(cookies.get("user") ?? "null");
}