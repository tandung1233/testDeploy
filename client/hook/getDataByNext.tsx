export default async function getDataByNext(url: string) {
    const res = await fetch(url, {
        cache: 'no-store', // Không cache để luôn lấy dữ liệu mới
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}
