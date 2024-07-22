
import { useParams } from 'react-router-dom';




function ItemDetail({item}) {
  
  const {id} = useParams();

    const itemIndex = item[id];
      console.log(id)
      console.log(itemIndex.title)

      

      const title = String(itemIndex.title || ''); 
      const authorName = String(itemIndex.author_name || '');
      const cover = String(itemIndex.cover_i || '');
      const price = itemIndex.want_to_read_count;

      console.log(authorName)
      console.log(cover)

        return (
          <article key={itemIndex.index} className='card-item'>
            <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt={`Cover of ${title}`}></img>
            <h2>{title}</h2>
            <p >{authorName}</p>
            <p>{price/10}$</p>
            <button className='btn'>Añadir al carrito</button>
        </article>
          
        )
}

export default ItemDetail;