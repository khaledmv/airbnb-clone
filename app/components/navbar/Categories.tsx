'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiIsland, GiWindmill } from 'react-icons/gi';
import { BsSnow } from 'react-icons/bs';
import { BiDiamond } from 'react-icons/bi';
import { FaSkiing } from 'react-icons/fa';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to beach',

    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is close to Windmills'
    },

    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is close to Modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is close to Modern'
    },
    {
        label: 'Polls',
        icon: TbPool,
        description: 'This property is close to Modern'
    },

    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is close Islands'
    },

    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close Lake'
    },
    {
        label: 'Sking',
        icon: FaSkiing,
        description: 'This property is close Sking'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is close Castles'
    },
    {
        label: 'Campaign',
        icon: GiCastle,
        description: 'This property is close Campaign'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is close Artic'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is Cave'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is close Deseart'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is Barns'
    },
    {
        label: 'Lux',
        icon: BiDiamond,
        description: 'This property is Lux'
    }

]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if(!isMainPage){
        return null;
    }



  return (
    <Container>
     <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) =>(
            <CategoryBox
             key={item.label}
             label={item.label}
             icon={item.icon}
             selected={category === item.label }
            
            />
        ))}
     </div>
    </Container>
  )
}

export default Categories