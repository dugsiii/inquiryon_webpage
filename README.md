### File instructions

**layout.tsx:** app entry point. Slap Google Analytics here

**bubbleText.tsx:** this is where you edit/add the text in the bubbles. It will automatically scale and add bubbles (just watch out for which array it's in)

**faq.tsx:** there's an array called faqText where you can edit the faq. It will automatically add new sections

**how.tsx:** if you need to change the "stages" text

**features.tsx:** where the text/titles are. also can uncomment the Wassup button here.

**cta.tsx/hero.tsx:** link up the forms here

**navbar.tsx:** uncomment the commented section if you want to bring back the anchor links

**/content/blog:** where I put some random placeholder blog posts. **updates.tsx** is the file that fetches those blog posts (using some utility files from **blog-utils.tsx**), and **/app/blog/\[slug\]/page.tsx** is how those posts are displayed

### Instructions

Starting up the the dev server:

```
npm run dev
```
