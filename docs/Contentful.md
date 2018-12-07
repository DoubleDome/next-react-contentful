# Contentful
This proof of concept leverages the abilities of Contentful to populate page content. From a content management perspective, however, there's a few issues we discovered.

## Context
When creating content, Contentful considers "Draft" content and "Published" content as two separate buckets of content. A staging environment configured with Contentful preview tokens will show draft/unpublished content, but a production environment configured with Contentful delivery tokens will only show published content.

## Gotchas
### Validation
- Circular References
- Image previews: when specifying the URL to an image in Contentful using an image URL field, there is nothing to stop its publishing.
### User Privileges
- Certain options appear in the Contentful UI even though a user may not have the right privileges to use that option. Instead, nothing happens when those options are clicked. For example "Create Room and Link" when making a Room Detail Page.
### Digital Asset Management
- The project's current build pipeline appends to image URL's to fetch the image from MGM's servers at a different resolution. Contentful does not support this.
