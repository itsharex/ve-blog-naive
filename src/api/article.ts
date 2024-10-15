import request from "@/utils/request";
import type {
  ArticleArchivesQueryReq,
  ArticleClassifyQueryReq,
  ArticleDeatils,
  ArticleHomeQueryReq,
  EmptyReq,
  EmptyResp,
  IdReq,
  PageResp,
} from "./types";

/** "文章归档(时间轴)" */
export function findArticleArchivesApi(data?: ArticleArchivesQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/article/get_article_archives",
    method: "post",
    data: data,
  });
}

/** "通过分类获取文章列表" */
export function findArticleClassifyCategoryApi(data?: ArticleClassifyQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/article/get_article_classify_category",
    method: "post",
    data: data,
  });
}

/** "通过标签获取文章列表" */
export function findArticleClassifyTagApi(data?: ArticleClassifyQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/article/get_article_classify_tag",
    method: "post",
    data: data,
  });
}

/** "获取文章详情" */
export function getArticleDetailsApi(data?: IdReq): Promise<IApiResponse<ArticleDeatils>> {
  return request({
    url: "/api/v1/article/get_article_details",
    method: "post",
    data: data,
  });
}

/** "获取首页文章列表" */
export function findArticleHomeListApi(data?: ArticleHomeQueryReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/article/get_article_home_list",
    method: "post",
    data: data,
  });
}

/** "获取首页推荐文章列表" */
export function findArticleRecommendApi(data?: EmptyReq): Promise<IApiResponse<PageResp>> {
  return request({
    url: "/api/v1/article/get_article_recommend",
    method: "post",
    data: data,
  });
}

/** "点赞文章" */
export function likeArticleApi(data?: IdReq): Promise<IApiResponse<EmptyResp>> {
  return request({
    url: "/api/v1/article/like_article",
    method: "post",
    data: data,
  });
}