export async function getGithubProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
}

export async function getGithubRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Failed to fetch repos');
  return res.json();
}

export async function getGithubEvents(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/events/public?per_page=10`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function getGithubOrg(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/orgs`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function getGithubStarred(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/starred?per_page=100`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function getGithubFollowers(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/followers?per_page=100`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
}
