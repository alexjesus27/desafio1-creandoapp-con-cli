
export function TexField({title, inputProps = {}}){
    return(
        <div className="form-group">
            <label>{title}</label>
            <input {...inputProps} type="text" className="form-control"/>
        </div>
    )
}