import { slugify } from "@/lib/uutils.ts'0/textConverter";
import { Post } from "@/types";

const taxonomyFilter = (posts: Post[], name: string, key: any) =>
  posts.filter((post) =>
    //@ts-ignore
    post.frontmatter[name].map((name: string) => slugify(name)).includes(key),
  );

export default taxonomyFilter;
