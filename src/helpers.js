// pas7 wishlist: pune datele in local storage folosind functia addToWishlist
// care primeste ca input toate produsele
export const addToWishlist = (produs)=>{
	const postListStorage = localStorage.getItem("produsList");
	// daca local storage ul este gol, punem produsul din wishlist in el
	if(postListStorage === null) {
		const produsList = [];
		produsList.push(produs);
		localStorage.setItem("produsList", JSON.stringify(produsList));
	} else {
		const storageArray = JSON.parse(postListStorage);
		if (	
			!storageArray.find((produsStorage) => {
				return produsStorage.id === produs.id;
			})
			) {	
		storageArray.push(produs);
		localStorage.setItem("produsList", JSON.stringify(storageArray));
		}
	}
};