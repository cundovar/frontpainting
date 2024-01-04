

import axios from "axios";


export const fetchPosts=async()=>{

  try{
    const postsResponse=await axios.get('http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/posts')
    return postsResponse.data
  }catch(error){
    console.error('erreur data posts',error)
    return[]
  }
}

export const fetchPostsCategorie=async(categoryId)=>{
  try{
    const responsePeinture=await axios.get( `http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/posts?categories=${categoryId}`) 
  return responsePeinture.data
}catch(error){
  console.error('erreur data post categorie',error)
  return[]
}
}


export const fetchCategories=async(categoryIds)=>{
  try {
    const categoriesResponse = await axios.get(`http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/categories?include=${categoryIds.join(',')}`);
    return categoriesResponse.data;
  } catch (error) {
    console.error('erreur categories', error);
    return [];
  }
};

export const fetchFeaturedImages = async (featuredImageIds) => {
  try {
    const featuredImagesResponse = await axios.get(`http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/media?include=${featuredImageIds.join(',')}`);
    return featuredImagesResponse.data;
  } catch (error) {
    console.error('erreur images', error);
    return [];
  }
};


export const getCategoryName = (postId, posts, categories) => {
  const postCategories = posts.find((post) => post.id === postId)?.categories || [];
  const categoryNames = postCategories.map((categoryId) => {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : '';
  });
  return categoryNames.join(', ');
};

export const getFeaturedImage = (postId, posts, featuredImages) => {
  const featuredImageId = posts.find((post) => post.id === postId)?.featured_media;
  const featuredImage = featuredImages.find((image) => image.id === featuredImageId);
  return featuredImage?.source_url || '';
};

