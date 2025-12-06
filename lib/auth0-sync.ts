import { getSession } from '@auth0/nextjs-auth0';
import { createUser, getUser } from './db';

/**
 * Sync Auth0 user to database
 * Call this on login or when accessing protected routes
 */
export async function syncAuth0User() {
  const session = await getSession();
  
  if (!session?.user) {
    return null;
  }

  const auth0Id = session.user.sub; // Auth0 user ID format: "auth0|xxxxx"
  const email = session.user.email;
  const name = session.user.name || '';
  const firstName = session.user.given_name || name.split(' ')[0] || '';
  const lastName = session.user.family_name || name.split(' ').slice(1).join(' ') || '';

  // Check if user exists
  const existingUser = await getUser(auth0Id);

  if (existingUser) {
    return existingUser;
  }

  // Create new user
  const newUser = await createUser({
    auth0_id: auth0Id,
    email: email || '',
    first_name: firstName,
    last_name: lastName,
  });

  return newUser;
}

