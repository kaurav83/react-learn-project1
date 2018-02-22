import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;
const commentsGetter = state => state.comments.entities
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const { selected, dateRange: { from, to } } = filters;
    console.log('---', 'recomputing filtration');

    return mapToArr(articles).filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to));
    })
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    // return comments.find(comment => comment.id === id);
    return comments.get(id)
});

console.log('selectors.js', commentSelectorFactory);