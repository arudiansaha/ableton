type DropdownProps = {
  id: string;
  options: string[];
}

function Dropdown({ id, options }: DropdownProps) {
  const optionItems = options.map((value, index) => (
    <option className="dropdown__item" key={index} value={value}>
      {value}
    </option>
  ));

  return (
    <select className="dropdown__select" name={id} id={id}>
      {optionItems}
    </select>
  );
}

export default Dropdown;
