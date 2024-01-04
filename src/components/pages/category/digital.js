import React, { useEffect, useState } from "react";
import { fetchCategories, fetchFeaturedImages, fetchPostsCategorie } from "../../utils/apiFetch";
import { Link } from "react-router-dom";
import { circle } from "../../../styled-system/patterns";


const Digital=()=>{

    const [postPeinture, setPostPeinture] = useState([]);
    const [categories,setCategories]=useState([])
    const [featuredImages, setFeaturedImages] = useState([]);
  
  useEffect(()=>{
    const categorieId=200
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
   
  
  <div className="grid gg grid-cols-3 gap-10">
        {postPeinture ? (
          postPeinture.map((post) => (
            <div key={post.id} className="card p-3 shadow-lg">
              <Link to={`/posts/${post.id}`}>
                <div className="w-full h-96">
                  <div className={`${circle({ size: 12 })} bg-slate-600`}></div>
                  <img
                    src={getFeaturedImage(post.id)}
                    alt={post.title.rendered}
                    className={`${circle({ size: 12, overflow: "hidden" })} w-full h-full object-cover`}
                  />
                </div>
                <h2 className="text-lg font-bold">{post.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{ __html: post.date }}></p>
                <p>{getCategoryName(post.id)}</p>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
              </Link>
              </div>
          ))
        ) : (
          "loading...."
        )}
      </div>
         
             
    );
                }

export default Digital