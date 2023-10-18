'use client';

type Props={
    label:string;
}


const FormLabel:React.FC<Props>=function({label}){
    return <label className="font-[600]">{label}</label>
}

export default FormLabel;