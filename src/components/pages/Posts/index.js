import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../../common/searchBar";
import { circle } from "../../../styled-system/patterns";
import {
  fetchFeaturedImages,
  fetchCategories,
  fetchPosts,
} from "../../utils/apiFetch";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredImages, setFeaturedImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
      const categoryIds = postsData.map((post) => post.categories).flat();
      const categoriesData = await fetchCategories(categoryIds);
      setCategories(categoriesData);

      const featuredImageIds = postsData
        .map((post) => post.featured_media)
        .filter((id) => id !== 0);
      const featuredImagesData = await fetchFeaturedImages(featuredImageIds);
      setFeaturedImages(featuredImagesData);
    };

    fetchData();
  }, []);

  console.log("posts", posts);

  const getCategoryName = (postId) => {
    const postCategories =
      posts.find((post) => post.id === postId)?.categories || [];
    const categoryNames = postCategories.map((categoryId) => {
      const category = categories.find((c) => c.id === categoryId);
      return category ? category.name : "";
    });
    return categoryNames.join(", ");
  };

  const getFeaturedImage = (postId) => {
    const featuredImageId = posts.find(
      (post) => post.id === postId
    )?.featured_media;
    const featuredImage = featuredImages.find(
      (image) => image.id === featuredImageId
    );
    return featuredImage?.source_url || ""; // You can use 'media_details.sizes.medium.source_url' for a specific size
  };

  return (
    <>
      <div className="absolute top-96 -left-0 ">
        <SearchBar />
      </div>
      <div className="text-2xl font-bold">posts</div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {Object.keys(posts).length
          ? posts.map((post) => {
              return (
                <div key={post.id} className=" card p-3 w-96 shadow-lg">
                  <Link to={`/posts/${post.id}`}>
                    <div className="w-full h-96">
                      <div
                        className={`${circle({ size: 12 })}  bg-slate-600`}
                      ></div>
                      <img
                        src={getFeaturedImage(post.id)}
                        alt={post.title.rendered}
                        className={`${circle({
                          size: 12,
                          overflow: "hidden",
                        })} w-full h-full object-cover`}
                      />
                    </div>
                    {/* <img src={post.featured_media} alt={post.title.rendered}/> */}
                    <h2 className="text-lg font-bold">
                      {post.title.rendered}{" "}
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: post.date }}></p>
                    {/* <p dangerouslySetInnerHTML={{__html : post.categories}}></p> */}
                    <p>{getCategoryName(post.id)}</p>
                    {/*dangerouslySetInnerHTML pour retirer les balise p intempestive  */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    ></p>
                  </Link>
                </div>
              );
            })
          : "loading...."}
      </div>
    </>
  );
};

export default Posts;
