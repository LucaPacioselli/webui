import { BaseErrorResponseModel, BaseResponseModel } from '@/lib/sdk/usecase-models';

/**
 * @interface GetFTSHistoryLinksRequest represents the RequestModel for get_fts_history_links usecase
 */
export interface GetFTSHistoryLinksRequest {
    scope: string;
    name: string;
    rse: string;
    limit?: number;  // number of links to retrieve (e.g. buffer of 5 links)
    offset?: number;
}

/**
 * @interface FTSHistoryLink represents a single FTS history entry
 */
export interface FTSHistoryLink {
    url: string;
}

/**
 * @interface GetFTSHistoryLinksResponse represents the ResponseModel for get_fts_history_links usecase
 */
export interface GetFTSHistoryLinksResponse extends BaseResponseModel {
    links: FTSHistoryLink[];
}

/**
 * @interface GetFTSHistoryLinksError represents the ErrorModel for get_fts_history_links usecase
 */
export interface GetFTSHistoryLinksError extends BaseErrorResponseModel {}
