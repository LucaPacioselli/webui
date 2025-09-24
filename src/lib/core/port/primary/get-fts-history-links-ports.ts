import { BaseAuthenticatedInputPort, BaseOutputPort } from '@/lib/sdk/primary-ports';
import { GetFTSHistoryLinksError, GetFTSHistoryLinksRequest, GetFTSHistoryLinksResponse } from '@/lib/core/usecase-models/get-fts-history-links-usecase-models';

/**
 * @interface GetFTSHistoryLinksInputPort representing the GetFTSHistoryLinks usecase.
 */
export interface GetFTSHistoryLinksInputPort extends BaseAuthenticatedInputPort<GetFTSHistoryLinksRequest> {}

/**
 * @interface GetFTSHistoryLinksOutputPort representing the GetFTSHistoryLinks presenter.
 */
export interface GetFTSHistoryLinksOutputPort extends BaseOutputPort<GetFTSHistoryLinksResponse, GetFTSHistoryLinksError> {}
