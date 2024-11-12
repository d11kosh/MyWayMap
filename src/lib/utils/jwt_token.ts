import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { JWT_SECRET } from '$env/static/private';

const SECRET = new TextEncoder().encode(JWT_SECRET);

export async function create_token(payload: JWTPayload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .sign(SECRET);
}

export async function verify_token(token: string) {
    return await jwtVerify(token, SECRET);
}