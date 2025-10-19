export interface ToggleFavoriteRequest {
	listingId: string;
}

export interface ToggleFavoriteResponse extends ToggleFavoriteRequest {
	isFavorite: boolean;
}