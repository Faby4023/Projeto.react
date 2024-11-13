type TitleProps = {
    text: string;
    name?: string;
};

export function Title(props: TitleProps) {
    console.log(props.text);
    console.log(props.name);
    return <h1 className="text-2x1 font-bold">{props.name}</h1>;
}