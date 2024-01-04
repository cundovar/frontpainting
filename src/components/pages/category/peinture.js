import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchCategories, fetchFeaturedImages, fetchPostsCategorie } from "../../utils/apiFetch";
import { circle } from "../../../styled-system/patterns";


const Peinture = () => {
  const [postPeinture, setPostPeinture] = useState([]);
  const [categories,setCategories]=useState([])
  const [featuredImages, setFeaturedImages] = useState([]);
  

useEffect(()=>{
  const categorieId=201
  const fetchData=async()=>{
    const postsData=await fetchPostsCategorie(categorieId)
    setPostPeinture(postsData)
    const categoryIds = postsData.map((post) => post.categories).flat();
    const categoriesData = await fetchCategories(categoryIds);
    setCategories(categoriesData);

    const featuredImageIds = postsData
      .map((post) => post.featured_media)
      .filter((id) => id !== 0);
    const featuredImagesData = await fetchFeaturedImages(featuredImageIds);
    setFeaturedImages(featuredImagesData);

  }
  fetchData()
},[])

const getCategoryName = (postId) => {
  const postCategories =
    postPeinture.find((post) => post.id === postId)?.categories || [];
  const categoryNames = postCategories.map((categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : "";
  });
  return categoryNames.join(", ");
};

const getFeaturedImage = (postId) => {
  const featuredImageId = postPeinture.find(
    (post) => post.id === postId
  )?.featured_media;
  const featuredImage = featuredImages.find(
    (image) => image.id === featuredImageId
  );
  return featuredImage?.source_url || ""; // You can use 'media_details.sizes.medium.source_url' for a specific size
};


 
  return (
    <div className="ml-96">

<div className=" w-4/5 m-auto flex justify-between align-middle flex-wrap gap-10">
      {Object.keys(postPeinture).length
        ? postPeinture.map((post) => {
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
    </div>
       
           
  );
              }

export default Peinture;
