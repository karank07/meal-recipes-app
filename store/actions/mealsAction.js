export const TOGGLE_FAV = 'TOGGLE_FAV';
export const APPLY_FILTERS = 'APPLY_FILTERS';

export const toggleFav = (id) => {
    return { type: TOGGLE_FAV, id: id };
};

export const applyFilters = (filterSettings) => {
    return { type: APPLY_FILTERS, filters: filterSettings };
};