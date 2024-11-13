const ProductFilter = () => {
    return (
        <div className="col-md-3 mb-4">
            <h5 className="mb-3">Filtres</h5>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Catégorie</label>
                <select id="category" className="form-select">
                    <option value="">Toutes</option>
                    <option value="electronics">Électronique</option>
                    <option value="fashion">Mode</option>
                    <option value="home">Maison</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="priceRange" className="form-label">Tranche de prix</label>
                <select id="priceRange" className="form-select">
                    <option value="">Tous</option>
                    <option value="0-50">0€ - 50€</option>
                    <option value="50-100">50€ - 100€</option>
                    <option value="100-200">100€ - 200€</option>
                </select>
            </div>
        </div>
    );
}

export default ProductFilter;