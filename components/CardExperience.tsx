import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function CardExperience({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center
    space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-slate-600 p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-100 overflow-hidden'>
        <motion.img 
         initial={{
            y: -100,
            opacity: 0
         }}
         transition={{ duration: 1.2 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className='w-32 h-32 rounded-full xl:w-[200px] object-cover
         object-center'
        src="https://fastly.4sqi.net/img/general/600x600/A3TG5OUNQ0JYNJUCJED3H02GIGC1T0VWDVVEMWOOYN1JEE3L.jpg" 
        alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
              customer service
            </h4>
            <p className='font-bold text-2xl mt-1'>Ferreteria el cid</p>

            <div className='flex space-x-2 my-2'>
                <img 
                 className='h-10 w-10 rounded-full'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABZCAMAAAAzQUv+AAAA6lBMVEX////qQzVChfQ0qFPFIh/7vAQ0f/T5+/8ipEj5/Pn8wAP/vQDqQTPBAAD7uAD7ugDqPCzpNiX98fDoKBDpMBzGIRv75OP50M7taWDLFwAlp1XvgXr1trPEFhLznZjoHgDsXVLIHQ2xPmHtZFr3w8B7rkbylY+RW57629nveHHrSz/rUUbwiIFsnPbourrXgYHMSUfINDHSa2rgoqH+9uX93aH8zGX8xED80X395bjbi4vSY2H81oz+7c3dlZXNWFf8xlNqdNDduSGxtDa4Nk/BKjOrQGhnuXqowPeh0awid/MGoDuDqfd4v4hnbz7oAAADpklEQVRoge3aaXeaQBQG4AtComFQUFCToCaNTc3SJG2zL23tlq39/3+nA2443DugDCdfvB8F5jnz5j2jMQEYz8npmW98+vylCUXM+cWlaZpX1zeV+ddvbbvjG4bRse079fL5ZbVmhlOrVu9jcsuwjel07K+K2YuxGk3VfJi8fmL7Rnzsu7pClW/WnJvqzehCyzaE6fgtZeyDWTOFqUY7rvu+6Bq+sqzvq6IaTvgzvk1sN8r6m4qsz7+jbPWaX0NZnrWRP2sk4zFc4aXCXZ51NyfbJdSoWqcdwjUMr50n63rb26Dc2jWcJVs1Gc1xls+65Tga6ZpXQKrc1Vhj2ay7DaZJXFPuatpyWfOMw4dzuEtlHWac19WYt2jWXY9p+V1NcxfKut52Jw/mdBfKepKxCldjvaxZd3tMU+fyXu9lybq+58UfUuBqDkvPusUcTbXLe72fwu57TFPv8l7vyLKu77jiAzJ3U3I+i+N4dNYtz0ncT7sWDI3dzC4/r6ms9xsseTvlWuZ70PV3m5ldqtdCj1Nc60dpi7v6ByJrbCl+hvQTbN9JZky71s+tUil09WEHffNH10J6neixzOUZc3bk6vovLGt8MbHXSI8lbphxaeaiWVPL8V7Psu4jPSZdK8o47urD34lek+vFeo32mHLHGc+5SK/pBXmvo6zrO2iPCXeSseAmspYtGfWa6jHuTjMWXX3o72Z2Nea2XUnGohvLOOEKWcsX5XLaDRt4xog7l3XasqmzgWeMuXrsvFbmChmjrq7/2VTsihkT7jRrRW4iY8rl5/WuMteyEhmT7rjXKlwsY4kbZZ3ftdCMZW54XivYL5qx1OW9buRkXSLjFFcPeqknkmRYLyhTqtRdgyaTn/uycVgTlnTXAQ6ojzBpm/UOACrLuxCkvefgrBtAPhcGh+THJ3LcwwHkdXnWi/a6cTB6MKcLi/Wa9xjUuNBcIGv3cPq9eW4XYDtjr5m3PXtIgQtBJph5Aah1oXmUnrV7NADVLs86rdeN7fkHFLkQyH434L9DBFCMK+11rMfKXYBjol7MO07erNDl5zX2FuW4YsaqXbTX7hH6NzalLtJrsccFuUKvkz0uyp3Lmsi4EHfWa7THBbrQj2DmJb9UKtaNzhDkrCjc5b3uET0u2IVByvWi3LRZuSt35a7clbtyM7sf38R9hKe1N3DLz7D+8gbuawXoDRfn8u3y+UvAhbnlf6PrTy+oXJBbfn2e3LD+hLW6GPfxOfpHxv8oOH4dVWny8gAAAABJRU5ErkJggg==" 
                alt="" 
                />
                 <img 
                 className='h-10 w-10 rounded-full'
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAdwMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAAABAIHBgQBBg0FAQAAAAAAAQIRA/AEBSExQWGBBhJRkaHBE3HR8bEWIjJTk+EUFyY1QlJVYmRzdJKyFSNFgtIH/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIGAf/EACYRAAICAQMDBAMBAAAAAAAAAAABAgMRBBRSEiExBTJRwWFxgUH/2gAMAwEAAhEDEQA/AOvTe13p0BsGyu6fdqE3szenTMGyyZp821ADr3f4v1yDW613nnhcF+ut865Bdbq73TxwuABr7Gwuu9uGF4d9b/XrkMVXO0NV1IpEOsKSSIiydMNJGamLIrretzjE/jAqP6yL9kr098hNDT2zWYxbI5Wwi8Nm156u/Xs+gXZdGb06ZjVPxgVH9bEe/wCgr066CPy/qL65f2SsNPbMd7S/gzncVcjamyyZp5Y3g9jvq888bhqny/qL65f2SvT3Efl/UX1y/s1/+fcNnfwY3FXI2q6277vTpmDYNkzdurajDVTtPVNaxUwqLS0eMr6KFHuqNuGPpmMy2DZM3Ru2uQgnCUHiSwSRlGSymJvvf165B7u92uXS4O+rv69cgzfXym/C4cnQbBsmbo3bUA3cGfBt19G7YXgAGHBsX4fBugNg2TNqzdW1C7G7S74N0BsGyu1ZuragBq76u/xfrkD+t/fo+FwX4u+t/r1yDPXhPnhcAOA7X0uLStra1XFUZmikKhpI/wBFKfmkRcLhjd8xdbRl+U9b/wBbFwb9MxZj01HaCMez3Mm3zGVqWoazrtaioFHVESj6cQzIkp1P4DEptMh3rZmhQ6DUNBo8FJEXgpUr95Rk5nzEWr1LoimvLOqKVZLBzCn7C1zQaFHpcY6P4cFBrXuxXNivwGq7xjpm0e3lAjUKsKuhUWkHEWhcElq3SS9pPeOZYjvTzulHNqwfLVBPEHlG77LUpJbJVka0l49FUqLR4jFvIUSSUTH5kOsQz30JNryL5ras3VtR57gx4iKHFhJiKSlRGZpI7DNh6EhF/tIJi+iRM2Ts3bUUPU61Hpl85+izo5Zyvgmv11d/i/UM3zd+GeXS4J5zqHvf374XDKLwZ/mtk270btheAM9jZNu9G7YXgAFuJt2adMXBssmaeWtweR5zNmIaZXHPfG4AL7/W+dcGDy87554XBPm/r1wCX7z8QB542is2nrcv42Lg36Zi0F5tGX5UVv8A1sXD94xaD01PsRj2e5m/f/Pdm6rrmrKTHrCAqJERH3EmURSWLdI8PMdMgw0wYSIcMmQhJJSWRDhVUbQVrVEJUGrqWqDDWreURISpzZntIx3Gr1qjUKjRIh7y1wkKUfEzIhl+oQsUupvs/Bc0sotYS7mpbTbIVLAqesKbCo600hENURKvFUdt9zsOTnYY2Outqq6jrpdCjU9aqOpSkKRuIJ0vc5Jca2NHTV2Qjix5KlsoylmKwVYX0FeQ9FII9xJYMRM3btqPOsK4ei0l80iyZmnlfjcKnqviH9+ixovMiPDPq864MFvK2+fuuDN5OdcAl/KdMRjl8NgXk26fJr9NQDJsmY/hfpeAAHlM9MQ06T66CBnMzxEDObZ76ACbW2ZzwCZluNopmqZngG9M+3G0Aef9pCbamty/jYv+Ri0YZnamro0HamtN9i3qQqIlyO0lfOK/zFj+CRP3eY9VRButP8GLbJdTLVJWkPQNVfm6h/yYf+JDhH4JEy5jMw6+r+FDTDh1lGShBElJEu4iuEOr0c70lH/Dui+NTbZhK0/ONJ/mq+Ji1F7Eo0WIs1rMjUo3MzO8S/ga8uYtquSRD1IowbyHosriLG64/fvoOCUCq41IpUKDDNJqiLJJF5mO9zj799BkerduhfsvaLv1MTM24BLzPG0JmfIM5npxtGOXxizdD99L+NggIzj799AAEDmZzFNWXf376CodszN4lNLyfv30AFBa2mZuFBdI3cZnTjaLpUJ75nLQUV0VKpn042j6ga9tBQaqrUkqpzojIJkxodiiLgfEvO0a2qoqlIzI60pP9hek4Dd6TU6IzupRTOfGwWCtmYT/AE1ZzOQtV6q6uPTGXYgnRXN5aNV/0Opf2pSf7E+gFUVS/tWkfZl6TiNo+TMH9dXIp7ah8mYX665n1Em/1HM42tXE1tOz9SH/AMvSC/6F6CvD2YqNZ/NrikvwNCRnfkzC+sXM+fCwTI2bhpN/FX0mbLQ3+o5n3a1cSrs9UtUVUvxqPEXHpFxRIpk6fIrilxsRREni/P376DEUaqyg3LVM+ovkQt3jPXvoKtlkrJdU3lk0IKCxFF2SiOZm4RmcO3G0UEk33zOAqkZzLTbaIjsmnH378bBARw9/fvoIACMzPmE4z30EStNBHcZw3zcreYkIz8MlOb7jvnvN8LABM3SZ6A0z7cbQVYcRrN3xGyYibkJkERxEEZORrSRlxI0ufUASMUz9/GwN0uEz9wlSZ+ERvbuoN/NRkfQTrsKI1jJimWTHZyAEu4RyU9tQ3CmZxE7F4pE1hxN0yy3HbnaJUWpSZ2m0LqdvMAQ3CmZwsDcKZnC0DMySZvb4az1JTEfITqIiiGRXb6y0JLkXMAS7hO0zJiG6XPOT76CZFqyI7nhdSt5iUjM0Eb2mh3z3mflYAI7szPAGwmenG0F2b7WMcRsmKzkJ0kXiklrN9JN5pc+oAlutfqfv30AUzUoqPvEZ73hpU72u7OAA/9k=" 
                alt="" 
                />
            </div>

            <p className='uppercase py-5 text-gray-400'>start work... end</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>summary point summary point summary point summary point
                    summary point summary point summary point summary point
                    summary point summary point
                </li>
                <li>summary point summary point summary point summary point
                    summary point summary point summary point summary point
                    summary point summary point
                </li>
                <li>summary point summary point summary point summary point
                    summary point summary point summary point summary point
                    summary point summary point
                </li>
                <li>summary point summary point summary point summary point
                    summary point summary point summary point summary point
                    summary point summary point
                </li>
            </ul>
        </div>
    </article>
  )
}