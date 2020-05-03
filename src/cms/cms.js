import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import HomePagePreview from "./preview-templates/HomePagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
