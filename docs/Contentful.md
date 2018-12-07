# Contentful
This proof of concept leverages the abilities of Contentful to populate page content. From a content management perspective, however, there's a few issues we discovered, along with some great advantages.

## Context
When creating content, Contentful considers "Draft" content and "Published" content as two separate buckets of content. A staging environment configured with Contentful preview tokens will show draft/unpublished content, but a production environment configured with Contentful delivery tokens will only show published content.

## Pros
### Migrating spaces
- Migrating content, content types, assets, etc. is easy to do with Contentful's CLI.
### Bulk changes
- Making changes to a field across multiple rooms is quick with Contentful's command line tool, which allows you to export your Contentful space into JSON format. This allows you to sidestep Contentful's sometimes-slow UI in favor of simple copy-paste work.
### User Roles
- Custom user roles can be defined, and once defined, work like they should. For example, you can have authors with the ability to publish content to a production environment as opposed to just a preview environment.

## Gotchas
Everything below in a nutshell: it needs to be decided very early on what Contentful should and should not allow authors of varying roles to do. UI component data fields should be designed based on GraphQL responses (aka *"GraphQL First"*) to avoid the need for code-based interpretation of anything fed in from Contentful.

### Validation
- Circular References: when creating a Room, in the "Similar Rooms" field, there is nothing stopping a content author from linking the same room. In practice, this can be problematic when it comes to GraphQL queries.
- Image previews: when specifying the URL to an image in Contentful using an image URL field, there is nothing to stop its publishing.
### Setup Overhead
- Setting up the validation rules that Contentful *does* support is time consuming.
### User Roles
- Certain options appear in the Contentful UI even though a user may not have the right privileges to use that option. Instead, nothing happens when those options are clicked. For example "Create Room and Link" when making a Room Detail Page.
### Digital Asset Management
- The project's current build pipeline appends to image URL's to fetch the image from MGM's servers at a different resolution. Contentful does not support this.
- In Contentful, one can, however, resize and/or crop an image.
### Reuse of Content Models
- You cannot conditionally require a field. For example, assume that the Room Amenity content type does not always have to have an image. When linking the amenity to the part of a Room Detail page that requires an image, there is nothing in Contentful to conditionally require that any linked amenities of that content type should be ones with images. 
### Untitled Everything
- Any time you click a button on Contentful with the word "Create", something gets saved no matter what. This happens even if you don't fill in any fields, and even if you immediately click away. Content gets saved as "Untitled" if no title is specified and automatically gets put into Draft status. Anything unwanted __must explicitly be deleted__ using the site's Content tab.
### Fetching Content
- If components are not designed with GraphQL in mind, some translation of GraphQL responses needs to happen in order to shoehorn fetched data into component props. There's a few ways to do this, with the main way being "aliasing" GraphQL responses. In this project's /next/queries folder, there is a function for each page called translateResponse that illustrates this issue.
### Everything Must Live in a Single Space
- There's no way to query content using GraphQL across multiple spaces.
- On the bright side, Contentful's cli tool makes it very easy to move content between spaces.
### No Default Values
- Contentful allows you to require that fields be filled out, but does not have the ability to pre-populate them with a default value. For example, when creating a room, Contentful cannot set a default number for square feet.
### Presentation Layer
- Contentful is *CONTENT*ful, not *PRESENTATION*ful. Any control over a page's/content type's presentation in Contentful can appear somewhat "hacky" and requires developer insight to be properly implemented.
