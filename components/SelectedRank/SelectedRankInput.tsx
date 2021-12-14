import styled from "styled-components";

import React, { useCallback, useEffect, useState } from "react";

interface SelectedRankInputProps {
  value: number;
  onChange: (value: number) => void;
}

const StyledInput = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const InputWrapper = styled.div`
  max-width: 120px;
`;

export const SelectedRankInput: React.FunctionComponent<
  SelectedRankInputProps
> = (props) => {
  const [value, setValue] = useState(props.value || 0);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const onInputBlur = useCallback(
    () => props.onChange(value),
    [props.onChange, value]
  );

  const onInputChange = useCallback(
    (event) => setValue(event.target.value),
    [setValue]
  );

  const onInputKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        props.onChange(value);
      }
    },
    [props.onChange, value]
  );

  return (
    <InputWrapper className={"input__darkBlue-box"}>
      <StyledInput
        type="number"
        className={"input__darkBlue"}
        value={value}
        onBlur={onInputBlur}
        onChange={onInputChange}
        onKeyPress={onInputKeyPress}
      />
    </InputWrapper>
  );
};
