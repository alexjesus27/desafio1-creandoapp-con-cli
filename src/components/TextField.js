
export function TexField({title, inputProps = {}, ...props}){
    return(
        <div>
            <label>{title}</label>
            <input {...inputProps} type="text"/>
        </div>
    )
}