import { createGithubToken, GithubToken } from '..';

// filepath: c:\Users\NiallAllison\DFX\AItest\src\type\GithubToken.test.ts

describe('createGithubToken', () => {
    it('should extract GitHub username from valid URLs', () => {
        const validUrls = [
            'https://github.com/Niall5',
            'http://github.com/Niall5',
            'www.github.com/Niall5',
            'github.com/Niall5',
            'https://www.github.com/Niall5/',
            'http://www.github.com/Niall5/'
        ];

        validUrls.forEach(url => {
            const token = createGithubToken(url);
            expect(token).toBe('Niall5');
        });
    });

    it('should return the original token for invalid URLs', () => {
        const invalidUrls = [
            'https://github.com/',
            'http://github.com/',
            'www.github.com/',
            'github.com/',
            'https://www.github.com/',
            'http://www.github.com/',
            'https://example.com/Niall5',
            'http://example.com/Niall5'
        ];

        invalidUrls.forEach(url => {
            const token = createGithubToken(url);
            expect(token).toBe(url);
        });
    });

    it('should return a token of type GithubToken', () => {
        const url = 'https://github.com/Niall5';
        const token = createGithubToken(url);
        expect(typeof token).toBe('string');
        expect(token as GithubToken).toBe(token);
    });
});