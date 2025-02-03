import HomepageScreen from "@/client/pages/home/HomepageScreen";
import getDataByNext from "@/client/hook/getDataByNext";

export const revalidate = 0
export default async function Home() {
    // const languages = await getDataByNext(`${process.env.API_URL}/languages`);
    const currencies = await getDataByNext(`${process.env.API_URL}/currencies?size=-1`);
    return (
        <div className={'!w-screen !h-screen !max-w-screen'}>
            {/*<HomepageScreen languages={languages} currencies={currencies}/>*/}
            <HomepageScreen currencies={currencies}/>
        </div>
    );
}
