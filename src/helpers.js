export const addToWishlist = (produs) => {
	const produsListStorage = localStorage.getItem("produsList");
	if (produsListStorage === null) {
		const produsList = [];
		produsList.push(produs);
		localStorage.setItem("produsList", JSON.stringify(produsList));
	} else {
		const storageArray = JSON.parse(produsListStorage);
		if (
			!storageArray.find((produsStorage) => {
				return produsStorage.title === produs.title;
			})
		) {
			storageArray.push(produs);
			localStorage.setItem("produsList", JSON.stringify(storageArray));
		}
	}
};