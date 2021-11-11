# Imported Cache Busting

This is a slightly contrived example of an issue in Gatsby that occurs in the niche situation of importing an external file into `gatsby-config` as a plugin's `pluginOptions`- when that imported file changes but `gatsby-config` does not, the resulting build does not have its cache cleared and can cause changes that would result from the configuration change not to occur in the resulting build.

## Steps to recreate

1. `gatsby develop`

2. Navigate to `localhost:8000/example-post`

3. Uncomment the commented line in `mdx-options.js`

4. Relaunch `gatsby develop` and refresh `localhost:8000/example-post`

5. Notice that the page does not use `post-template.js` (shown with padding and a black border)

6. Close `gatsby develop` and run `gatsby clean` before relaunching

7. Refresh the browser again, and notice that the page changes once the stale cache is cleared
