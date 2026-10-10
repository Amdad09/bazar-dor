import { mongodbAdapter } from '@better-auth/mongo-adapter';
import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';

export const envUrl = (name: string) => {
    const result = process.env[name];
    if (!result) throw new Error(`${name} is required!`);
    return result;
};

const baseUrl = envUrl('BETTER_AUTH_URL');
const secret = envUrl('BETTER_AUTH_SECRET');
const mongoUrl = envUrl('BETTER_AUTH_MONGO_URL');

if (secret.length < 32) throw new Error('At least 32 characters');
const parsedUrl = new URL(baseUrl);
if (parsedUrl.protocol !== 'https://' && process.env.NODE_ENV === 'production')
    throw new Error('Must be nedded htttps protocol!');

const client = new MongoClient(mongoUrl);
const db = client.db('bazar-dor');
export const auth = betterAuth({
    appName: 'bazar-dor',
    secret,
    baseURL: baseUrl,
    trustedOrigins: [parsedUrl.origin],

    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: envUrl('BETTER_AUTH_GOOGLE_CLIENT_ID'),
            clientSecret: envUrl('BETTER_AUTH_GOOGLE_CLIENT_SECRET'),
        },
        github: {
            clientId: envUrl('BETTER_AUTH_GITHUB_CLIENT_ID'),
            clientSecret: envUrl('BETTER_AUTH_GITHUB_CLIENT_SECRET'),
        },
    },
});
