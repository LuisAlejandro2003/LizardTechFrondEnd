import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

function BoxInputForm({type, name, msn}) {
    return (
        <>
            <Input type={type} name={name} />
            <Label msn={msn}/>
        </>
    );
}

export default BoxInputForm;