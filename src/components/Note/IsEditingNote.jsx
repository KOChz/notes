const IsEditingNote = ({
  formalRef,
  formalOnChange,
  formalValue,
  formalClassName,
}) => (
  <textarea
    className={formalClassName}
    ref={formalRef}
    onChange={formalOnChange}
    rows="6"
    cols="36"
    value={formalValue}
  />
)

export default IsEditingNote
