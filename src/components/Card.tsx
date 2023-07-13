import { useEffect, useState } from "react"
import axios from 'axios'
import Image from "next/image"

type Agent = {
  displayName: string,
  fullPortraitV2: string,
  uuid: string
  background: string
}


export default function Card(){

  const [agents, setAgents] = useState<Agent[]>([])
  const [search, setSearch] = useState('')
  
  const urlBase = 'https://valorant-api.com/v1/agents'

  useEffect(()=>{
    axios.get(urlBase)
    .then((response)=>{setAgents(response.data.data)})
  },[])

  const filteredRepos = search.length > 0
    ? agents.filter(repo => repo.displayName.includes(search))
    : [];

  return(
   <ul className="flex gap-4">
    {search.length > 0 ?(
      filteredRepos.map((agent)=>{
        return(
          <li  
            className="flex flex-col justify-between items-center bg-white rounded w-60 h-72 bg-center 
            bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAh1BMVEUOGSEAGCD/RlX/SVgAFRwAFBwKGSFaJC0AGSEEGCB1KTPnQU+/OEXQPElxKDLsQlB7KjTaPkw6HygyHSa4N0MjHCSILTg+HyguHSb/S1vHOkdFICkAERgnHCRlJjBPIiuZMDuELDeuNUHrQlCjMj6QLzpcJC1oJjBTIiwbGyOyNkLWPUvhQE6/hD+PAAAE/klEQVR4nO3da1faTBSG4ezZewYjiUEOckZEwBP///e9eyaJvkZdDdVUg8/1pRVYLb1XMsyEJI0iAAAAAAAAAIBPIvXd76Et6KLT6aBWPdQhQqyafKw9YtVDnc6+7777XbSFju9oBRUkCgNOLbRO1Aa16pCUjeFb+e730QqSGtVFrDoQ6whhN0SseiTJ1BNi1SLBd78LAAAAAPgZcFipPhmmKY761yQZcw+x6kGsI9BuvZ0jVk04YQAAAAAAAAAAAAAAAOBUfXxZkcMVRxWu/9GXZs4NUOs16s0+OL9Y0hW+fHyNLqY379ay6ymuv62gC+brd6LQihmxKjSWMS5+8/DSGMSqCrG6tjKUO8kQ660Qi5PKsJVfOohYFSGW4atXtew6PIhYFXks82qQ18HdINY7iljGRM9laJI/glhVz7GeB/kwuIdYOIm3guZFrOdBPr8g1T8yeTOj+O1kV7bZhVp2W/58jg3rDUnKOvdah+7Knzb2u9/ZXyNq6qxaJ11TeCDdKwuX7b1+l+476r6RWhSVsbriovgs195W4b5Sjd2Gi67LXW8mkSs08jf9G6FTY/csk6vnQb69A9WLZmNFMixrncJEtOFYzh7KcWvU/lq092NWc1Pq2JWxbquHa9onnvtPw3lzU2od5Atpiz8HC7Hfsj7TyhX30ovDr/6Pil+WzmGz3V0Fu5Gfz7nyLytfpT/HzU32fhb3MF6GSstx30XSn8Rxv/gWjGzn6mYivsNgovr9cawvzweveDDOXzWeUD/X/i3vT+hm6lfKdM/TO7IpH6xlDvME6WRh74spXk7zPXE6od6UQyXJwgqb5tPDonhyc/K1qMdDiejBr5dF18qX1hrjY9FeQ+3WGWdEI+bZbJYYntA5G/Z7oq6F/Apbl0FPC31O562zdHzqRyNCLCe3up2EtXIZywnzjSXRjW1oR9xdyGLHhjRWvjz0C0edfPlYVqz4F8ipt8pjyYy7lgbMKy5jaZXUb2AxGRaNJf4Lw7mP9Zjyo9VYrPEeQqzIxfwrbrzmY/ltRj/5Mj5fvsTa8i6M4HLJ4wdtMTDcE98wsZn+Tscsm/CtzWPRr4n1eO2/fJYn5vXo/7HWIZY9cF9jLVK+XIQNbnimO+BcelO/dc2WIdbZr4mVMF+JbPg245uXWCv9YPTPj9j43dA+5AO6xupyykySLCli3vyyWMaPWhfMg3E5wC/8Pfoy3ujQTV3e5mPWvT/JIXwaJrqZHfyNWsIxnDzWr7hnq491sNRnviDpFVOHbreb9fuGs6HOCQ429rHC8ZqRj9W1TksO/XYnN/wcy33VHP7nLgg0FutKh3X70fFpE3ZDP8XcCS11b2Oztc7HsuF4TWZ16hCRPz9keuX/OfaRy1ir3tectxWP7/x690eeBKZTqThyNr81ZrhDpi1ush3bs/21FecnXeWzjvLpFJX3S8rvqenERl+1McS6gGru6G9zvmzPOkY89qdhti/Wt0CsI8TzSbMHNE+JW64aPqB5Shx99oAmAAAAtAE+8Ouj6/3+5L/g+SqSMm+xSKlHZgax6pKEiy854M/EWrQCAAAAAAAAAAD4K0TU+ov+/hW67+yXqFWPv9Qe53jV5GPh7MGaqNfpIFZdP/RcegD4KiSC/2i6Jlpl3nu3vYWq/HZi3MztpU4NYh0BsY6AWEeg61mSJLMxYtWBqQMAAAAAAAAAAAAAAOT+A3SDOKNAIcIEAAAAAElFTkSuQmCC')]" 
            
            key={agent.uuid}>
            {agent.fullPortraitV2 &&
              <Image 
                src={agent.fullPortraitV2}
                height={1250}
                width={1250}
                alt=''
              />
            }
            <div className='w-full flex flex-col items-center bg-[#a9b5c92f]'>
              <h1 className='text-2xl'>{agent.displayName}</h1>
              <p>Função</p>
            </div>
          </li>
        )
      })
    ):(
      agents.map((agent)=>{
        return(
          <li  
            className="flex flex-col justify-between items-center bg-white rounded w-60 h-72 bg-center 
            bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAh1BMVEUOGSEAGCD/RlX/SVgAFRwAFBwKGSFaJC0AGSEEGCB1KTPnQU+/OEXQPElxKDLsQlB7KjTaPkw6HygyHSa4N0MjHCSILTg+HyguHSb/S1vHOkdFICkAERgnHCRlJjBPIiuZMDuELDeuNUHrQlCjMj6QLzpcJC1oJjBTIiwbGyOyNkLWPUvhQE6/hD+PAAAE/klEQVR4nO3da1faTBSG4ezZewYjiUEOckZEwBP///e9eyaJvkZdDdVUg8/1pRVYLb1XMsyEJI0iAAAAAAAAAIBPIvXd76Et6KLT6aBWPdQhQqyafKw9YtVDnc6+7777XbSFju9oBRUkCgNOLbRO1Aa16pCUjeFb+e730QqSGtVFrDoQ6whhN0SseiTJ1BNi1SLBd78LAAAAAPgZcFipPhmmKY761yQZcw+x6kGsI9BuvZ0jVk04YQAAAAAAAAAAAAAAAOBUfXxZkcMVRxWu/9GXZs4NUOs16s0+OL9Y0hW+fHyNLqY379ay6ymuv62gC+brd6LQihmxKjSWMS5+8/DSGMSqCrG6tjKUO8kQ660Qi5PKsJVfOohYFSGW4atXtew6PIhYFXks82qQ18HdINY7iljGRM9laJI/glhVz7GeB/kwuIdYOIm3guZFrOdBPr8g1T8yeTOj+O1kV7bZhVp2W/58jg3rDUnKOvdah+7Knzb2u9/ZXyNq6qxaJ11TeCDdKwuX7b1+l+476r6RWhSVsbriovgs195W4b5Sjd2Gi67LXW8mkSs08jf9G6FTY/csk6vnQb69A9WLZmNFMixrncJEtOFYzh7KcWvU/lq092NWc1Pq2JWxbquHa9onnvtPw3lzU2od5Atpiz8HC7Hfsj7TyhX30ovDr/6Pil+WzmGz3V0Fu5Gfz7nyLytfpT/HzU32fhb3MF6GSstx30XSn8Rxv/gWjGzn6mYivsNgovr9cawvzweveDDOXzWeUD/X/i3vT+hm6lfKdM/TO7IpH6xlDvME6WRh74spXk7zPXE6od6UQyXJwgqb5tPDonhyc/K1qMdDiejBr5dF18qX1hrjY9FeQ+3WGWdEI+bZbJYYntA5G/Z7oq6F/Apbl0FPC31O562zdHzqRyNCLCe3up2EtXIZywnzjSXRjW1oR9xdyGLHhjRWvjz0C0edfPlYVqz4F8ipt8pjyYy7lgbMKy5jaZXUb2AxGRaNJf4Lw7mP9Zjyo9VYrPEeQqzIxfwrbrzmY/ltRj/5Mj5fvsTa8i6M4HLJ4wdtMTDcE98wsZn+Tscsm/CtzWPRr4n1eO2/fJYn5vXo/7HWIZY9cF9jLVK+XIQNbnimO+BcelO/dc2WIdbZr4mVMF+JbPg245uXWCv9YPTPj9j43dA+5AO6xupyykySLCli3vyyWMaPWhfMg3E5wC/8Pfoy3ujQTV3e5mPWvT/JIXwaJrqZHfyNWsIxnDzWr7hnq491sNRnviDpFVOHbreb9fuGs6HOCQ429rHC8ZqRj9W1TksO/XYnN/wcy33VHP7nLgg0FutKh3X70fFpE3ZDP8XcCS11b2Oztc7HsuF4TWZ16hCRPz9keuX/OfaRy1ir3tectxWP7/x690eeBKZTqThyNr81ZrhDpi1ush3bs/21FecnXeWzjvLpFJX3S8rvqenERl+1McS6gGru6G9zvmzPOkY89qdhti/Wt0CsI8TzSbMHNE+JW64aPqB5Shx99oAmAAAAtAE+8Ouj6/3+5L/g+SqSMm+xSKlHZgax6pKEiy854M/EWrQCAAAAAAAAAAD4K0TU+ov+/hW67+yXqFWPv9Qe53jV5GPh7MGaqNfpIFZdP/RcegD4KiSC/2i6Jlpl3nu3vYWq/HZi3MztpU4NYh0BsY6AWEeg61mSJLMxYtWBqQMAAAAAAAAAAAAAAOT+A3SDOKNAIcIEAAAAAElFTkSuQmCC')]" 
            
            key={agent.uuid}>
            {agent.fullPortraitV2 &&
              <Image 
                src={agent.fullPortraitV2}
                height={1250}
                width={1250}
                alt=''
              />
            }
            <div className='w-full flex flex-col items-center bg-[#a9b5c92f]'>
              <h1 className='text-2xl'>{agent.displayName}</h1>
              <p>Função</p>
            </div>
          </li>
        )
      })
    )}
    
   </ul>
  )
}