export const repositoryName = "ledger-uikit";

/** GitHub `owner/name`. Set `NEXT_PUBLIC_GITHUB_REPO` at build time for star counts and links. */
const githubRepo =
  process.env.NEXT_PUBLIC_GITHUB_REPO ?? process.env.GITHUB_REPOSITORY ?? "";

export const repositoryUrl = githubRepo
  ? `https://github.com/${githubRepo}`
  : "";

export async function getRepositoryStars(): Promise<number | null> {
  if (!githubRepo) return null;

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "ledger-uikit",
    };
    const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${githubRepo}`,
      {
        headers,
        cache: "force-cache",
        signal: AbortSignal.timeout(3000),
      },
    );
    if (!response.ok) return null;

    const data = (await response.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
}
