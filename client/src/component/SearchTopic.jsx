import axios from "axios";
import { useEffect, useState } from "react"

export function SearchTopic() {
    const [topic, setTopic] = useState('');
    const [searchTopic,setSearchTopice]  = useState("");

const getTopicData = async () => {
    const topicDataFromServer = await axios.get(`http://localhost:4001/trips?keywords=${searchTopic}`);
    setTopic(topicDataFromServer.data)
};

useEffect(() => {
    getTopicData();
}, [searchTopic]);

    return (
        <div className="flex justify-center items-center "> 
            <div className="Search-Topic w-3/4 flex flex-col  p-5">
                <p className="pt-5 font-bold">ค้นหาที่เที่ยว</p>
                <input 
                    type="text" 
                    className={`border-b-2 border-black focus:border-blue-400 mt-3 outline-none ${topic ? '' : 'custom-placeholder'}`} 
                    placeholder={topic ? '' : 'หาที่เที่ยวแล้วไปกัน'} 
                    onFocus={() => setTopic('')}
                    onBlur={() => setTopic('หาที่เที่ยวแล้วไปกัน')}
                    value={searchTopic}
                    onChange={(event)=>
                        setSearchTopice(event.target.value)
                    }
                    style={{ textAlign: "center"}}
                />
            </div>
        </div>
    )
}
