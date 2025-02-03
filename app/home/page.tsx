
import HomepageScreen from "@/client/pages/home/HomepageScreen";
import getDataByNext  from '@/client/hook/getDataByNext'

export  default async function Page(){
    const languages = await getDataByNext(`${process.env.API_URL}/languages`);
    const currencies = await getDataByNext(`${process.env.API_URL}/currencies?size=-1`);
    return (
        <div>
            <HomepageScreen languages={languages} currencies={currencies}/>
        </div>
    )
}
