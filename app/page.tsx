import { getGithubProfile, getGithubRepos, getGithubEvents, getGithubOrg, getGithubStarred, getGithubFollowers } from '@/lib/github';
import { Hero, About, Skills, Projects, Contact, Footer, Navbar, ActivityFeed, ProfileStats } from '@/components/portfolio';

export default async function Home() {
  const username = "CasuallyEpic";
  let repos = [];
  let profile = null;
  let events = [];
  let orgs = [];
  let starred = [];
  let followers = [];

  try {
    [profile, repos, events, orgs, starred, followers] = await Promise.all([
      getGithubProfile(username),
      getGithubRepos(username),
      getGithubEvents(username),
      getGithubOrg(username),
      getGithubStarred(username),
      getGithubFollowers(username)
    ]);
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }

  return (
    <main className="relative">
      <Navbar profile={profile} />
      <Hero profile={profile} />
      <ProfileStats profile={profile} starredRepos={starred} followers={followers} />
      <About />
      <Skills repos={repos} />
      <Projects repos={repos} />
      <ActivityFeed events={events} />
      <Contact />
      <Footer profile={profile} />
    </main>
  );
}
