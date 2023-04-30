import axios from 'axios';

export const fetchData = (next_page?: string, prev_page?: string) => (dispatch: Function) => {
	axios(next_page ? next_page : '/api/2.5/tenders').then(({ data }) => {
		const fetchTenderData = async (tenders: any) => {
			const promises = tenders.map((obj: { id: number }) =>
				axios.get(`/api/2.5/tenders/${obj.id}`).then((res) => res.data.data)
			);
			const data: any = await Promise.all(promises);
			dispatch(setData(data));
		};
		fetchTenderData(data.data)
		dispatch(setNextPage(data.next_page.path));
	})
}


export const setData = (items: any) => ({
	type: 'SET_DATA',
	payload: items,
});

export const setNextPage = (next_pages: string) => ({
	type: 'SET_NEXT_PAGE',
	payload: next_pages
});

export const setPrevPage = (prev_pages: string) => ({
	type: 'SET_PREV_PAGE',
	payload: prev_pages
})