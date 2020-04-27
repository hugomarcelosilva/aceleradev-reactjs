const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

const getProductsByIds = (ids, allProducts) => {
	return allProducts.filter((product) => ids.includes(product.id));
};

const getProductsCategories = (filteredProducts) => {
	return filteredProducts.map((product) => product.category);
};

const getCategoryQuantity = (categories) => [...new Set(categories)].length;

const getRegularPrices = (cartProducts) =>
	cartProducts.reduce((acc, product) => {
		return acc + product.regularPrice;
	}, 0);

const getPromotionPrices = (cartProducts, promotionRule) =>
	cartProducts.reduce((acc, product) => {
		const foundPromotion = product.promotions.find((promotion) =>
			promotion.looks.includes(promotionRule)
		);

		if (foundPromotion) {
			acc = acc + foundPromotion.price;
		} else {
			acc = acc + product.regularPrice;
		}

		return acc;
	}, 0);

const getPromotion = quantity => {
	return quantity <= 3
    ? promotions[quantity - 1]
    : promotions[3];
}

parseProducts = products => {
	return products.map(({ name, category }) => {
		return { name, category };
	})
};

function getShoppingCart(ids, productsList) {
	const cartProducts = getProductsByIds(ids, productsList);
	const categoryProducts = getProductsCategories(cartProducts);
	const quantity = getCategoryQuantity(categoryProducts);
	const promotion = getPromotion(quantity);
	const products = parseProducts(cartProducts);
	const totalRegularPrice = getRegularPrices(cartProducts);
	const totalPriceWithDiscounts = getPromotionPrices(cartProducts, promotion);
	const discountValue = totalRegularPrice - totalPriceWithDiscounts;
	const discount = `${((discountValue / totalRegularPrice) * 100).toFixed(2)}%`;

	return {
		products,
		promotion,
		totalPrice: totalPriceWithDiscounts.toFixed(2),
		discountValue: discountValue.toFixed(2),
		discount,
	};
}

module.exports = { getShoppingCart };
