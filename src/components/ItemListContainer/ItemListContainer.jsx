import React from 'react'
import { useState  } from 'react'
import './ItemListContainer.css'
import Searcher from '../Searcher/Searcher';
import ItemList from '../ItemList/ItemList';
import Contact from '../Contact/Contact';




function ItemListContainer({item}) {

  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState('');


  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };


  const results = item.filter((item) => {
    const title = String(item.title || '');
    const authorName = String(item.author_name || '');
    const ebookAccess = String(item.ebook_access || '');



    const matchesSearch = search ? 
      title.toLowerCase().includes(search.toLowerCase()) ||
      authorName.toLowerCase().includes(search.toLowerCase()) : true;

    const matchesEbookAccess = isChecked ? ebookAccess.toLowerCase() === 'public' : true;

    return matchesSearch && matchesEbookAccess;

  });
   console.log(results)
  return ( 
    <div>
      <Searcher 
        search={search} 
        handleChange={handleSearchChange} 
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}

      />
      <section className='item-list-container'> 
        {

            item.length === 0 ?
            <h2>cargando...</h2>
            :
            
            <ItemList item={results}/>
            

        }
      </section>
      <Contact />
    </div>

  )
}

export default ItemListContainer;