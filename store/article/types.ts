import { Article } from '~/models/article'

export interface ArticleState {
    articles: Article[];
    article: Article | null;
    error: boolean;
}
