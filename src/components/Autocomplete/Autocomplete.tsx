import React, { FC, useState, useEffect, useRef } from "react";

import styles from "./Autocomplete.module.scss";

interface IAutoCompleteProps {
  name: string;
  label?: string;
  options?: { id: string; name: string }[];
  onChange: (a: string) => void;
  onSelect: (a: object) => void;
  loading?: boolean;
}

const Autocomplete: FC<IAutoCompleteProps> = ({
  name,
  label,
  options,
  onChange,
  onSelect,
  loading,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
    onChange(target.value);

    if (!isOptionsVisible) {
      setOptionsVisible(true);
    }
  };

  const handleOptionClick = (optionKey: string) => {
    const selectedOption = options?.find((opt) => opt.id === optionKey);

    onSelect(selectedOption || {});
    setValue(selectedOption?.name || "");
    setOptionsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      const list = listRef?.current;

      if (list && !list.contains(e.target as Node)) {
        setOptionsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listRef]);

  return (
    <div className={styles.autocomplete}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        id={name}
        name={name}
        autoComplete="off"
        type="text"
        value={value}
        onChange={handleChange}
      />
      {loading && (
        <div className={styles["icon-container"]}>
          <i className={styles.loader}></i>
        </div>
      )}
      {isOptionsVisible && !!options?.length && !loading && (
        <div
          id={`${name}-list`}
          className={styles["options-list"]}
          ref={listRef}
        >
          {options.map(({ id, name }) => {
            const overlapStartIndex = name
              .toLowerCase()
              .indexOf(value.toLowerCase());
            const overlapEndIndex = overlapStartIndex + value.length;

            return (
              <button
                key={id}
                className={styles.option}
                onClick={() => handleOptionClick(id)}
              >
                {name.slice(0, overlapStartIndex)}
                <b>{name.slice(overlapStartIndex, overlapEndIndex)}</b>
                {name.length - overlapEndIndex > 0
                  ? name.slice(-(name.length - overlapEndIndex))
                  : ""}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
