export const selectTrackState = (state: any) => state.tracks;

export const selectTracks = (state: any) => state.tracks.items;

export const selectPageIndex = (state: any) => state.tracks.pageIndex;

export const selectPageSize = (state: any) => state.tracks.pageSize;

export const selectTotalItems = (state: any) => state.tracks.totalItems;

export const selectTotalPages = (state: any) => state.tracks.totalPages;

export const selectLoading = (state: any) => state.tracks.loading;

export const selectTrack = (state: any) => state.tracks.item;