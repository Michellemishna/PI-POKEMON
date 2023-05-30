import style from "./Paginator.module.css"

const Paginado = ({pokemons,page,viewPage,paginado}) => {
   const pageNum=[];
   const all = Math.ceil(pokemons/viewPage);

   for (let i = 1; i <= all; i++) {
    pageNum.push(i)
   }
   let startPage = page - 13;
   let endPage = page + 12;

   if(startPage < 1){
    endPage += Math.abs(startPage) + 1;
    startPage = 1;
   }
   if(endPage > all){
    startPage -= endPage - all;
    endPage = all;
   }

   const pages = pageNum.slice(startPage - 1, endPage);

   return(
    <div className={style.Pages}>
        {all > 1 && (
                <div>
                    <button onClick={page > 1 ? ()=> paginado(page - 1): null}
                    disabled={page === 1 ? true : false}>Prev</button>
                {pages.length > 0 && pages.map(pag => {
                    return(
                        <button key={pag}
                        onClick={()=>paginado(pag)}
                        disabled={page === pag ? true : false}>{pag}</button>
                    )})}
                <button onClick={page < all ? ()=> paginado(page + 1): null}
                    disabled={page === all ? true : false}>Next</button>
                </div>
            )}
    </div>
   )
}

export default Paginado;