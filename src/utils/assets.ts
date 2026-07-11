/**
 * Dynamic asset path resolver that works perfectly across:
 * 1. AI Studio Sandbox development/preview URLs
 * 2. Custom domains on GitHub Pages (e.g., https://ella.privsurf.store/)
 * 3. Standard GitHub Pages URLs with subpaths (e.g., https://username.github.io/repo-name/)
 */
export const getAssetUrl = (url: string): string => {
  if (!url) return '';
  
  // Remove leading './' or '/' to normalize the path
  const cleanUrl = url.startsWith('./') ? url.substring(2) : url.startsWith('/') ? url.substring(1) : url;

  let base = import.meta.env.BASE_URL || '/';
  
  // If base is configured as relative (like './' or '.'), we dynamically resolve the base path at runtime
  if (base === './' || base === '.' || !base.startsWith('/')) {
    const isGitHubIo = window.location.hostname.endsWith('github.io');
    if (isGitHubIo) {
      // On standard *.github.io, the first segment of the pathname is the repository name
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      if (pathSegments.length > 0) {
        base = '/' + pathSegments[0] + '/';
      } else {
        base = '/';
      }
    } else {
      // For custom domains, localhost, or AI Studio container preview, the asset root is always the domain root '/'
      base = '/';
    }
  }
  
  if (!base.endsWith('/')) base += '/';
  return base + cleanUrl;
};
