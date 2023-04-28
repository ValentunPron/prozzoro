import axios from 'axios';

export const fetchData = () => (dispatch: Function) => {
	axios('/api/2.5/tenders').then(({ data }) => {
		const fetchTenderData = async (tenders: any) => {
			const promises = tenders.map((obj: { id: number }) =>
				axios.get(`/api/2.5/tenders/${obj.id}`).then((res) => res.data.data)
			);
			const data: any = await Promise.all(promises);
			dispatch(setData(data));
		};
		fetchTenderData(data.data)
	})
}

export const setData = (items: any) => ({
	type: 'SET_DATA',
	payload: items,
});
