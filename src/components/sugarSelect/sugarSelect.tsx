import { useContext, useState } from "react";
import Select, { IItem } from "../../shared/ui/select/select";
import { BeansContext } from "../../shared/store/context";


const values: IItem[] = [
    {
        value: 'Yes',
        key: true
    },
    {
        value: 'No',
        key: false
    }
]

const SugarSelect = () => {
    const [selected, setSelected] = useState<IItem>(values[0])
    const { handleFilterClick } = useContext(BeansContext)
    return (
        <>
            <Select
                label="Sugar"
                options={values}
                handleClick={(val) => {
                    setSelected(val)
                    handleFilterClick('sugarFree', `${val.key}`)
                }}
                defaultValue={selected} />
        </>
    )
};

export default SugarSelect;
