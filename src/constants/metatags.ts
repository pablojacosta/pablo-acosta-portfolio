import { OG_IMAGE } from "./externalLinks";
import { WEB_DOMAIN } from "./webDomain";

export const METATAGS: IMetatags = {
  author: "Pablo Acosta",
  title: "Pablo Acosta's Portfolio",
  description: "Pablo Acosta's Portfolio",
  og_url: WEB_DOMAIN,
  og_type: "website",
  og_image: OG_IMAGE,
};

interface IMetatags {
  author: string;
  title: string;
  description: string;
  og_url: string;
  og_type: string;
  og_image: string;
}
