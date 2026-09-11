export const repositoryOwner = "zeyadetman";
export const repositoryName = "ledger-uikit";
export const repositoryUrl = `https://github.com/${repositoryOwner}/${repositoryName}`;

export async function getRepositoryStars(): Promise<number | null> {
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
      `https://api.github.com/repos/${repositoryOwner}/${repositoryName}`,
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
