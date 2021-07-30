import React from "react";
import {
  BlogCard,
  BlogContainer,
  BlogH1,
  BlogIcon,
  BlogP,
  BlogWrapper,
} from "./BlogElements";
import blog1 from "../../images/blog-1.svg";
import blog2 from "../../images/blog-2.svg";
import blog3 from "../../images/blog-3.svg";
const Blog = () => {
  const redirectBlog = () => {
    window.open("https://www.blog.nukanghub.com/", "_blank");
  };
  return (
    <>
      <BlogContainer id="blog">
        <BlogH1>Blog</BlogH1>
        <BlogWrapper>
          <BlogCard>
            <BlogIcon src={blog1} onClick={redirectBlog} />
            <BlogP>Tukang Lantai, Nukang Hub Luncurkan Platform Baru</BlogP>
          </BlogCard>
          <BlogCard>
            <BlogIcon src={blog2} onClick={redirectBlog} />
            <BlogP>Tukang Lantai, Nukang Hub Luncurkan Platform Baru</BlogP>
          </BlogCard>
          <BlogCard>
            <BlogIcon src={blog3} onClick={redirectBlog} />
            <BlogP>Tukang Lantai, Nukang Hub Luncurkan Platform Baru</BlogP>
          </BlogCard>
        </BlogWrapper>
      </BlogContainer>
    </>
  );
};

export default Blog;
