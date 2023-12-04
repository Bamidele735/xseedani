// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import blockchain from "./blockchain";
import developer from "./developer";
import logo from "./logo";
import games from "./games";
import review from "./review";
import genre from "./genre";
import operatingSystem from "./operatingSystem";
import currentStage from "./currentStage";
import banner from "./banner";
import icons from "./icons";
import socialMediaLinks from "./socialMediaLinks";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    // post,
    developer,
    blockchain,
    logo,
    games,
    blockContent,
    review,
    genre,
    operatingSystem,
    currentStage,
    banner,
    icons,
    socialMediaLinks,
  ]),
});
