import {join} from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

const envFilename = process.argv[2] ?? '.env';
const envPath = join(process.cwd(), envFilename);
const envAvailable = await fs.promises.access(envPath, fs.constants.F_OK).then(() => true).catch(() => false);

if(envFilename.endsWith('example')) {
    throw new Error('You should not use the example configuration file.');
}

if(!envAvailable) {
    throw new Error('No suitable .env file found.');
}

dotenv.config({path: join(process.cwd(), envFilename)});

export const CACHE_PATH = './cache.json';
export const TWITTER_USERNAME = process.env.TWITTER_USERNAME || '';
export const RSSHUB_INSTANCE = process.env.RSSHUB_INSTANCE || '';
export const MASTODON_INSTANCE = process.env.MASTODON_INSTANCE || '';
export const MASTODON_ACCESS_TOKEN = process.env.MASTODON_ACCESS_TOKEN || '';
export const INSTANCE_ID = process.env.INSTANCE_ID ?? 'instance';
export const SYNC_PROFILE_DESCRIPTION = (process.env.SYNC_PROFILE_DESCRIPTION || 'false') === 'true';
export const SYNC_PROFILE_PICTURE = (process.env.SYNC_PROFILE_PICTURE || 'false') === 'true';
export const SYNC_PROFILE_NAME = (process.env.SYNC_PROFILE_NAME || 'false') === 'true';
export const SYNC_PROFILE_HEADER = (process.env.SYNC_PROFILE_HEADER  || 'false') === 'true';
