import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchBar = ({onsubmit}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [matiere,setMatiere]=useState([])
  const [selectedMatiere,setSelectedMatiere]=useState('')
  useEffect(()=>{
    axios
    .get("http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/matiere")
    .then((response)=>{
        setMatiere(response.data)
    })
    .catch((error)=>{
        console.error("erreur recup matière :", error);
        
    })
},[])



  useEffect(() => {
    axios
      .get("http://localhost/wp-back/wp-test/wordpress/wp-json/wp/v2/categories")
      .then((response) => {
        setCategories(response.data);
    })
    .catch((error) => {
        console.error("erreur recup categories :", error);
    });
}, []);


const handleSubmit=(e)=>{
    e.preventDefault()
    onsubmit(selectedCategorie,selectedMatiere)


}
useEffect(()=>{
    console.log("testp",selectedCategorie,selectedMatiere)
})


console.log('matiere',matiere)
  console.log("cat:",categories)
  return (
    <div className="search">
    
      <div className="seach_results ">
    
        <form className="flex-col flex space-y-5"
        onSubmit={handleSubmit} >

            <p>filtrer les oeuvres </p>

        <select
          id="categorySelect"
          value={selectedCategorie}
          onChange={(e) => setSelectedCategorie(e.target.value)}
        >
          <option value=""> Sélectionnez une catégorie </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>


        {/* <label htmlFor="matiereSelect">Sélectionnez une matiere :</label> */}
        <select
          id="matiereSelect"
          value={selectedMatiere}
          onChange={(e) => setSelectedMatiere(e.target.value)}
        >
          <option value=""> Sélectionnez une matiere </option>
          {matiere.map((matiere) => (
            <option key={matiere.id} value={matiere.id}>
              {matiere.name}
            </option>
          ))}
        </select>

        <button type="submit">filtrer</button>

        </form>
      </div>
    </div>
  );
};

export default SearchBar;
