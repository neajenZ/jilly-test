import { useContext, useState } from "react";
import Select, { IItem } from "../../shared/ui/select/select";
import { BeansContext } from "../../shared/store/context";


const values: IItem[] = [
    {
        value: '7up',
        key: '7up'
    },
    {
        value: 'Acai Berry',
        key: 'Acai Berry'
    },
    {
        value: 'Buttered Popcorn',
        key: 'Buttered Popcorn'
    }
]

const FlavorSelect = () => {
    const [selected, setSelected] = useState<IItem>(values[0])
    const { handleFilterClick } = useContext(BeansContext)
    return (
        <>
            <Select
                label="Flavor"
                options={values}
                handleClick={(val) => {
                    setSelected(val)
                    handleFilterClick('flavorName', val.value)
                }}
                defaultValue={selected} />
        </>
    )
};

export default FlavorSelect;
