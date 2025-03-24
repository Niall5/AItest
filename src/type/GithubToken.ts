type GithubBrand = {
    readonly Email: unique symbol;
};

export type GithubToken = string & GithubBrand;

export function createGithubToken(token: string): GithubToken {
    const githubUrlPattern = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9-]{1,39})\/?$/;

    function extractGitHubUsername(url: string): string | null {
        const match = url.match(githubUrlPattern);
        return match ? match[1] : null;
    }

    // Example usage
    const urls = [
        'https://github.com/Niall5',
        'http://github.com/Niall5',
        'www.github.com/Niall5',
        'github.com/Niall5',
        'https://www.github.com/Niall5/',
        'http://www.github.com/Niall5/'
    ];

    urls.forEach((url) => {
        const token = extractGitHubUsername(url);
        console.log(token ? `GitHub username: ${token}` : 'Invalid GitHub URL');
    });
    return token as GithubToken;
}